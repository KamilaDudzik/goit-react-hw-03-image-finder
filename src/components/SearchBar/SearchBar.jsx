import { Component } from "react";
import css from "./SearchBar.module.css";

export class SearchBar extends Component {
    state = {
        name: ""
    }

    render() {
        
        return (
            <header>
                <form>

                    <input
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />

                    <button type="submit">
                        <span>Search</span>
                    </button>

                </form>
            </header>
        )
    } 
}