import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Particle from '../Particle'
export default function Skill() {
    return (
        <Container fluid className='skill-section'>
            <Particle />
            <Container >
                <h1 style={{ fontSize: "3rem", textAlign: "center" ,color:"white",marginBottom:"3rem"}}>Tech Stack</h1>
                <Row style={{ fontSize: "3rem", textAlign: "center" ,color:"white"}}>
                    <Col md={6}>
                       <span className='purple'> React Js</span>
                    </Col>
                    <Col md={6}>
                       <span className='purple'> Node Js</span>
                    </Col>
                </Row>
                <Row style={{ fontSize: "3rem", textAlign: "center" ,color:"white"}}>
                    <Col md={6}>
                       <span style={{color:"yellow"}}> Express Js</span>
                    </Col>
                    <Col md={6}>
                    <span style={{color:"yellow"}}>MongoDB </span>
                    </Col>
                </Row>
                <Row style={{ fontSize: "3rem", textAlign: "center" ,color:"white"}}>
                    <Col md={6}>
                       <span style={{color:"blue"}}>HTML</span> 
                    </Col>
                    <Col md={6}>
                        <span style={{color:"blue"}}>CSS</span>
                    </Col>
                </Row>
                <Row style={{ fontSize: "3rem", textAlign: "center" ,color:"white"}}>
                    <Col md={6}>
                    <span style={{color:"green"}}>Javascript</span>
                    </Col>
                    <Col md={6}>
                    <span style={{color:"green"}}> Basic JAVA</span>
                    </Col>
                </Row>

            </Container>
        </Container>
    )
}
