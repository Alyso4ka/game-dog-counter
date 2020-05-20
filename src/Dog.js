import React from 'react';
import './App.css';
import dog from './image/dog.jpg';



const Dog = (props) => {


        let dogClass = props.id === props.randomIndex ? 'photo' : 'photoShow';
        let onClickHandler = props.id === props.randomIndex ? props.onClickFunc : () => {}

        return (
            <>
                <div className='item' onClick={onClickHandler}>
                    <img src={dog} className={props.dogClass}/>
                </div>


            </>


        );
    }


export default Dog;


