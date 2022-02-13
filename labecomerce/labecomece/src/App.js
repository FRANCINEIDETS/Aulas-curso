import React from "react";
import  Produtos  from './componts/Produtos';
import styled from "styled-components";
import Filtros from "./componts/Filtros";


const products = [
  {
    id: 1,
    name: "Mulher",
    price: 123,
    photo: "https://picsum.photos/200/200?a=1"
  },
  {
    id: 2,
    name: "Produto 2",
    price: 200,
    photo: "https://picsum.photos/200/200?a=2"
  },
  {
    id: 3,
    name: "Floresta",
    price: 30,
    photo: "https://picsum.photos/200/200?a=3"
  },
  {
    id: 4,
    name: "Produto 4",
    price: 10,
    photo: "https://picsum.photos/200/200?a=4"
  }
];

class App extends React.Component {
  state = {
    carrinho: []
  };

  adicionarProdutoNoCarrinho = (produto) => {
    this.setState({
      carrinho: [...this.state.carrinho, produto]
    });
  };

  render() {
    console.log(this.state.carrinho);
    return (
      <div>
        <Produtos
          quantidadeDeProdutos={products}
          produtos={products}
          onClick={this.adicionarProdutoNoCarrinho}
        />
      </div>
    );
  }
}

export default App;

     