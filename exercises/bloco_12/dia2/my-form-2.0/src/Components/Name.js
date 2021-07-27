import React from 'react';

class Name extends React.Component{
  render() {
    const { value, handleChange } = this.props

    return(
      <label htmlFor="name">
        Name:
        <input type="text" required placeholder='Digite seu nome' name='name' maxLength='40' id='name' value={value} onChange={handleChange} />
      </label>
    )
  }
}

export default Name;
