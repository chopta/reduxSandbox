import {combineReducers} from 'redux';
import itemsReducer from './reducer-items'
import projectsReducer from './reducer-projects'

const allReducers = combineReducers(
  {
      items: itemsReducer,
      projects: projectsReducer
  }
);

export default allReducers;
