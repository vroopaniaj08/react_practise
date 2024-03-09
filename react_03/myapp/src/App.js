// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {
  const [product,setproduct] = useState([]);
  var load=()=>{
    var pro = fetch('https://dummyjson.com/products');
    var pro1 = pro.then(res=>res.json());
    pro1.then(re=>setproduct(re.products));
    // console.log(product);
  }
  return <>
  <button onClick={load}>click here</button>
  <table>
    <tr>
      <th>ID</th>
      <th>title</th>
      <th>price</th>
      <th>description</th>
    </tr>
    {product.map(ob=><tr>
      <td>{ob.id}</td>
      <td>{ob.title}</td>
      <td>{ob.price}</td>
      <td>{ob.description}</td>
    </tr>)}
  </table>
  </>
}

export default App;
