import * as Redux from 'redux';
import * as ReduxDevtools from 'redux-devtools-extension';
import Reduxthunk from 'redux-thunk';

import airportReducer from './reducers/airport'
import flightsReducer from './reducers/availableFlights'


// Criação do state através dos reducers.
const state = {
    airport: (state: any, action: any) => airportReducer(state, action),
    flights: (state: any, action: any) => flightsReducer(state, action),
}


const rootReducer = Redux.combineReducers(state);

export type IAppState = ReturnType<typeof rootReducer>;


//Criação da store
const store = Redux.createStore(
    rootReducer,
    ReduxDevtools.composeWithDevTools(Redux.applyMiddleware(Reduxthunk))
);

export default store;