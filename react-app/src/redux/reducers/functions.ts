
export function getValueTotal (flights,array){
    array = [];
   flights.map((voos) => {
     array.push(voos.valor)
     return array;
   })
   const value = array.reduce(function (acumullate, add) {              
     return acumullate += add;
   })
  
   return value;
  }
  
  
  export function getTimeInterval(fligths) {
        const time = fligths.map((time) => {
        const exit = time.saida.split(':');
        const arrival = time.chegada.split(':');
        let hour = parseInt(arrival[0], 10) - parseInt(exit[0], 10);
        let min = parseInt(arrival[1], 10) - parseInt(exit[1], 10);
    
        if (min < 0) {
          min += 60;
          hour -= 1;
        }
    
        const fullTime = ("00" + hour).slice(-2) + ':' + ("00" + min).slice(-2);
        return fullTime;
      })
      if(fligths.length === 1){
         return time;
      }
      else{
        return getTimeSoma(time);
      }
  
    }
  
  function getTimeSoma(time){
    
    const hourInit = time[0].split(':'); 
    
      const hourAdd = time[1].split(':'); 
      let hour = parseInt(hourInit[0], 10) + parseInt(hourAdd[0], 10); 
      let min = parseInt(hourInit[1], 10) + parseInt(hourAdd[1], 10); 
  
      if(min >= 60){ 
      min -= 60; 
      hour += 1; 
      } 
    const finalHour = ("00" + hour).slice(-2) + ":" + ("00" + min).slice(-2);
  
      return finalHour; 
  }  