import React from 'react';

class CPF extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="cpf">
        CPF:
        <input type="text" required maxLength='11' placeholder='CPF' name='cpf' id='cpf' value={value} onChange={handleChange} />
      </label>
    )
  }
}

export default CPF;
