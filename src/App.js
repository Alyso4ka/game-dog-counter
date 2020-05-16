import React from 'react';
import './App.css';
import dog from './image/dog.jpg';


class App extends React.Component {

    state = {
        dogShow: true,
        startNumber: 0
    }

// onbattonClick = dogshow тернарное выражене по классам

    render() {

        return (
            <div className='wrapper'>
                <div className='item'>
                    <img src={dog} className='photo'/>
                </div>
                <div className='item'>
                    <img src={dog} className='photo'/>
                </div>
                <div className='item'>
                    <img src={dog} className='photo'/>
                </div>
                <div className='item'>
                    <img src={dog} className='photo'/>
                </div>
                <div className='item'>
                    <img src={dog} className='photo'/>
                </div>
                <div className='item'>
                    <img src={dog} className='photo'/>
                </div>
                <div className='item'>
                    <img src={dog} className='photo'/>
                </div>
                <div className='item'>
                    <img src={dog} className='photo'/>
                </div>
                <div className='item'>
                    <img src={dog} className='photo'/>
                </div>

                <div className='spanStyle'>
                    <span>0</span>
                </div>


            </div>
        );
    }
}

export default App;

