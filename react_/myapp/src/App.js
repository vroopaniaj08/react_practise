import { Component } from "react";
import React from "react";
export default class App extends Component{
  constructor(props){
    super(props);
    this.rollnumber = React.createRef();
    this.name = React.createRef();
    this.age = React.createRef();
    this.q = React.createRef();
    this.marks = React.createRef();
    this.state = {
      ele : []
    }
  }
  registor = (event) => {
    event.preventDefault();
    var obj = {
      roll:this.rollnumber.current.value,
      n:this.name.current.value,
      a:this.age.current.value,
      qu:this.q.current.value,
      m:this.marks.current.value
    }
    this.setState({ele:[...this.state.ele,obj]});
  }
  render(){
    return<>
      <div className="alert alert-primary" role = "alert">
      <h1 className="text-center">Stutdent Info</h1>
      </div>
      <div className="container">
      <form onSubmit={this.registor}>
        <div className="row">
          <div className="col-md-6 mt-2">
            <input type ="number" placeholder="enter your roll number " ref = {this.rollnumber} className = "form-control"></input>
          </div>
          <div className="col-md-6 mt-2">
            <input type ="text" placeholder="enter your name " ref = {this.name} className = "form-control"></input>
          </div>
          <div className="col-md-6 mt-2">
            <input type ="number" placeholder="Enter the age " ref = {this.age} className = "form-control"></input>
          </div>
          <div className="col-md-6 mt-2" >
            <select className="form-control" ref = {this.q}>
              <option>CSE</option>
              <option>IT</option>
              <option>AIML</option>
            </select>
          </div>
          <div className="col-md-6 mt-2">
            <input type ="text" placeholder="enter your marks " ref = {this.marks} className = "form-control"></input>
          </div>
          <div className="col-md-6 mt-2">
            <button type = "submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
      <table className="mt-5 table" style={{width:"100%"}}>
        <thead>
        <th scope="col">Roll</th>
        <th scope="col">Name</th>
        <th scope="col">Age</th>
        <th scope="col">Branch</th>
        <th scope="col">Marks</th>
        </thead>
        <tbody>
          {this.state.ele.map((obj) => <tr><td>{obj.roll}</td><td>{obj.n}</td><td>{obj.a}</td><td>{obj.qu}</td><td>{obj.m}</td></tr>)}
        </tbody>
      </table>
      </div>
    </>
  }
}