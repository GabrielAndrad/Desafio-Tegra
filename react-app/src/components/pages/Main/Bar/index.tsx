import React from 'react';
import * as ReactRedux from 'react-redux'
import { StyleSelect, StyleMenuBar, StyleButton } from '../../../Assets/Styles'
import { getFlights } from '../../../../redux/reducers/availableFlights';


interface Iprops {
  text1: string;
  text2: string;
  state: any;
  flight: any;
}

function Bar(props: Iprops) {
  const dispatch = ReactRedux.useDispatch();

  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  const [date, setDate] = React.useState("");

  function handleChange(e) {
    setFrom(e.target.value);
  }

  function handleChange2(e) {
    setTo(e.target.value);
  }

  function handleChange3(e) {
    setDate(e.target.value)
  }

  function handleClick() {
    const action = getFlights(from, to, date);
    dispatch(action)
  }



  return (
    <div>
      <StyleMenuBar>
        <StyleSelect>
          <span>{props.text1}</span>
          <select onChange={handleChange}>
            <option disabled selected>Selecione um Aeroporto...</option>
            {props.state.airport.map((air, index) => {
              return (
                <option key={index} value={air.aeroporto}>{air.nome}</option>
              )
            })}
          </select>
        </StyleSelect>
        <StyleSelect>
          <span>{props.text2}</span>
          <select onChange={handleChange2}>
            <option disabled selected>Selecione um Aeroporto...</option>
            {props.state.airport.map((air, index) => {
              return (
                <option key={index} value={air.aeroporto}>{air.nome}</option>
              )
            })}
          </select>
        </StyleSelect>
        <StyleSelect>
          <div>
            <span>Datas disponiveis:</span>
            <input type="date" onChange={handleChange3} min='2019-02-10' max='2019-02-18' />
          </div>
        </StyleSelect>
        <StyleButton
          onClick={handleClick}>
          {props.flight.isFetching === true ? 'Carregando...' : 'Buscar'}
        </StyleButton>
      </StyleMenuBar>

    </div>
  );
}

export default Bar;