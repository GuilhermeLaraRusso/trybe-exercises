import React from 'react';

class Email extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return(
      <label htmlFor="email">
        E-mail:
        <input type="email" required placeholder='E-mail' id='email' name='email' maxLength='50' value={value} onChange={handleChange} />
      </label>
    )
  }
}

export default Email;
