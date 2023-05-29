import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Particle from '../Particle'
import AboutCard from './AboutCard'
import AboutImg from '../../Assets/about.png'
import TechStack from './TechStack'
import Toolstack from './ToolStack'


export default function AboutMe() {
  return (
    <section>
      <Container fluid className="about-section">
        <Particle />
        <Container>
          <Row style={{ paddingTop: '5rem', color: 'white', textAlign: 'center' }}>
            <Col md={7}>
              <h1 style={{ color: 'white' }}>Know Who <span className='purple'>I'M</span></h1>

              <AboutCard />

            </Col>
            <Col md={5}>
              <img src={AboutImg} alt='about' className='img-fluid' />
            </Col>
          </Row>
          
          <h1 style={{ color: 'white',marginTop:'3rem' }}>
            Professional <strong className="purple">Skillset </strong>
          </h1>
          <TechStack />


          <h1 style={{ color: 'white',marginTop:'3rem' }}>
           Tools I <strong className="purple">Use </strong></h1>
           <Toolstack />
        </Container>

      </Container>
    </section>
  )
}
