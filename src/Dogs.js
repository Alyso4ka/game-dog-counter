import React from 'react';
import './App.css';
import Dog from "./Dog";


const Dogs = (props) => {

        let dogsDataElement = props.state.dogId.map(d => {
            if(d.id === props.state.randomIndex) {
                return <Dog dogClass={'photo'} onClickFunc={props.onClickFunc}/>
    }
            return <Dog onClickFunc={()=>{}} dogClass={'photoShow'}/>
})
        return (
<div>
    {dogsDataElement}

</div>
        )

}

export default Dogs;


