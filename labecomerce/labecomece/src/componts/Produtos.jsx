import styled from "styled-components";
import React from "react";
import CartaoDeProdutos from "./CartaoDeProdutos";

 const ProdutosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
`

 const CabecalhoDosProdutos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

 class Produtos extends React.Component {
  state = {
    ordenacao: "Decrescente"
  };

  ordenarProdutos = (event) => {
    this.setState({
      ordenacao: event.target.value
    });
  };

  render() {
    const produtosOrdenadosEmapeados = this.props.produtos
      .sort((a, b) => {
        return this.state.ordenacao === "Crescente"
          ? a.price - b.price
          : b.price - a.price;
      })
      .map((produto) => (
        <CartaoDeProdutos
          key={produto.id}
          id={produto.id}
          imagemDoCartaoDeProdutos={produto.photo}
          nome={produto.name}
          preco={produto.price}
          onClick={() => this.props.onClick(produto)}
        />
      ));

    return (
      <div>
        <CabecalhoDosProdutos>
          <p>
            Quantidade de produtos: {this.props.quantidadeDeProdutos.length}
          </p>
          <label>
            Ordenação:
            <select onChange={this.ordenarProdutos}>
              <option value={"Decrescente"}>Decrescente</option>
              <option value={"Crescente"}>Crescente</option>
            </select>
          </label>
        </CabecalhoDosProdutos>

        <ProdutosContainer>{produtosOrdenadosEmapeados}</ProdutosContainer>
      </div>
    );
  }
}

export default Produtos;