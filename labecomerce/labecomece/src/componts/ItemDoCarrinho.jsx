import styled from "styled-components";
import React from "react";



export const ContainerDosItens = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const ItemDoCarrinho = () => {
  return (
    <ContainerDosItens>
      <p>1x</p>
      <p>Produto</p>
      <button>Remover</button>
    </ContainerDosItens>
  );
};

export default ItemDoCarrinho;
