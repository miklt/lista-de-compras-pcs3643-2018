import React, { Component } from 'react';
import {TabelaDeItens, FormularioAdicionarItem} from './ListaDeCompras'
const listaDeItens = ['feijão','arroz','leite','açúcar','morangos'];

class App extends Component {
  constructor(){
      super();
      this.state = {
        listaDeCompras : listaDeItens
      }
      this.onAdicionarItem = this.onAdicionarItem.bind(this);
      this.onRemoverItem = this.onRemoverItem.bind(this);
  }
  onAdicionarItem (elemento){
    const lista = [...this.state.listaDeCompras,elemento];
    this.setState({listaDeCompras:lista});
  }
  onRemoverItem(elemento){
    const lista = this.state.listaDeCompras.filter(item => item  != elemento);
    this.setState({listaDeCompras:lista});
  }
  
  render() {
    const {listaDeCompras} = this.state;
    return (
      <div>      
        <FormularioAdicionarItem onAdicionarItem={this.onAdicionarItem}/>
        <TabelaDeItens itens={listaDeCompras} onRemoverItem = {this.onRemoverItem}/>
      </div>
      );
  }
}

export default App;
