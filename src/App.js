import React, { Component } from 'react';
import {TabelaDeItens, FormularioAdicionarItem} from './ListaDeCompras'
const listaDeItens = ['feijão','arroz','leite','açúcar','morangos'];

class App extends Component {
  constructor(){
      super();
      this.state = {
        listaDeCompras : listaDeItens
      }
      this.onAdicionarItem.bind(this.onAdicionarItem);
      this.onRemoverItem.bind(this.onRemoverItem);
  }
  onAdicionarItem (elemento){
    console.log(elemento);
    let lista = this.state.listaDeCompras;
    lista.push(elemento);
    this.setState({listaDeCompras : lista});
  }
  onRemoverItem(elemento){
    console.log(elemento);
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
