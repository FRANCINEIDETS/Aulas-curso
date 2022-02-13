import styled from "styled-components";
import React from "react";



const CartaoContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`
const InformacaoDoCartao = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  p {
    margin: 4px 0;
  }
`
const BotaoDoProduto = styled.button`
  align-self: center;
`

 class CartaoDeProdutos extends React.Component {
  render() {
    return (
      <CartaoContainer>
        <img src={this.props.imagemDoCartaoDeProdutos} />

        <InformacaoDoCartao>
          <p>{this.props.nome}</p>
          <p>{"R$" + this.props.preco}</p>
          <BotaoDoProduto onClick={this.props.onClick}>
            {" "}
            Adicionar ao carrinho
          </BotaoDoProduto>
        </InformacaoDoCartao>
      </CartaoContainer>
    );
  }
}
export default CartaoDeProdutos;
