import {Component} from "react";
import {Grid, Icon,Label, Message} from "semantic-ui-react";
import React from "react";
import {BotaoRemover} from '../Botoes/index'

class TabelaDeItens extends Component {
    constructor(props){
        super(props);
        this.state = {itens:props.itens};
        this.corpoDaTabela = this.corpoDaTabela.bind(this);
    }
    corpoDaTabela = () => {
        const {onRemoverItem,itens} = this.props;
        return  <Grid columns={5} padded relaxed >
                {itens.map(item => <Grid.Column  key={item} textAlign={'center'} >
                    <Label color={'blue'} size={'small'}>{item}<BotaoRemover onClick={() => onRemoverItem(item)}/></Label></Grid.Column>

                )}
                </Grid>
    };
    listaVazia = () =>{
        return (
            <Message warning attached={'bottom'}><Icon name={'warning'}/>A lista de Compras está Vazia</Message>
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