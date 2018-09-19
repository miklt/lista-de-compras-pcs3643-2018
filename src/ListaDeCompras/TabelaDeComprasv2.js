import React, { Component } from 'react';
import {Table,Button,Form, Grid} from 'semantic-ui-react';
const FormularioAdicionarItem = (adicionarItem) => {
    return (
        <Grid>
            <Grid.Row>
            <Grid.Column width={6}>
                <Form size={'large'}>
                    <Form.Field>
                        <label>Item</label>
                        <input placeholder='Que você vai comprar?' />
                    </Form.Field>
                    <Button onClick={adicionarItem} type='submit'>Adicionar</Button>
                </Form>
            </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
const BotaoRemover = () => {
        return (
        <Button>Remover</Button>
        )
}


class TabelaDeItens extends Component {
    render () {
        return (
        <Table striped basic='very'>
            <Table.Header>
                <Table.Row>
                <Table.HeaderCell>Id</Table.HeaderCell>
                <Table.HeaderCell>Nome</Table.HeaderCell>
                <Table.HeaderCell>Operação</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>1</Table.Cell>
                    <Table.Cell>Arroz</Table.Cell>                
                    <Table.Cell><BotaoRemover/></Table.Cell>                
                </Table.Row>
                <Table.Row>
                    <Table.Cell>2</Table.Cell>
                    <Table.Cell>Feijão</Table.Cell>                
                    <Table.Cell><BotaoRemover/></Table.Cell>                
                </Table.Row>
                <Table.Row>
                    <Table.Cell>3</Table.Cell>
                    <Table.Cell>Laranjas</Table.Cell>                
                    <Table.Cell><BotaoRemover/></Table.Cell>                
                </Table.Row>
                <Table.Row>
                    <Table.Cell>etc</Table.Cell>
                    <Table.Cell>etc</Table.Cell>
                    <Table.Cell><BotaoRemover/></Table.Cell>                
                </Table.Row>
            </Table.Body>
        </Table>
        )
    }
}
export {TabelaDeItens,FormularioAdicionarItem}