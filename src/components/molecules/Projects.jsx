import { Col, Container, Row, Carousel } from "react-bootstrap";
import { useState, useEffect } from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import { IoLogoSass } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa6";


const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Chiamata all'API di GitHub per ottenere i  progetti
        fetch('https://api.github.com/users/TudorBogdanC/repos')
            .then(response => response.json())
            .then(data => {
                setProjects(data);
            })
            .catch(error => console.error('Errore durante la richiesta a GitHub API', error));
    }, []);

    return (
        <>
            {projects != null && (
                <section className="diagonal2 d-flex" id="projects">
                    <Container className="wrapper2">
                        <Row className="d-flex">
                            <Col xs="auto" lg={6}>
                                <Carousel>
                                    {projects.filter(project => project.stargazers_count > 0).map(project => (
                                        <Carousel.Item key={project.id}>
                                            <h4>{project.name}</h4>
                                            <p>{project.description}</p>
                                            <small>
                                                <a
                                                    style={{ color: "white" }}
                                                    href={project.html_url} target="_blank" rel="noopener noreferrer">
                                                    {project.html_url}
                                                </a>
                                            </small>
                                            <p>Language: {project.language}</p>
                                            <p>Created at: {new Date(project.created_at).toLocaleDateString()}</p>
                                        </Carousel.Item>
                                    ))}
                                </Carousel>

                            </Col>
                            <Col xs="auto" lg={4} className="text my-5 mx-5">
                                <h6>Durante il mio percorso di studi in ambito sviluppo web ho avuto modo di realizzare diversi progetti.
                                    Le repositories qui affianco hanno lo scopo di evidenziare il percorso di studi seguito e mostrare gli ultimi progetti
                                    mettendo in risalto le conoscenze finora apprese.
                                </h6>
                                <br />
                                <p>Skills</p>
                                <small className="d-flex align-items-center justify-content-between">
                                    <small className="icons d-flex flex-column gap-2 align-items-center">
                                        <FaReact size={30}/>
                                        <small className="onHover">React</small>
                                    </small>
                                    <small className="icons d-flex flex-column gap-2 align-items-center">
                                        <IoLogoJavascript size={30}/>
                                        <small className="onHover">JavaScript</small>
                                    </small>
                                    <small className="icons d-flex flex-column gap-2 align-items-center">
                                        <FaHtml5 size={30}/>
                                        <small className="onHover">HTML</small>
                                    </small>
                                    <small className="icons d-flex flex-column gap-2 align-items-center">
                                        <FaCss3 size={30}/>
                                        <small className="onHover">CSS</small>
                                    </small>
                                    <small className="icons d-flex flex-column gap-2 align-items-center">
                                        <IoLogoSass size={30}/>
                                        <small className="onHover">SASS</small>
                                    </small>
                                    <small className="icons d-flex flex-column gap-2 align-items-center">
                                        <FaBootstrap size={30}/>
                                        <small className="onHover">Bootstrap</small>
                                    </small>  
                                </small>

                            </Col>
                        </Row>
                    </Container>
                </section>

            )}
        </>
    );
}

export default Projects;
