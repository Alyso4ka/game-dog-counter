import React from 'react';
import './App.css';
import Dogs from "./Dogs";
import DogVoice from './audio/dog.mp3';


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

        ],
        randomIndex: 4
    }

    getRandomIndex = () => {
        return Math.floor (Math.random() * 9);
    }


audio = new Audio(DogVoice);


    componentDidMount() {
        setInterval(() => {
            this.setState( {
randomIndex: this.getRandomIndex(),
            })

    }, 1000)
}

onClickFunc = () => {
        this.setState({startNumber: this.state.startNumber +1})
    this.audio.currentTime = 0;
    this.audio.play();


}

    render() {

        return (
            <div className='wrapper'>
                <Dogs state={this.state} onClickFunc={this.onClickFunc}/>
                <div className='spanStyle'>
                    <span>{this.state.startNumber}</span>
                </div>


            </div>
        );
    }
}

export default App;

