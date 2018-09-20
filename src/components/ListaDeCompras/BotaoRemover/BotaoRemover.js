import {Button, Icon} from "semantic-ui-react";
import React from "react";

const BotaoRemover = (props) => {
    return (
            <Icon onClick={props.onClick} color={'black'} size={'small'} name="delete"/>
    )
};
export default BotaoRemover