import React from 'react'
// Member.js
// http://localhost/admin/api/member.php

// http://chase.dothome.co.kr/admin/api/member.php
import axios from 'axios';

function Member() {
    function join(e){
        e.preventDefault();
        const formdata = new FormData(e.target);
        axios({
            "method":"post",
            "url":"http://chase.dothome.co.kr/admin/api/member.php",
            "data":formdata
        })
        .then(res=>{console.log(res.data)})
    }
  return (
    <div>
        <form onSubmit={join}>
            <p><input type="text" name="id" placeholder='아이디'/></p>
            <p><input type="text" name="name" placeholder='이름'/></p>
            <p><input type="password" name="password" placeholder='패스워드'/></p>
            <p><input type="email" name="email" placeholder='이메일'/></p>
            <p><input type="tel" name="tel" placeholder='ex)010-3940-8962'/></p>
            <p><input type="submit" value="저장"/></p>
        </form>
    </div>
  )
}

export default Member