import React, { Component } from 'react';
import {Table,Button,Form, Grid, Icon} from 'semantic-ui-react';
class FormularioAdicionarItem extends Component{
    state = {item:''}
    
    
    render(){
        const {onAdicionarItem}= this.props;
        const {item} = this.state;
        return (
            <Grid>
                <Grid.Row>
                <Grid.Column width={6}>
                    <Form size={'large'} onSubmit={()=>onAdicionarItem(item)}>
                        <Form.Input placeholder='Que você vai comprar hoje?' name='item' value={item}/>
                        <Form.Button type='submit'>Adicionar</Form.Button>
                        
                    </Form>
                </Grid.Column>
                </Grid.Row>
            </Grid>
        )
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
        this.state = {itens:props.itens}
        this.corpoDaTabela.bind(this.corpoDaTabela);
    }

    corpoDaTabela = () => {
        const {itens} = this.state;
        const {onRemoverItem} = this.props;
        return itens.map( 
                        item => <Table.Row key={item}>
                                <Table.Cell>{item}</Table.Cell>                                            
                                <Table.Cell><button
                onClick={() => onRemoverItem(item)}
                type="button"
              >Remover</button></Table.Cell>
                                </Table.Row>
        )
        }
        

    
    render () {
        
        return (
        <Table striped basic='very'>
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
        )
    }
}
export {TabelaDeItens,FormularioAdicionarItem}