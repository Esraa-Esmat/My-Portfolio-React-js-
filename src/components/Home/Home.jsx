import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import headerImg from '../../assest/images/header-img.svg'
import { ArrowRightCircle } from 'react-bootstrap-icons';
import './home.css'


const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Software Devloper", "Web Devloper", "Frontend Devloper"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text,delta])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  return (
    <>
      <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hi! I'm Esraa Mahmoud Esmat ,  `} <span className="txt-rotate" dataPeriod="1000" data-rotate='["Software Devloper", "Web Devloper", "Frontend Devloper"]'><span className="wrap">{text}</span></span></h1>
                    {/* <p>As a fresh graduate aiming to thrive in the field of programming, I'm eagerly searching for challenging roles to put my skills into action and grow further. My passion for programming runs deep, and I'm constantly seeking advice from experienced experts, driven by my dedication to continual learning. I'm wholeheartedly dedicated to putting in the effort and enthusiastic about diving into practical projects to elevate my programming abilities. I strongly believe that true professional development comes from hands-on experience and learning directly from the industry's finest.</p> */}
                    <p>An aspiring programmer and fresh graduate actively seeking challenging roles to apply and enhance my coding skills. I'm passionate about continuous learning, seeking guidance from experienced professionals. Committed to hands-on projects, I believe in the power of practical experience for professional growth</p>
                    <a href='#connect' className="text-decoration-none">
                            <button>Let’s Connect <ArrowRightCircle size={25} /></button>
                        </a>
                  </div>}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src={headerImg} alt="Header Img" />
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Home

