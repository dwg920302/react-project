import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Element = 'styled.div'
  width: 1000px;
  margin: 0 auto;

const App = () => {
  return(<>
    <nav>
      <Link to="./index.html">Home</Link>
      <Link to="./blog_list.html">Blog</Link>
      <Link to="./about_me.html">About Me</Link>
    </nav>

    <h1>1번째 크기 헤드라인</h1>
    <h2>2번째 크기 헤드라인</h2>
    <h3>3번째 크기 헤드라인</h3>
    <h4>4번째 크기 헤드라인</h4>
    <h5>5번째 크기 헤드라인</h5>
    <p>문단은 p로 쓰세요. p는 아마도 paragraph의 앞글자를 따온 것이겠죠?</p>
    <Link to="https://www.google.com">Go to Google</Link>
    <hr/>
    <img src="./images/stay_funky.jpg" width="600px"></img>
    </>
  )
}
export default App