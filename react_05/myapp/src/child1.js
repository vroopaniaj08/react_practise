import { Component } from "react";
import masterContext from "./MasterContext";
import Child3 from "./child3";

export default class Child1 extends Component{
    static contextType = masterContext
    constructor(props){
        super(props)
    }
    render(){
        return <>
            <h1>child1</h1>
            <ol>
                {this.context.catagories.map(ob=><li>{ob}</li>)}
            </ol>
            <hr></hr>
            <Child3></Child3>
        </>
    }
}