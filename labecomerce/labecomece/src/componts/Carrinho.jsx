import styled from "styled-components";
import ItemDoCarrinho from "./ItemDoCarrinho";
import React from "react";


const ContainerDoCarrinho = styled.div`
  border: 1px solid black;

  padding: 10px;
`

const Carrinho = () => {
  return (
    <ContainerDoCarrinho>
      <h2>Carrinho</h2>
      <ItemDoCarrinho />
      <ItemDoCarrinho />
      <p>Valor Total: R$70,00</p>
    </ContainerDoCarrinho>
  );
};

export default Carrinho;
