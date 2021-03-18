import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from './context/context';
import {SpeechProvider} from '@speechly/react-client';

import App from './App';
import './index.css';


ReactDOM.render(
    <SpeechProvider appId="16ba545a-4c7b-4f95-9ff2-97b42c6a8fa0" language='en-US'>
        <Provider>
            <App/>
        </Provider>
    </SpeechProvider>    
    ,document.getElementById('root'));