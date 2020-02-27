import React from 'react';
import { IconDate, IconMoney, IconAirDown, IconAirUp } from '../../../Assets/Styles'


interface Iprops {
  departureDate: string;
  value: number;
  timeFlight: any;
  from: string;
  to: string;
  scales: string;
}


function List(props: Iprops) {

  
  return (
    <div>
     <ul>
        <li> <IconAirDown />{props.from}</li>
        <li> <IconAirUp /> {props.to}</li>
        <li> <IconDate /> {props.departureDate} </li>
        <li> <IconMoney /> R$ {props.value} </li>
        <li> <span>Tempo Total: </span> {props.timeFlight}</li>
        <li> <span>Escalas em:</span> {props.scales}</li>
      </ul>
    </div>
  )
}

export default List;