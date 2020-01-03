import { combineReducers } from 'redux';
import form from './form/reducer';
import list from './list/reducer';
import task from './task/reducer';
import search from './search/reducer';
import isFetch from './fetch/reducer';

export default combineReducers({list, search, form, task, isFetch});