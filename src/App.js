import React from 'react';
import './App.css';
import dog from './image/dog.jpg';
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
        ]
    }


    render() {

        return (
            <div className='wrapper'>
                <Dogs />
                <div className='spanStyle'>
                    <span>{this.state.startNumber}</span>
                </div>


            </div>
        );
    }
}

export default App;

