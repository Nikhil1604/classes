import React from "react";

const myButton = {
    padding : '10px 10px',
    marginLeft : '20px',
}

class Counter extends React.Component {

    constructor(props){
        super(props)
        this.state={
            count : 0,
        };

        this.update=this.update.bind(this)
    }

    

    update(){
        this.setState({
            count:this.state.count+1
        })
    }


    render(){
        return(
            <>
                <h1>I am a Counter</h1>
                <button style={myButton} onClick={this.update}>Increment</button>
                <h2>Here is my increasing {this.state.count} after clicking on button </h2>
            </>
        )
    }
}
export default Counter;