import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Wrapper from './App2';
import App3 from './App3';
import App4 from './App4';
import App5 from './App5';
import App6 from './App6';


ReactDOM.render(
    <App cat={5}/>,
    document.getElementById('app')
);

ReactDOM.render(
    <Wrapper />,
    document.getElementById('app2')
);

ReactDOM.render(
    <App3 />,
    document.getElementById('app3')
);

ReactDOM.render(
    <App4 />,
    document.getElementById('app4')
);

ReactDOM.render(
    <App5 />,
    document.getElementById('app5')
);

ReactDOM.render(
    <App6 />,
    document.getElementById('app6')
);