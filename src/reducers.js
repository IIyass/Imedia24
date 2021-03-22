/**
 * Combine all reducers in this file and export the combined reducers.
 */

 import { combineReducers } from 'redux';
 import pokemonReducer from './store/pokemon/reducer';
 
 /**
  * Merges the main reducer with the router state and dynamically injected reducers
  */
 export default function createReducer(injectedReducers = {}) {
   const rootReducer = combineReducers({
      pokemonReducer,
     ...injectedReducers,
   });
   // Wrap the root reducer and return a new root reducer with router state
   return rootReducer;
 } 