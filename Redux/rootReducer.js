import { combineReducers } from 'redux'
import { reducer } from './Reducer/Reducer';
import orientationState from './orientation/reducer'
import reducerMode from './Reducer/modeChange'


const rootReducer = combineReducers({
  data: reducer,
  orientationState,
  modeChange: reducerMode
})

export default rootReducer;