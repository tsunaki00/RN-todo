import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem : {
    backgroundColor: '#FFF',
    justifyContent: 'center',
    borderBottomColor : '#ccc',
    borderBottomWidth : 1,

  },
  row : {
    flexDirection: 'row',
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    width : '100%'
  },
  listView : {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',

  },
  listViewIcon : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  updateButton : {
    margin: 3,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    height: 44
  },
  updateButtonText : { 
    fontSize : 30,
    color: "#fff",
    fontWeight: "bold" 
  },
  deleteButton : {
    margin: 3,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "red",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    height: 44
  },
  deleteButtonText : { 
    fontSize : 30,
    color: "#fff",
    fontWeight: "bold" 
  },
  entry : {
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 20,
    bottom: "4%",
    borderRadius: 40,
    // opacity: .7,
    backgroundColor: '#ddd',
    borderColor: '#fff',
    borderWidth : 4,
    backgroundColor: '#ccc',
  },

});

export default style;
