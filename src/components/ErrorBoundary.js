import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
    static defaultProps = {
        message: 'An error occurred.'
    }

    static propTypes = {
        message: PropTypes.string
    };

    state = {
        hasError: false
    };

    componentDidCatch(error) {
        this.setState({ 
            hasError: true 
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    {this.props.message}
                </div>
            );
        }
        return this.props.children;
    }
}


export default ErrorBoundary;