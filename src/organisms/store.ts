
import {createStore} from 'redux'
import ReducersCombinados from '../molecules/rootReducer';

let store = createStore(ReducersCombinados);

export default store;