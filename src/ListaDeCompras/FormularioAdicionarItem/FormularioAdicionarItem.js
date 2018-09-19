import {Component} from "react";
import {Icon, Grid, Form} from "semantic-ui-react";
import React from "react";

export default class FormularioAdicionarItem extends Component{
    state = {item:''};
    onChange = (e, {name,value}) => this.setState({[name]:value});
    enviar = () => {
        const {onAdicionarItem}= this.props;
        const {item} = this.state;
        onAdicionarItem(item);
        this.setState({item: ''});
    };
    render(){
        const {item} = this.state;
        return <Grid>
            <Grid.Row>
                <Grid.Column>
                    <Form size={'large'} onSubmit={this.enviar }>
                        <Form.Input
                                    autoFocus
                                    placeholder='Que você vai comprar hoje?'
                                    onChange={this.onChange}
                                    name='item'
                                    value={item}/>
                        <Form.Button color={'green'} fluid
                                     type='submit'
                                     disabled={!this.state.item}>
                            <Icon name={'plus'}/>
                        </Form.Button>
                    </Form>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    }
}