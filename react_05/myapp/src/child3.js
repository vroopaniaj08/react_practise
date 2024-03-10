import { Component } from "react";
import masterContext from "./MasterContext";

export default class Child3 extends Component{
    static contextType = masterContext
    constructor(props){
        super(props)
    }
    render(){
        return <>
            <h1>child3</h1>
            <ol>
                {this.context.brand.map(ob=><li>{ob}</li>)}
            </ol>
        </>
    }
}