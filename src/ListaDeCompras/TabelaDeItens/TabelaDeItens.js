import {Component} from "react";
import {Table} from "semantic-ui-react";
import React from "react";
import {BotaoRemover} from '../Botoes/index'

class TabelaDeItens extends Component {
    constructor(props){
        super(props);
        //this.state = {itens:props.itens}
        this.corpoDaTabela = this.corpoDaTabela.bind(this);
    }
    corpoDaTabela = () => {
        const {onRemoverItem,itens} = this.props;
        return itens.map(
            item => <Table.Row key={item}>
                <Table.Cell>{item}</Table.Cell>
                <Table.Cell>
                    <BotaoRemover onClick={() => onRemoverItem(item) }/>
                </Table.Cell>
            </Table.Row>
        )
    };
    listaVazia = () =>{
        return (
            <div>A lista de Compras está Vazia</div>
        )
    };

    render () {
        if (this.props.itens.length < 1) {
            return <this.listaVazia/>
        }else {
            return  <Table striped basic='very'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nome</Table.HeaderCell>
                        <Table.HeaderCell>Operação</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <this.corpoDaTabela/>
                </Table.Body>
            </Table>
        }
    }
}
export default TabelaDeItens