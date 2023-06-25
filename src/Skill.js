import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Skill() {
  return (
    <Container>
        <Row>
            <Col style={{color:"white"}}>
                <h1>DSA</h1>
                <h3>Topic</h3>
                <p>
                    <strong className='purple'>Basic Of Programming , Arrays , ArraysList , Map , Set ,  Stack ...</strong>
                </p>

            </Col>
        </Row>
        <Row>
            <Col style={{color:"white"}}>html</Col>
        </Row>
        <Row>
            <Col style={{color:"white"}}>css</Col>
        </Row>
        <Row>
            <Col style={{color:"white"}}>js</Col>
        </Row>
    </Container>
  )
}
