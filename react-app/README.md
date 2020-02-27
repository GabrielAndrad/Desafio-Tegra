## Desafio Tegra

Etapas para rodar o projeto

## extensões que precisam ser instaladas:
  npm install redux
  npm install react-redux
  npm install redux-thunk
  npm install redux-devtools-extension
  npm install styled-components
  npm install styled-icons
  
 ##Etapas do projeto:
 
 1- A api de aeroportos foi consumida a partir da action getAirport do reducer airport.ts, atualizando o state airport.
 
 2- Logo após, no componente Bar dentro do componente Main, os dados referentes a api de aeroportos foram colocados dentro
 de dois selects, o primeiro para retornar o aeroporto de origem e o segundo para retornar o aeroporto de destino.
 Ainda dentro do componente Bar, também foi disponibilizada as datas disponiveis dentro da api.
 
 3- A api de voos foi consumida a partir da action getFlights do reducer availableFlights.ts, recebendo como parametro
 os 3 dados solicitados pelos select do componente Bar, e atualizando o state Flights com os dados retornados referentes aos
 voos.
 
 4- No componente Main, foram colocados dois inputs do tipo checkbox para verificar se o usuário quer ordenar a lista ou não.
 
 5- Após verificar se os checkbox foram selecionados ou não, são passados como parametro pro componente option dentro do componente
 Main, o estado dos checkbox e o array com as informaçoes selecionadas ordenadas ou não.
 
 6- O componente List é chamado dentro do componente Option, mostrando os dados referentes a api de voos.
 
 7- Dentro do arquivo function.ts estão as funções utilizadas para pegar o valor total e o tempo total com base na espera entra as escalas
 
 
  
