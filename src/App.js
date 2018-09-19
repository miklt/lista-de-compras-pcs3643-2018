import React, { Component } from 'react';
import {TabelaDeItens, FormularioAdicionarItem} from './ListaDeCompras'
import {Grid} from 'semantic-ui-react'
const listaDeItens = ['feijão','arroz','leite','açúcar','morangos'];

class App extends Component {
  constructor(){
      super();
      this.state = {
        listaDeCompras : listaDeItens
      };
      this.onAdicionarItem = this.onAdicionarItem.bind(this);
      this.onRemoverItem = this.onRemoverItem.bind(this);
  }
  onAdicionarItem (elemento){
    const lista = [...this.state.listaDeCompras,elemento];
    this.setState({listaDeCompras:lista});
  }
  onRemoverItem(elemento){
      console.log(elemento);
    const lista = this.state.listaDeCompras.filter(item => item  !== elemento);
    this.setState({listaDeCompras:lista});
  }
  
  render() {
    const {listaDeCompras} = this.state;
    return (
      <Grid columns={2}>
          <Grid.Row>
              <Grid.Column width={10}>
                <FormularioAdicionarItem onAdicionarItem={this.onAdicionarItem}/>
                <TabelaDeItens itens={listaDeCompras} onRemoverItem = {this.onRemoverItem}/>
              </Grid.Column>
          </Grid.Row>

      </Grid>
      );
  }
}

export default App;
