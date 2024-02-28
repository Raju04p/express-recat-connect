

const express = require ('express');


const app = express();
const port = 5000;

app.get( "/api", (req,res) => {
    res.json({"user": ["userone","user two","user three"]})
})

app.listen( port, () => {
    console.log ("server start  in port 5000")
})//



import React, {useEffect, useState } from 'react'

function App() {

  const [backentData, setbackendData] = useState([{}])
  useEffect ( () => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setbackendData(data)
      }
    )
  }, [])
  return (
    <div>
      {(typeof backentData.user === 'undefined') ? (
      <p>Loading..</p>
      ): (
        backentData.user.map((user,  i) => (
        <p key= {i}>{user}</p>
        ))
      )}
    </div>
  )
}

export default App
