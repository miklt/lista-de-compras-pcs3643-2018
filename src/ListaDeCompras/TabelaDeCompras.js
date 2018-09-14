
import React, { Component } from 'react';
class TabelaDeCompras extends Component {
    constructor(){
        super();
    }
    render(){
        return (
            <div>
                <form action="">
                <fieldset>
                <legend>Adicionar item para Lista de Compras</legend>
                <p>
                <label for="item">Item:</label>
                <input type="text" id="item"></input>
                <input type="submit" value="Adicionar"/>
                </p>
                </fieldset>
                </form>
                <table>
                    <thead>
                        <tr>Lista de Compras</tr>
                        <tr><td>Id</td>
                        <td>Nome</td></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Arroz</td>
                            <td><button>remover</button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Feijão</td>
                            <td><button>remover</button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Laranjas</td>
                            <td><button>remover</button></td>
                        </tr>
                        <tr>
                            <td>etc</td>
                            <td>etc</td>
                            <td><button>remover</button></td>
                        </tr>
                    </tbody>
                </table>
          </div>
        )
    }
}
export default TabelaDeCompras
