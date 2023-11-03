import React from "react"
import { withRouter } from 'react-router-dom';
import {  MenuItem } from "react-pro-sidebar"
import "react-pro-sidebar/dist/scss/styles.scss"
import "./sidenav.scss"

class SearchBar extends React.Component {
    state = { searchTerm: '' }

    handleSearchChange = (e) => {
        this.setState({ searchTerm: e.target.value });
    }

    executeSearch = () => {
        const { searchTerm } = this.state;
        const { history } = this.props;

        // Update the URL with the search term
        history.push({
            pathname: '/',
            search: `?name=${encodeURIComponent(searchTerm)}`
        });
    }

    handleKeyPress = (e) => {
        // Check if enter key is pressed
        if (e.key === 'Enter') {
            this.executeSearch();
        }
    }

    render() {
        return (
            <MenuItem>
                <input
                    type="text"
                    className="searchbar"
                    disabled={false}
                    value={this.state.searchTerm}
                    onChange={this.handleSearchChange}
                    onKeyPress={this.handleKeyPress}
                />
                <button
                    onClick={this.executeSearch}
                    className="searchbutton"
                >Search</button>
            </MenuItem>
        );
    }
}

export default withRouter(SearchBar);
