import React, {Component} from "react";
let x = false
export class StateObj extends Component {

    constructor(){
        super();
        this.state = {
            message: "UNCHANGED STATE"
        }
    }
    changeMSG(){
        
        if(x === false){
            this.setState({
                message: "CHANGED STATE"
            })
            x = true
        }else{
            this.setState({
                message: "UNCHANGED STATE"
            })
            x = false
        }
    }
    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMSG()}>CHANGE STATE</button>
                
            </div>
        );
    }
}

export default StateObj