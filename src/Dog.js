import React from 'react';
import './App.css';
import dog from './image/dog.jpg';


class Dog extends React.Component {


    render() {

        return (
            <>
                <div className='item'>
                    <img src={dog} className='photo-show'/>
                </div>


            </>


        );
    }
}

export default Dog;


