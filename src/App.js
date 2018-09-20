import React, { Component } from 'react';
import {TabelaDeItens, FormularioAdicionarItem} from './ListaDeCompras'
import {Grid, Header, Icon} from 'semantic-ui-react'
const listaDeItens = ['feijão','arroz','leite','açúcar','morangos'];

class App extends Component {
    constructor(){
        super();
        this.state = {
            listaDeCompras : listaDeItens
        };
        this.onAdicionarItem = this.onAdicionarItem.bind(this);
        this.onRemoverItem = this.onRemoverItem.bind(this);
        this.onLimpar = this.onLimpar.bind(this);
    }
    onAdicionarItem (elemento){
        if(this.state.listaDeCompras.includes(elemento)) {
            alert("Elemento já existe");
        }else {
            const lista = [...this.state.listaDeCompras, elemento];
            this.setState({listaDeCompras: lista});
        }
    }
    onRemoverItem(elemento){
        const lista = this.state.listaDeCompras.filter(item => item  !== elemento);
        this.setState({listaDeCompras:lista});
    }
    onLimpar(){
        this.setState({listaDeCompras:[]});
    }
    isListaVazia() {
        return (this.state.listaDeCompras.length < 1);
    }
    render() {
        const {listaDeCompras} = this.state;
        return (
            <Grid columns={1} centered >
                <Grid.Row>
                    <Header as='h2' icon textAlign='center'>
                        <Icon name='shop' circular />
                        <Header.Content>Lista de Compras</Header.Content>
                    </Header>
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column width={10}>
                        <FormularioAdicionarItem isListaVazia={this.isListaVazia()}
                                                 onAdicionarItem={this.onAdicionarItem}
                                                 onLimpar={this.onLimpar}/>

                        <TabelaDeItens itens={listaDeCompras} onRemoverItem = {this.onRemoverItem}/>
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        );
    }
}

export default App;
