import { Component } from "react";
import css from "./Modal.module.css";

export class Modal extends Component {
    handlerModalClose = event => {
        if (event.key === "Escape" || event.type === "click") {
            this.props.onClick("");
        }
    }

    render() {
        const { imageAd } = this.props;

        return (
            <div>
                <div>
                    <img src={imageAd} alt="modal" />
                </div>
            </div>
        )
    }
}