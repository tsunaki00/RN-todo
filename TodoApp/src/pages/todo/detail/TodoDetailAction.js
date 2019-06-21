import axios from 'axios';
import config from '../../../../assets/config';
import {actionCreatorFactory} from '../../../common/ActionCreator';

const BASE_URL = `${config.apiServer.protocol}://${config.apiServer.host}:${config.apiServer.port}${config.apiServer.path}`;
export const ACTION_TYPE = {
  TODO_DETAIL : actionCreatorFactory("TODO_DETAIL"),
};

/** ToDo Body */
export const get = (id) => (dispatch) => {  
  dispatch({ type: ACTION_TYPE.TODO_DETAIL.start, payload: { wait : true  } });
  axios.get(`${BASE_URL}/todo/${id}`).then((res) => {
    dispatch({ type: ACTION_TYPE.TODO_DETAIL.success, payload: { wait : false,  result : res.data } });
  });
}