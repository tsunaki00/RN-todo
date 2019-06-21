import axios from 'axios';
import config from '../../../../assets/config';
import {actionCreatorFactory} from '../../../common/ActionCreator';

const BASE_URL = `${config.apiServer.protocol}://${config.apiServer.host}:${config.apiServer.port}${config.apiServer.path}`;
export const ACTION_TYPE = {
  TODO_LIST : actionCreatorFactory("TODO_LIST"),
  TODO_DELETE : actionCreatorFactory("TODO_DELETE"),
};

/** ToDo List */
export const getList = () => (dispatch) => {  
  dispatch({ type: ACTION_TYPE.TODO_LIST.start, payload: { wait : true  } });
  axios.get(`${BASE_URL}/todo`).then((res) => {
    dispatch({ type: ACTION_TYPE.TODO_LIST.success, payload: { wait : false,  results : res.data } });
  });
}

/**  ToDo削除 */
export const remove = (id) => (dispatch) => {  
  dispatch({ type: ACTION_TYPE.TODO_DELETE.start, payload: { wait : true ,  results : []  } });
  axios.delete(`${BASE_URL}/todo/${id}`).then((res) => {
    dispatch({ type: ACTION_TYPE.TODO_DELETE.success, payload: { wait : false,  results : res.data } });
  });
}