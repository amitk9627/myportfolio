import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Particle from '../Particle'
import Type from './Type'
// import  from '../../Assets/'



export default function Home() {
  return (
    <section>
      <Container className="home-section" id="home">
        <Particle />
        <Container className='home-content'>
          <Row>
            <Col md={7} className='home-heading'>
              <h1 className='heading' style={{ paddingBottom: 15 }}>Hi There!<span className="wave"> 👋</span></h1>
              <h1 className='heading-name' >I'M <strong className="main-name">Amit Kumar</strong></h1>
              <div className='typeText' style={{ paddingTop: 50, textAlign: "left" }}><Type /></div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>

              <img src="https://anchla-portfolio.netlify.app/static/media/home-main.d117c50c.svg" alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>



      </Container>
    </section>
  )
}
