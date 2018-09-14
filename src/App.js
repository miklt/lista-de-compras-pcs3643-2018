import React, { Component } from 'react';
import {TabelaDeItens, FormularioAdicionarItem} from './ListaDeCompras'
class App extends Component {
  render() {
    return (
      <div>      
        <FormularioAdicionarItem/>        
        <TabelaDeItens/>
      </div>
      );
  }
}

export default App;
