const HTTP_GET_AIRPORT_PENDING = "@airport/HTTP_GET_AIRLINE_PENDING";
const HTTP_GET_AIRPORT_SUCESS = "@airport/HTTP_GET_AIRLINE_SUCESS";
const HTTP_GET_AIRPORT_FAIL = "@airport/HTTP_GET_AIRLINE_FAIL"


//estado inicial do reducer
const INITIAL_STATE = {
  isFetching: false,
  hasErrors: false,
  isEmpty: false,
  airport: []
};

//reducer
export default function reducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case HTTP_GET_AIRPORT_PENDING:
      return {
        ...state,
        isFetching: true
      };
    case HTTP_GET_AIRPORT_SUCESS:
      return {
        ...state,
        isFetching: false,
        isEmpty: action.payload.isEmpty,
        airport: action.payload.airport
      };
    case HTTP_GET_AIRPORT_FAIL:
      return {
        ...state,
        hasErrors: true,
        airport: INITIAL_STATE.airport
      };

    default:
      return state;
  }
}

//action que serve pra consumir a api
export function getAirport() {
  return async function (dispatch) {
    dispatch(getAirportPending());
    try {
      const url = 'https://api-voadora.dev.tegra.com.br/flight/companies'
      const response = await fetch(url);
      const airport = await response.json();

      dispatch(getAirportSucess(airport));
    }
    catch (e) {
      dispatch(getAirportFail());
    }
  }
}

//função dispara enquanto a requisição estiver carregando
function getAirportPending() {
  return {
    type: HTTP_GET_AIRPORT_PENDING,
    payload: ""
  };
}

//função dispara quando a requisição for um sucesso
function getAirportSucess(airport) {
  return {
    type: HTTP_GET_AIRPORT_SUCESS,
    payload: {
      airport: airport,
      isEmpty: false
    }
  };
}

//função dispara quando a requisição falhar
function getAirportFail() {
  return {
    type: HTTP_GET_AIRPORT_FAIL,
    payload: ""
  };
}

