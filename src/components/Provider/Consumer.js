import React from 'react';
import PropTypes from 'prop-types';

class Consumer extends React.Component {
    static contextTypes = {
        value: PropTypes.object
    }

    render() {
        const {value: propValues} = this.context;
        return React.Children.map(this.props.children, (child) => {
            if (React.isValidElement) {
                return React.cloneElement(child, propValues);
            } else {
                return child;
            }
        });
    }
}

export default Consumer;