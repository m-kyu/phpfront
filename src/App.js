import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Member from './Member';
import { useEffect, useState } from 'react';

function App() {
  const [data,setData] = useState([]);
  useEffect(()=>{
    axios.get('/admin/api/p_list.php')
    .then(res=>{
      console.log(res.data);
      setData(res.data);
    })
  },[])

  if(!data.length) return;

  return (
    <div className="App">
      <img src={`/${data[0].p_thumb}`} />

      
    </div>
  );
}

export default App;
