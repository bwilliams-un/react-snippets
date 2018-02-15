import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from 'react-hot-loader/lib/AppContainer';
import Root from './containers/Root/Root';

const render = () => ReactDOM.render( // eslint-disable-line react/no-render-return-value
    <AppContainer>
        <Root/>
    </AppContainer>,
    document.getElementById('root') //eslint-disable-line no-undef
);

if (module.hot) {
    module.hot.accept();
}

render();