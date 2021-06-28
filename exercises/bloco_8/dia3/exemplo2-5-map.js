const cities = [
  { state: 'AM', name: 'Manaus', region: 'N'},
  { state: 'PA', name: 'Belém', region: 'N'},
  { state: 'TO', name: 'Porto Nacional', region: 'N'},
  { state: 'MG', name: 'Lavras', region: 'SE'},
  { state: 'BA', name: 'Feira de Santana', region: 'NE'},
  { state: 'PR', name: 'Cascavel', region: 'S'},
  { state: 'SP', name: 'Presidente Prudente', region: 'SE'},
  { state: 'RN', name: 'Touros', region: 'NE'},
  { state: 'CE', name: 'Jericoacoara', region: 'NE'},
];

let citiesAndStates = cities.map((city) => {
  return `${city.name} - ${city.state}`;
});

console.log(citiesAndStates)