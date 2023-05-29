import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import Avatar from '../../Assets/Avatar.jpg'
import {AiFillFacebook,AiFillGithub} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'

//   import { FaLinkedinIn } from "react-icons/fa";
export default function Home2() {
    return (
        <Container fluid className='home-about-section' id="about">
            <Container>
                <Row>
                    <Col md={8} className='home-about-description'>
                        <h1 style={{  fontSize: '2.6em'}}>
                            LET ME <span className='purple'>INTRODUCE</span> MYSELF
                        </h1>
                        <p className='home-about-body'>
                            I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
                            <br />
                            <br />

                            I am fluent in classics like <i><span className='purple'>Core Java and React Js .</span></i>
                            <br />
                            <br />

                            My field of Interest's are building new <i><span className='purple'>Web Technologies
                            and Products </span></i> and also in areas related to Deep Learning and Natural 
                            Launguage Processing .
                            <br/>
                            <br />
                            Whenever possible, I also apply my passion for developing products
                            with 
                          
                            <i><span className='purple'> React.js and Modern Javascript Library and Frameworks</span></i>
                            {"  "} &nbsp; like  
                            <i><span className='purple'>  React.js .</span></i>
                        </p>
                    </Col>

                    <Col md={4}>
                        <img  />
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1 >FIND ME ON</h1>
                        <p >Feel free to <span className='purple'> connect</span> with me</p>
                        <span className='social-links'><AiFillGithub className='icon-color'/></span>
                        <span className='social-links'><FaLinkedinIn className='icon-color'/></span>
                        <span className='social-links'><AiFillFacebook className='icon-color'/></span>
                        
                    </Col>

                </Row>



            </Container>

        </Container>
    )
}
