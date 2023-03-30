import React from 'react'
import Card from 'react-bootstrap/Card';
function Tarjeta(props) {
  return (
    <div className='p-3'>
        <center>
            <Card style={{width:'30rem'}}>
                <h1>{props.name}</h1>
                <h2>Set: {props.id}</h2>
                <h3>Era: {props.era}</h3>
                {" "}
                <img src={props.url} alt=""/>
            </Card>
        </center>
    </div>

  )
}

export default Tarjeta