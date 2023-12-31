import { Container, Row, Col } from "react-bootstrap";
import linkedin from '../assets/img/linkedin.svg';
import instagram from '../assets/img/instagram.svg';
import logo from '../assets/img/logo.png'
import github from '../assets/img/github-mark.svg';

export const Footer = () => {
    return(
        <footer className="pb-14 bg-cover bg-position-center bg-no-repeat bg-primary-dark ">
            <Container>
              <Row className="">
              <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/ac-alvin-cao/"><img src={linkedin} alt="" /></a>
                <a href="#https://github.com/AlvinCao88"><img src={github} alt="" /></a> 
                <a href="https://www.instagram.com/alvin_sp974/"><img src={instagram} alt="" /></a>
            </div>
            <p className="text-primary-content mt-[20px] text-sm font-bold tracking-wider">Copyright 2024. All Rights Reserved</p>
          </Col>
              </Row>

            </Container>
        </footer>

    )
}