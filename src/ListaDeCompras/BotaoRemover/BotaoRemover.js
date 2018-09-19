import {Button, Icon} from "semantic-ui-react";
import React from "react";

const BotaoRemover = (props) => {
    return (
        <Button onClick={props.onClick} icon>
            <Icon name="trash alternate"/>
        </Button>
    )
};
export default BotaoRemover