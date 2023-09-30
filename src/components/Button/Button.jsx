import { Component } from "react";
import css from "./Button.module.css";

export class Button extends Component {

    handlerClick = event => this.props.onClick(event);

    render() {
        return (
            <div className={css.centerButton}>
                <button
                    type="button"
                    className={css.loadMore}
                    onClick={this.handlerClick}
                >
                    Load more
                </button>
            </div>
        )
    }
}