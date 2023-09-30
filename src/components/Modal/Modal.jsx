import { Component } from "react";
import css from "./Modal.module.css";

export class Modal extends Component {
    handlerModalClose = event => {
        if (event.key === "Escape" || event.type === "click") {
            this.props.onClick("");
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handlerModalClose, false)
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handlerModalClose, false);
    }

    render() {
        const { imageAd } = this.props;

        return (
            <div onClick={this.handlerModalClose}>
                <div>
                    <img src={imageAd} alt="modal" />
                </div>
            </div>
        )
    }
}