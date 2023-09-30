import { Component } from "react";
import css from "./Button.module.css";

export class Button extends Component {

    handlerClick = event => this.props.onClick(event);

    render() {
        return (
            <div>
                <button
                    type="button"
                    onClick={this.handlerClick}
                >
                    Load more
                </button>
            </div>
        )
    }
}