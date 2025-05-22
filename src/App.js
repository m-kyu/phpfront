import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Member from './Member';

function App() {
  
  axios.get('http://chase.dothome.co.kr/admin/api/p_list.php')
  .then(res=>{
    console.log(res.data);
  })


  return (
    <div className="App">

      <iframe src="http://chase.dothome.co.kr/admin/board/bbs/board.php?bo_table=free" width="90%" height="1000" frameborder="0" >
      </iframe>
      <Member/>
    </div>
  );
}

export default App;
