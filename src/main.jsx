import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const Main = () => {
    return (
        <React.StrictMode> 
           <App/>
        </React.StrictMode>
    );
}

// Render the Main component into the root DOM element.
ReactDOM.createRoot(document.getElementById('root')).render(<Main />)