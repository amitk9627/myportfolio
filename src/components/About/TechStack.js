import React from 'react'
import { Row ,Col} from 'react-bootstrap'
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiMysql,
  DiAws,
  DiCss3,
  DiBootstrap,
  DiPhp,
  DiHtml5,
} from "react-icons/di";

export default function TechStack() {
  return (
    <Row>
        <Col xs={4} md={2} className='tech-icons'><DiJava /></Col>
         <Col xs={4} md={2} className='tech-icons'><DiHtml5/></Col>
          <Col xs={4} md={2} className='tech-icons'><DiCss3/></Col>
         <Col xs={4} md={2} className='tech-icons'><DiReact/></Col>
         <Col xs={4} md={2} className='tech-icons'><DiJavascript1/></Col>
         <Col xs={4} md={2} className='tech-icons'><DiGit/></Col>
          <Col xs={4} md={2} className='tech-icons'><DiBootstrap/></Col>
         <Col xs={4} md={2} className='tech-icons'><DiMysql/></Col>
         <Col xs={4} md={2} className='tech-icons'><DiPhp/></Col>
          <Col xs={4} md={2} className='tech-icons'><DiNodejs/></Col>
     
    </Row>
  )
}
