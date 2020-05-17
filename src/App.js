import React from 'react';
import './App.css';

import Dogs from "./Dogs";


class App extends React.Component {

    state = {
        startNumber: 0,
        dogId: [
            {id:0},
            {id:1},
            {id:2},
            {id:3},
            {id:4},
            {id:5},
            {id:6},
            {id:7},
            {id:8},
            {id:9}
        ],
        randomIndex: 4
    }

    componentDidMount() {
        setInterval(() => {
            this.setState( {
            randomIndex: () => {
return Math.floor(Math.random()*9);
            }
        })
    }, 1000)
}

    render() {

        return (
            <div className='wrapper'>
                <Dogs state={this.state}/>
                <div className='spanStyle'>
                    <span>{this.state.startNumber}</span>
                </div>


            </div>
        );
    }
}

export default App;

