import React,{ Component } from "react"
class ClassProps extends Component{
    render(){
        return (<h1>Class Component Hello! {this.props.name}</h1>);
    }
}
export default ClassProps