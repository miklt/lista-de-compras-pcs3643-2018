import React, { Component } from 'react';
import {Table,Button,Form, Grid, Icon} from 'semantic-ui-react';
class FormularioAdicionarItem extends Component{
    state = {item:''}
    onChange = (e, {name,value}) => this.setState({[name]:value})
    constructor(props){
        super(props);
    }
    enviar = () => {
        const {onAdicionarItem}= this.props;
        const {item} = this.state;
        onAdicionarItem(item);
        this.setState({item: ''});
    }
    
    render(){
        const {item} = this.state;
        return <Grid>
            <Grid.Row>
                <Grid.Column width={6}>
                    <Form size={'large'} onSubmit={this.enviar }>
                    <Form.Input label={'Item'} placeholder='Que você vai comprar hoje?'
                                onChange={this.onChange}
                                name='item'
                                value={item}/>
                    <Form.Button fluid
                                 type='submit'
                                 disabled={!this.state.item}>
                        Adicionar
                    </Form.Button>

                </Form>
            </Grid.Column>
        </Grid.Row> </Grid>
    }
}
const BotaoRemover = (onRemoverItem) => {
    return (
        <Button onClick={onRemoverItem} icon><Icon name="trash alternate"></Icon></Button>
        )
}


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
                                <Table.Cell><Button
                onClick={() => onRemoverItem(item)}
                type="button"
              >Remover</Button></Table.Cell>
                                </Table.Row>
        )
        }
    listaVazia = () =>{
        return (
            <div>A lista de Compras está Vazia</div>
        )
    }

    
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
export {TabelaDeItens,FormularioAdicionarItem}