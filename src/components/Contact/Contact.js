import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Particle from '../Particle'

export default function Contact() {
  return (
    <section>
      <Container fluid className="about-section">
        <Particle />
        <Container style={{color:"white",textAlign:"center",marginTop:"2rem"}}>
          <h1>Lets Contact Us</h1>
          <Row style={{margin:"2rem 0",color:"white",fontSize:"2rem"}}>
            <Col>
              <label htmlFor='name'>Name : </label>
              <input type='text' id="name" name="name" style={{ backgroundColor: "grey",width:"400px",color:"black" }} />
            </Col>
          </Row>
          <Row style={{margin:"2rem 0",color:"white",fontSize:"2rem"}}>
            <Col>
              <label htmlFor='email'>Email : </label>
              <input type='email' id="email" name="email" style={{ backgroundColor: "grey" ,width:"400px",color:"black"}} />
          </Col>
        </Row>
        <Row style={{margin:"2rem 0",color:"white",fontSize:"2rem"}}>
            <Col>
              <button style={{padding:"10px",borderRadius:"10px"}}>Contact Us</button>
          </Col>
        </Row>
      </Container>
    </Container>
  </section >
  )
}
