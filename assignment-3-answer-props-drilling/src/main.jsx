import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// import QueryClienSetup from './QueryClientSetup.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <QueryClienSetup> */}
        <App />
        {/* </QueryClienSetup> */}
    </React.StrictMode>
);
