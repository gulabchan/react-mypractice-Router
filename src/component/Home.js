import React from 'react'
import{Link} from "react-router-dom"
function Home(){
  return (
    <div>
      <h1>Home Page</h1>
<p><b>This is About page of our awesome app</b></p>
<p>And here we are learning about Router</p>
<Link to="/about"> Go to About Page</Link>
</div>

  )
}

export default Home