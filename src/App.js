import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Member from './Member';

function App() {
  
  axios.get('/admin/api/p_list.php')
  .then(res=>{
    console.log(res.data);
  })


  return (
    <div className="App">

      
    </div>
  );
}

export default App;
