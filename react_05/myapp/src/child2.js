import { Component } from "react";
import masterContext from './MasterContext';

export default class Child2 extends Component{
    static contextType = masterContext
    constructor(props){
        super(props)
    }
    render(){
        return <>
            <h1>child2</h1>
            <ol>
                {this.context.product.map(ob=><li>{ob}</li>)}
            </ol>
        </>
    }
}