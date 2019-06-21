const fs = require('fs');
const path = require('path');
const readline = require('readline');

const currentDir = './src';

let reducers = [];
let listFile = async (dirName) => {
  let fileNames = fs.readdirSync(dirName, 'utf8');
  for (var i = 0; i < fileNames.length; i++) {
    let fileName = path.join(dirName, fileNames[i]);
    if (fs.statSync(fileName).isDirectory()) {
      await listFile(fileName);
    } else {
      if (fileNames[i].indexOf('Reducer') > -1) {
        let fileName  = path.join(dirName, fileNames[i]);
        let _dirName  = dirName.replace('src', '..');
        let _fileName = fileNames[i].replace('.js', '');

        reducers.push({
          path : fileName,
          parent : _dirName,
          fileName : _fileName
        });
      }
    }
  }
}
(async () => {  
  await listFile(currentDir);
  let rs = fs.createReadStream(currentDir + "/store/AppStore.js" );
  let rl = readline.createInterface(rs, {});  
  let isWrite = true;
  let lines = [];
  let split = '';
  rl.on('line', (line) => {
    if (line.indexOf('/*') > -1 && line.indexOf('start') > -1) {
      lines.push(line);
      isWrite = false;
      if (line.indexOf("import") > -1) {
        for (let reducer of reducers) {
          lines.push(`import ${reducer.fileName} from '${reducer.parent}/${reducer.fileName}'`)
        }
      } else {
        for (let reducer of reducers) {
          lines.push(
            `    ${split}${reducer.fileName.replace('Reducer', '')} : ${reducer.fileName}`
          );
          split = ',';
        }
      }
    }
    if (line.indexOf('/*') > -1 && line.indexOf('end') > -1) {
      isWrite = true;
    }
    if (isWrite) {
      lines.push(line);
    }
  });
  rl.on('close', (line) => {
    fs.writeFileSync(currentDir + "/store/AppStore.js", lines.join('\n'));
  });
})();