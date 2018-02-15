import React from 'react';
import Provider from '../components/Provider/Provider';
import Consumer from '../components/Provider/Consumer';

const DisplayName = ({name = 'N/A', color}) => (
    <p style={{border: '1px', color}}>Name is {name}</p>
);

const DisplayProps = ({...props}) => <ul>{Object.keys(props).map(prop => <li key={prop}>{prop} = {props[prop]}</li>)}</ul>;

const OtherComponent = ({children}) => <div>{children}</div>;

const ProviderExample = () => (
    <div>
        <h3>Provider</h3>
        {/* Store values */}
        <Provider value={{name: 'John', color: 'blue'}}>
            <DisplayName/>
            <DisplayProps/>
            <OtherComponent>
                {/* Retrieve values, and they are passed to immediate children as props */}
                <Consumer>
                    <DisplayName/>
                    <DisplayProps/>
                </Consumer>
            </OtherComponent>
        </Provider>
    </div>
);

export default ProviderExample;