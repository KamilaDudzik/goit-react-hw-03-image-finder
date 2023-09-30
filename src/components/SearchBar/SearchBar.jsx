import { Component } from "react";
import css from "./SearchBar.module.css";

export class SearchBar extends Component {
    state = {
        name: ""
    }

    handlerSubmit = event => {
        event.preventDefault();
        const { name } = this.state;
        this.props.onSubmit(name);
        this.setState({ name: "" });
    }

    handlerChange = event => {
        const { value } = event.currentTarget;
        this.setState({ name: value });
    }

    render() {

        const { name } = this.state;

        return (
            <header>
                <form onSubmit={this.handlerSubmit}>

                    <input
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.handlerChange}
                        value={name}
                    />

                    <button type="submit">
                        <span>Search</span>
                    </button>

                </form>
            </header>
        )
    } 
}