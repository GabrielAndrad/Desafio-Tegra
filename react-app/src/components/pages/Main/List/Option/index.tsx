import React from 'react';
import * as ReactRedux from 'react-redux'
import { IAppState } from '../../../../../redux/configureStore';
import { StyleList } from '../../../../Assets/Styles';
import List from '..';
import { getTimeInterval, getValueTotal } from '../../../../../redux/reducers/functions';


interface Iprops {
    option: any
    check: boolean
}



function Option(props: Iprops) {

    const airportState = ReactRedux.useSelector((state: IAppState) => {
        return state.airport;
    });

    const flightState = ReactRedux.useSelector((state: IAppState) => {
        return state.flights;
    })

    let array = [];

    return (
        <StyleList>
            {props.check === true ? props.option.map((val) => flightState.flights.map((fly, index) => {

                //buscando o nome de origem
                const from = airportState.airport.map((air) => {
                    if (air.aeroporto === fly.origem) {
                        return air.nome;
                    } else
                        return undefined;
                })

                //buscando o nome de destino
                const to = airportState.airport.map((air) => {
                    if (air.aeroporto === fly.destino) {
                        return air.nome;
                    } else
                        return undefined;
                })

                //buscando as escalas dos voos
                const scales = airportState.airport.map((air) => {
                    if (air.aeroporto === fly.voos[0].destino && fly.voos.length !== 1) {
                        return air.cidade;
                    } else
                        return undefined;
                })

                //buscando o valor total do voo
                const value = getValueTotal(fly.voos, array)
                //buscando o tempo total de voo 
                const time = getTimeInterval(fly.voos);

                if (val === value || val === parseFloat(time)) {
                    //retornando as listas dos voos disponiveis
                    return (
                        <List
                            key={index}
                            from={from}
                            to={to}
                            departureDate={fly.date}
                            value={value.toFixed(2)}
                            timeFlight={time}
                            scales={scales}
                        />
                    )
                }
            })
            ) : flightState.flights.map((fly, index) => {

                //buscando o nome de origem
                const from = airportState.airport.map((air) => {
                    if (air.aeroporto === fly.origem) {
                        return air.nome;
                    } else
                        return undefined;
                })

                //buscando o nome de destino
                const to = airportState.airport.map((air) => {
                    if (air.aeroporto === fly.destino) {
                        return air.nome;
                    } else
                        return undefined;
                })

                //buscando as escalas dos voos
                const scales = airportState.airport.map((air) => {
                    if (air.aeroporto === fly.voos[0].destino && fly.voos.length !== 1) {
                        return air.cidade;
                    } else
                        return undefined;
                })

                //buscando o valor total do voo
                const value = getValueTotal(fly.voos, array)
                //buscando o tempo total de voo 
                const time = getTimeInterval(fly.voos);

                //retornando as listas dos voos disponiveis
                return (
                    <List
                        key={index}
                        from={from}
                        to={to}
                        departureDate={fly.date}
                        value={value.toFixed(2)}
                        timeFlight={time}
                        scales={scales}
                    />
                )
            }
            )
            }
        </StyleList>
    )
}

export default Option;
