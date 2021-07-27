import React from 'react';

class City extends React.Component {
  render() {
    const { value, handleChange } = this.props
    
    return (
      <label htmlFor="city">
        Cidade:
        <input type="text" name="city" id="city" required maxLength='28' placeholder='Cidade' value={value} onChange={handleChange} />
      </label>
    )
  }
}

export default City;
