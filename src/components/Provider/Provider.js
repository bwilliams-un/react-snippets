import React from 'react';
import PropTypes from 'prop-types';

class Provider extends React.Component {
    static childContextTypes = {
        value: PropTypes.object
    }

    getChildContext() {
        return {
            value: this.props.value
        };
    }

    render() {
        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        );
    }
}

export default Provider;