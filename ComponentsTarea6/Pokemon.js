import React, {useEffect,useState} from 'react'
import Tarjeta from './Tarjeta'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
function Pokemon() {
    const[cardImage,setCardImage] = useState(null);
    useEffect(()=>{
        fetch("https://api.pokemontcg.io/v2/cards?q=name:electivire")
        .then((res)=>res.json())
        .then((data)=>{
            setCardImage(data);
            
        });
    },[]);
    const[cardImage2,setCardImage2] = useState(null);
    useEffect(()=>{
        fetch("https://api.pokemontcg.io/v2/cards?q=name:magmortar")
        .then((res)=>res.json())
        .then((data)=>{
            setCardImage2(data);
            
    
        });
    },[]);

    return (
        <div>
            <h1 style={{color:'white'}}>Información de tarjetas pokemón</h1>
            <h2 style={{color:'white'}}>Mi selección de cartas favoritas</h2>
            <center>
                <Card style={{width:'70rem'}}>
                    <Row>
                        <Col>
                        {
                            cardImage &&
                                cardImage.data.map((item)=>(
                                    <div key = {item.id}>
                                        <Tarjeta name= {item.name} id={item.set.name} era = {item.set.series} url= {item.images.large}/>
                                    </div>
                                ))
                        }
                        </Col>

                        <Col>
                        {
                            cardImage2 &&
                            cardImage2.data.map((item)=>(
                                <div key = {item.id}>
                                    <Tarjeta name= {item.name} id={item.set.name} era = {item.set.series} url= {item.images.large}/>
                                </div>
                            ))
                        }
                        </Col>
                    </Row>
                </Card>
            </center>
        </div>
      )

}

export default Pokemon