import axios from 'axios';
import config from '../../../../assets/config';
import {actionCreatorFactory} from '../../../common/ActionCreator';

const BASE_URL = `${config.apiServer.protocol}://${config.apiServer.host}:${config.apiServer.port}${config.apiServer.path}`;
export const ACTION_TYPE = {
  TODO_ENTRY : actionCreatorFactory("TODO_ENTRY"),
};

/** ToDo Entry */
export const entry = (param) => (dispatch) => {  
  dispatch({ type: ACTION_TYPE.TODO_ENTRY.start, payload: { wait : true, entry : false  } });
  axios.post(`${BASE_URL}/todo`, param).then((res) => {
    dispatch({ type: ACTION_TYPE.TODO_ENTRY.success, payload: { wait : false, entry : true } });
  });
}