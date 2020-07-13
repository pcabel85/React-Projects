// Import the React and ReactDOM libraries 
import React from 'react';
import ReactDOM from 'react-dom';


// Create a React component 
const App = () => {
    const buttonText = {
        text: 'Click Me!'
    };
    const labelText = 'Enter Name:';
    const styles = {
        backgroundColor: 'blue',
        color: 'white'
    }

    return (
        <div>
            <label for="name" className="label">{labelText}</label>
            <input id="name" type="text" />
            <button style={styles}>{buttonText.text}</button>
        </div>
    )
}

//Take the React component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)