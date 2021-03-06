// Configurações do datapicker (https://github.com/Pikaday/Pikaday) 
var picker = new Pikaday({ 
  field: document.getElementById('datepicker'),
  format: 'DD/MM/YYYY',
  toString(date, format) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  }
});

validation.init();

validation.highlight();
