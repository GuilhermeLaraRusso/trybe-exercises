import React from 'react';

class House extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="casa">
          <input type="radio" value='casa' name='house' id='casa' /> Casa
        </label>
        <label htmlFor="apartamento">
          <input type="radio" value='apartamento' name="house" id="apartamento" /> Apartamento
        </label>
      </div>
    )
  }
}

export default House;
