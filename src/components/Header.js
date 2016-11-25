import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header>
                <h1 className="top">Catch of the Day</h1>
                <h3 className="tagline">{ this.props.tagline }</h3>
            </header>
        )
    }
}

export default Header;