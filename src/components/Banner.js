import { useState, useEffect, useCallback, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headShot from "../assets/img/headshot.png"
import { ArrowRight } from 'react-bootstrap-icons';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 1800;

  const toRotate = useMemo(() => ["Computer Science Student ", "Aspiring Software Engineer ", "Tech Enthusiast "], []);

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
    setText(updatedText);
  
    if (isDeleting) {
      setDelta(prevDelta => prevDelta * .7);
    }
  
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200);
    }
  }, [loopNum, isDeleting, text, setDelta, setIsDeleting, setLoopNum, toRotate]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta, tick]);
  
  

  return (
    <section className="banner" id="home">
       <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={9}>
                <span className="font-bold tracking-widest pt-[8px] pr-[10px] text-4xl bg-[#0200cc] border-2 rounded-md border-[#404040] mb-[16px] inline-block">Welcome to My Personal Website</span>
                <h1>{`Hey! I'm Alvin, `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p className="primary-content text-lg tracking-wider leading-6 w-[96%]">Attending as a Second Year Computer Science Student at the Univeristy of Toronto Scarborough</p>
                  
                    <button className=" w-[200px]primary-content font-bold text-xl  h-10 w-auto mt-[60px] flex tracking-wider items-center bg-primary-dark   rounded-full border-2 border-border  border-solid"onClick={() => console.log('CV')}>Download Resume <ArrowRight size={25} /></button>
                    <button className=" in-line w-[200px] primary-content font-bold text-xl mt-[20px] flex tracking-wider items-center bg-[#0200cc] rounded-xl"onClick={() => console.log('connect')}>Let’s Connect <ArrowRight size={25} /></button>
                  
          </Col>
          <Col xs={12} md={6} xl={3}>
                  <img className="rounded-full w-auto " src={headShot} alt="headShot Img"/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
