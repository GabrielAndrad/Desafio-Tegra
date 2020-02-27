const HTTP_FLIGHTS_PENDING = "@availableFlights/HTTP_FLIGHTS_PENDING";
const HTTP_FLIGHTS_SUCESS = "@availableFlights/HTTP_FLIGHTS_SUCESS";
const HTTP_FLIGHTS_FAIL = "@availableFlights/HTTP_FLIGHTS_FAIL"

//estado inicial do reducer
const INITIAL_STATE = {
    isFetching: false,
    hasErrors: false,
    isEmpty: true,
    flights: []
};

//reducer
export default function reducer(state = INITIAL_STATE, action: any) {
    switch (action.type) {
        case HTTP_FLIGHTS_PENDING:
            return {
                ...state,
                isFetching: true,
            }
        case HTTP_FLIGHTS_SUCESS:
            return {
                ...state,
                isFetching: false,
                isEmpty: false,
                flights: action.payload.flights
            };
        case HTTP_FLIGHTS_FAIL:
            return {
                ...state,
                hasErrors: true,
            };

        default:
            return state;
    }
}

//action que serve pra consumir a api
export function getFlights(from: string, to: string, date: string) {
    return async function (dispatch) {
        const body = {
            from: from,
            to: to,
            date: date
        };

        dispatch(getFlightsPending());
        try {
            const url = 'https://api-voadora.dev.tegra.com.br/flight';
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            }
            )
            const flights = await response.json();
            dispatch(getFlightsSucess(flights));

        }
        catch (e) {
            dispatch(getFlightsFail());
        }
    }
}

//função dispara enquanto a requisição estiver carregando
function getFlightsPending() {
    return {
        type: HTTP_FLIGHTS_PENDING,
        payload: ""
    }
};


//função dispara quando a requisição for um sucesso
function getFlightsSucess(flights) {
    return {
        type: HTTP_FLIGHTS_SUCESS,
        payload: {
            flights: flights
        }
    };
}

//função dispara quando a requisição falhar
function getFlightsFail() {
    return {
        type: HTTP_FLIGHTS_FAIL,
        payload: ""
    };
}

