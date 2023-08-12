import React from 'react'
import Particle from '../Particle'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import myPortfolio from '../../Assets/myPortfolio.jpg'
import shopping from '../..//Assets/shopping.jpg'
import weather from '../../Assets/wheather.jpg'
import tourIndia from '../../Assets/tourIndia.jpg'
import movieApp from '../../Assets/movieApp.jpg'
export default function Project() {
  const projectData = [
    { name: "Lets Shop", url: "https://64d77888bc78e77af1d0fb0a--chipper-panda-0c38e0.netlify.app/", image:shopping  },
    { name: "My profile", url: "https://stellular-cobbler-b490aa.netlify.app/",image:myPortfolio },
    { name: "Weather", url: "https://willowy-cascaron-c554fa.netlify.app/",image:weather },
    { name: "Tour India", url: "https://dapper-buttercream-7c91d7.netlify.app/",image:tourIndia },
    { name: "Movie App", url: "https://glittering-douhua-fd2b7b.netlify.app/",image:movieApp }
  ];
  return (
    <section>
      <Container fluid className="project-section">
        <Particle />
        <Container className='project-content'>
          <Row>
            <h1 >My Recent <strong className='purple'>Work</strong></h1>
            <p style={{ paddingBottom: "30px" }}>
              Here are a few projects I've worked on recently and my published paper.
            </p>
            <hr />
            {
              projectData.map(
                (item, key) => <Col md={4} key={key}>
                                <ProjectCard item={item}/>
                              </Col>
              )
            }



          </Row>
        </Container>
      </Container>
    </section>
  )
}
