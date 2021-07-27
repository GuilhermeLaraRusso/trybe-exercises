import React from 'react';

class Estado extends React.Component{
  render() {
    const { value, handleChange } = this.props

    return (
      <label htmlFor="estado">
        Estado
        <select value={value} onChange={handleChange} id='estado' required>
          <option value="AC">ACRE</option>
          <option value="AL">ALAGOAS</option>
          <option value="AP">AMAPÁ</option>
          <option value="AM">AMAZONAS</option>
          <option value="BA">BAHIA</option>
          <option value="CE">CEARÁ</option>
          <option value="ES">ESPÍRITO SANTO</option>
          <option value="GO">GOIÁS</option>
          <option value="MA">MARANHÃO</option>
          <option value="MT">MATO GROSSO</option>
          <option value="MS">MATO GROSSO DO SUL</option>
          <option value="MG">MINAS GERAIS</option>
          <option value="PA">PARÁ</option>
          <option value="PB">PARAÍBA</option>
          <option value="PR">PARANÁ</option>
          <option value="PE">PERNANBUCO</option>
          <option value="PI">PIAUI</option>
          <option value="RJ">RIO DE JANEIRO</option>
          <option value="RN">RIO GRANDE DO NORTE</option>
          <option value="RS">RIO GRANDE DO SUL</option>
          <option value="TO">TOCANTINS</option>
          <option value="RR">RORAIMA</option>
          <option value="SC">SANTA CATARINA</option>
          <option value="SP">SÃO PAULO</option>
          <option value="SE">SERGIPE</option>
          <option value="TO">TOCANTINS</option>
        </select>
      </label>

    )
  }
}

export default Estado;
