import {Icon} from "semantic-ui-react";
import React from "react";
import './BotaoRemover.css';

const BotaoRemover = (props) => {
    return (
            <Icon className={"BotaoRemover"} onClick={props.onClick}  size={'small'} name="delete"/>
    )
};
export default BotaoRemover