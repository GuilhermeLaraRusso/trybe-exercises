import React from 'react';

class Adress extends React.Component {
  render() {
    const { value, handleChange} = this.props;
    
    if (value > 10 ) {
      alert('alerta');
    }
    return (
      <label htmlFor="address">
        Endereço:
        <input type="text" name="address" id="address" required placeholder='Endereço' maxLength='200' value={value} onChange={handleChange} />
      </label>
    )
  }
}

export default Adress;
