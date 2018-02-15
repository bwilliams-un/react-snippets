import React, {Component, Fragment} from 'react';
import ErrorBoundary from '../../components/ErrorBoundary';
import ProviderExample from '../ProviderExample';

import './Root.css';

class Root extends Component {
    render() {
        return (
            <Fragment>
                <ErrorBoundary message='Something happened'>
                    <div>
                        <h1>Snippets</h1>
                    </div>
                    <ProviderExample/>
                </ErrorBoundary>
            </Fragment>
        );
    }
}

export default Root;