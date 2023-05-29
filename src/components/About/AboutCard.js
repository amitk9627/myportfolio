import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {ImPointRight} from 'react-icons/im'
export default function AboutCard() {
    return (
        <Container>
            <Row style={{ textAlign: 'left', letterSpacing: '.5px', fontSize: '1.5rem' }}>

                <Row style={{ paddingTop: '30px', paddingBottom: '40px' }}>
                    <Col>  Hi Everyone, I am <span className='purple'>Amit Kumar</span> from <span className='purple'>UP, India.</span>
                        <br />
                        I  completed my Bachlear Degree in PCM in <span className='purple'>2022</span> from PG College Ghazipur UP.
                    </Col>
                </Row>

                <Row style={{ paddingBottom: '20px' }}>I’m currently learning React js Apart from coding, some other activities that I love to do!</Row>
                <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

            </Row>
        </Container>
    )
}
