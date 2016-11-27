import React from 'react';
import { getFunName } from './../helpers.js';

class StorePicker extends React.Component {
    
    goToStore() {
        console.log('here');
    }

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore()}>
                <h2>Please Enter a Store</h2>
                <input type="text" defaultValue={getFunName()} placeholder="Store Name" />
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}

export default StorePicker;