import { combineReducers } from 'redux';

import foo from './foo_reducer';
import user from './user_reducer';

const rootReducer = combineReducers({
  user,
  foo,
});

export default rootReducer;
