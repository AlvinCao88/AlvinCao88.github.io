import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import fakeit from "../assets/img/fakeit.png"
import datathon from "../assets/img/datathon.png"
import lostinthevalley from "../assets/img/lostinthevalley.png"
// import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Fake-It",
      description: "Hack the Valley 8 Hackathon - Placed top 20 amaong 80+ projects and 200+ participants",
      imgUrl: fakeit,
    },
    {
      title: "Trivial",
      description: "DS3 Datathon 2022 - placed 6th among 20+ teams",
      imgUrl: datathon,
    },
    {
      title: "Lost in the Valley",
      description: "Hack the Valley 7 - First ever Hackathon!!!",
      imgUrl: lostinthevalley,
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: '',
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: '',
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: '',
    // },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here is my list of Project varying from personal projects, course, hackathons and case competitions in the span of my coding years</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Hackathons</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Course</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Case Competition</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Personal</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}