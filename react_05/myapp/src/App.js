
import { Component } from 'react';
import { Link,Routes,Route } from 'react-router-dom';
import Child1 from './child1';
import Child2 from './child2';
import Home from './home';
import masterContext from './MasterContext';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      catagories: ['tv','mobile'],
      brand: ['sony','apple'],
      product: ['curve','iphone']
    }
  }
  render(){
    return <>
      <Link to = "/">home</Link>&nbsp;&nbsp;
      <Link to = "/child1">child1</Link>&nbsp;&nbsp;
      <Link to = "/child2">child2</Link>&nbsp;&nbsp;
      <masterContext.Provider value = {this.state}>
        <Routes>
          <Route exact path='/' element = {<Home></Home>}></Route>
          <Route exact path='/child1' element = {<Child1></Child1>}></Route>
          <Route exact path='/child2' element = {<Child2></Child2>}></Route>
        </Routes>
      </masterContext.Provider>
    </>
  }
}