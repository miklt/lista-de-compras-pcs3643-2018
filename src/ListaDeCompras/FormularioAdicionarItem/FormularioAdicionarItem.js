import {Component} from "react";
import {Form,Icon} from "semantic-ui-react";
import React from "react";
import './FormularioAdicionarItem.css';


class FormularioAdicionarItem extends Component{
    state = {item:''};
    onChange = (e, {name,value}) => this.setState({[name]:value});
    enviar = () => {
        const {onAdicionarItem}= this.props;
        const {item} = this.state;
        onAdicionarItem(item);
        this.setState({item: ''});
    };
    render(){
        const {onLimpar,isListaVazia,onGuardar, onCarregar} = this.props;
        const {item} = this.state;
        return <Form size={'large'} onSubmit={this.enviar }>
            <Form.Group width={'350px'} >
                <Form.Input
                    autoFocus  placeholder='Que você vai comprar hoje?'
                    onChange={this.onChange}
                    name='item'
                    value={item}/>
                <Form.Button color={'green'} type='submit'>
                    <Icon name={'send'}/>
                </Form.Button>
            </Form.Group>
            <Form.Group widths='equal' >

                <Form.Button color={'yellow'} disabled={isListaVazia}
                             onClick={onLimpar} type={'button'}
                             fluid >
                    <Icon name={'trash'}/>
                </Form.Button>
                <Form.Button color={'black'} onClick={onGuardar} type={'button'} fluid >
                    <Icon name={'save'}/>
                </Form.Button>
                <Form.Button color={'white'} onClick={onCarregar} type={'button'} fluid >
                    <Icon name={'upload'} color={'black'}/>
                </Form.Button>
            </Form.Group>
        </Form>
    }
}
export default FormularioAdicionarItem