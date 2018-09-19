import {Component} from "react";
import {Grid, Icon,Label, Segment} from "semantic-ui-react";
import React from "react";
import {BotaoRemover} from '../BotaoRemover'

class TabelaDeItens extends Component {
    constructor(props){
        super(props);
        //this.state = {itens:props.itens}
        this.corpoDaTabela = this.corpoDaTabela.bind(this);
    }
    corpoDaTabela = () => {
        const {onRemoverItem,itens} = this.props;
        return  <Grid columns={7} padded>{
            itens.map(item => <Grid.Column width={2} key={item}>
                    <Label  >{item}<BotaoRemover onClick={() => onRemoverItem(item)}/></Label></Grid.Column>

                )}
                </Grid>
    };
    listaVazia = () =>{
        return (
            <Segment>A lista de Compras está Vazia</Segment>
        )
    };

    render () {
        if (this.props.itens.length < 1) {
            return <this.listaVazia/>
        }else {
            return  <this.corpoDaTabela/>
        }
    }
}
export default TabelaDeItens