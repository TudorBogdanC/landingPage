import { Col, Container, Row } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const Contacts = () => {
    return (
        <>
            <section className="diagonal3" id="contacts">
                <Container className="wrapper3">
                    <Row className="contatti d-flex flex-row gap-4">
                        <Col xl={8}>
                            <h2 className="section-title3">Contatti</h2>
                            <p> Se condividete la mia curiosità per il mondo digitale e web, la conoscenza di nuove tecnologie, la ricerca di continuo miglioramento
                                e il costante apprendimento per migliorare le proprie competenze, non esitate a contattarmi. 
                                <br/>
                                <br/> Vorrei mettermi alla prova ed imparare grazie a professionisti e realtà
                                che credono in un futuro in continua evoluzione e che vogliono investire nei giovani. </p>
                            <small className="d-flex gap-4">
                                <a href="https://www.linkedin.com/in/tudor-bogdan-craciun/" style={{ color: "white" }}>
                                    <FaLinkedin size={30} />
                                </a>
                                <a href="https://github.com/TudorBogdanC" style={{ color: "white" }}>
                                    <IoLogoGithub size={30} />
                                </a>
                            </small>
                        </Col>
                        <Col xl={4}>

                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Contacts;