import React, { useEffect } from 'react';
import * as ReactRedux from 'react-redux'
import Bar from './Bar/index';
import { StyleMain, StyleContainer, StyleChecked } from '../../Assets/Styles';
import { getAirport } from "../../../redux/reducers/airport"
import { IAppState } from '../../../redux/configureStore';
import { getTimeInterval, getValueTotal } from '../../../redux/reducers/functions';
import Option from './List/Option/index'



function Main() {
  const dispatch = ReactRedux.useDispatch();
  const airportState = ReactRedux.useSelector((state: IAppState) => {
    return state.airport;
  });

  const flightState = ReactRedux.useSelector((state: IAppState) => {
    return state.flights;
  })

  const [checkedValue, ischeckedValue] = React.useState(false)
  const [checkedTime, ischeckedTime] = React.useState(false)


  useEffect(() => {
    const action = getAirport();
    dispatch(action);

  }, []);

  let array = [];//array genérico
  let showValue = [];
  let showTime = [];

  //verificando se o estado do checkbox  
  function handleChangeValue(e) {
    ischeckedValue(e.target.checked)
  }
  function handleChangeTime(e) {
    ischeckedTime(e.target.checked)
  }


  //ordenando por valor
  flightState.flights.map((fly) => {
    const value = getValueTotal(fly.voos, array)
    showValue.push(value)
  })

  showValue.sort(function (a, b) {
    return a - b;
  })

  //ordenando por tempo
  flightState.flights.map((fly) => {
    const time = getTimeInterval(fly.voos)
    showTime.push(parseFloat(time))
  })

  showTime.sort(function (a, b) {
    return a - b;
  })

  return (
    <div>
      <StyleMain>
        <StyleContainer>
          <Bar
            text1="Aeroporto de Origem"
            text2="Aeroporto de Destino"
            state={airportState}
            flight={flightState}
          />
        </StyleContainer>

        <StyleChecked>
          <p>Ordenar por:</p>
          <label htmlFor="value">Menor valor: </label>
          <input type="checkbox" id="value" name="itens" value="value" onClick={handleChangeValue}></input>
          <label htmlFor="time"> Menor tempo: </label>
          <input type="checkbox" id="time" name="itens" value="time" onClick={handleChangeTime}></input>
        </StyleChecked>

        {flightState.isEmpty ? undefined : <h1>Vôos disponiveis</h1>}
        {flightState.flights[0] === undefined && flightState.isEmpty === false ? <p>Não há vôos disponiveis no momento</p> : undefined}
        {flightState.isFetching ? <p>Carregando...</p> :
          checkedValue ?
            <Option option={showValue} check={true} /> :
            checkedTime ?
            <Option option={showTime} check={true} /> : <Option option={[]} check={false} />}

      </StyleMain>
    </div>
  );
}

export default Main;

