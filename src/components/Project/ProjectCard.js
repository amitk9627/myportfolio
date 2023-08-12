import React from 'react'
import { CardGroup,Card } from 'react-bootstrap'
import MyProfile from '../../Assets/myPortfolio.jpg'
import { BiLinkExternal } from "react-icons/bi";

export default function ProjectCard({item}) {
  
  return (
    <CardGroup className='cardgroup'>
    <Card  style={{background: 'transparent', }} className='cardelement'>
        <Card.Img variant="top" src={item.image}  className='cardImage'/>
       
        <Card.Body>
          <Card.Title style={{color:"white"}}>Portfolio</Card.Title>
          <hr />
          <Card.Text style={{textAlign:'justify'}}>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <a href={item.url} target='blank' className='project-links'>
            < BiLinkExternal/> {item.name}
          </a>
        </Card.Footer>
      </Card>
    </CardGroup>
  )
}
