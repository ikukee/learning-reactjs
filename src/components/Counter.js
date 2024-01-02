import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    increment(){
        this.setState((prevState)=>({
            count: prevState.count + 1
        }), () => {
            console.log('Callback ', this.state.count)
        })
        console.log('Count ', this.state.count)

    }
    decrement(){
        this.setState((prevState)=>({
            count: prevState.count - 1
        }), () => {
            console.log('Callback ', this.state.count)
        })
        console.log('Count ', this.state.count)
    };
  render() {
    return (
      <div>
        Count: {this.state.count}
        <button onClick={()=> this.increment()}>INCREMENT</button>
        <button onClick={() => this.decrement()}>DECREMENT</button>
      </div>
    )
  }
}

export default Counter