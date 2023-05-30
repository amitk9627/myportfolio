import React from 'react'
import Particle from '../Particle'
import{Container,Row,Col} from 'react-bootstrap'
import ProjectCard from './ProjectCard'
export default function Project() {
  return (
    <section>
    <Container fluid className="project-section">
      <Particle/>
      <Container className='project-content'>
      <Row>
         <h1 >My Recent <strong className='purple'>Work</strong></h1>
         <p style={{paddingBottom:"30px"}}>
         Here are a few projects I've worked on recently and my published paper.
         </p>
         <hr />
        <Col md={4}>
       <ProjectCard />
        </Col>

        <Col md={4}>
        <ProjectCard />
        </Col>

        <Col md={4}>
        <ProjectCard />
        </Col>

        <Col md={4}>
        <ProjectCard />
        </Col>

        <Col md={4}>
        <ProjectCard />
        </Col>

        <Col md={4}>
        <ProjectCard />
        </Col>
      </Row>
      </Container>
    </Container>
  </section>
  )
}
