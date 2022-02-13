import styled from "styled-components";
import React from "react";

 const FiltroContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 10px;
`

 const LabelContainer = styled.label`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
`

 class Filtros extends React.Component {
  render() {
    return (
      <FiltroContainer>
        <h2>Filtros</h2>
        <LabelContainer>
          Valor mímino:
          <input
            type={"number"}
            value={this.props.filtroMinimo}
            onChange={this.props.onChangeFiltroMinimo}
          />
        </LabelContainer>

        <LabelContainer>
          Valor máximo:
          <input
            type={"number"}
            value={this.props.filtroMaximo}
            onChange={this.props.onChangeFiltroMaximo}
          />
        </LabelContainer>

        <LabelContainer>
          Busca por nome:
          <input
            type={"text"}
            value={this.props.filtroPorNome}
            onChange={this.props.onChangeBuscaPorNome}
          />
        </LabelContainer>
      </FiltroContainer>
    );
  }
}

export default Filtros;