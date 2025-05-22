import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Member from './Member';

function App() {
  


  return (
    <div className="App">
      <img src="http://chase.dothome.co.kr/admin/board/plugin/kcaptcha/kcaptcha_image.php?t=1746687247215" width="160" height="60"/>

      <iframe src="http://chase.dothome.co.kr/admin/board/bbs/board.php?bo_table=free" width="90%" height="1000" frameborder="0" >
      </iframe>
      <Member/>
    </div>
  );
}

export default App;
