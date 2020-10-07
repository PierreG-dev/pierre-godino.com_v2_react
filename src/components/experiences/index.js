import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

import Background from './Background'
import ExperienceBox from './ExperienceBox'
import expData from './experiences.json'

function Experiences() {

    const background = useRef()
    const [display, setDisplay] = useState(1);

    useEffect(() => {
        switch (display) {
            case 1:
                background.current.style.background = 'url(' + process.env.PUBLIC_URL + 'ressources/backgrounds/DC_Background.jpg)'
                break

        }
    }, [display])

    /**
     * @description Retourne les expériences mises en forme.
     */
    const displayContent = () => {

        let data = Object.entries(expData);

        return (
            data.map((e, key) => {
                switch (key) {
                    case data.length - 1:
                        return (
                            <React.Fragment key={key}>
                                <Col xs={12} sm={12} md={5} lg={5}>
                                    <ExperienceBox
                                        title={e[1].title}
                                        img={e[1].img}
                                        description={e[1].description}
                                        collaboratorsAmount={e[1].collaboratorsAmount}
                                        technologies={e[1].technologies}
                                    >
                                    </ExperienceBox>
                                </Col>
                                <Col xs={12} sm={12} md={1} lg={1}>
                                    <MiddleBar className="transparent">
                                        <div className="sphere"></div>
                                    </MiddleBar>
                                </Col>
                                <Col xs={12} sm={12} md={5} lg={5}>{key} | {data.length}</Col>
                            </React.Fragment>
                        )
                    default:
                        return (
                            <React.Fragment key={key}>
                                <Col xs={12} sm={12} md={5} lg={5}>
                                    <ExperienceBox
                                        title={e[1].title}
                                        img={e[1].img}
                                        description={e[1].description}
                                        collaboratorsAmount={e[1].collaboratorsAmount}
                                        technologies={e[1].technologies}
                                    >
                                    </ExperienceBox>
                                </Col>
                                <Col xs={12} sm={12} md={1} lg={1}>
                                    <MiddleBar>
                                        <div className="sphere"></div>
                                    </MiddleBar>
                                </Col>
                                <Col xs={12} sm={12} md={5} lg={5}>{key} | {data.length}</Col>
                            </React.Fragment>
                        )
                }
            })
        )
    }


    return (
            <MainContainer ref={background}>
                <div className="scroller">
                    <Container className={'m-auto'}>

                    </Container>

                    <Container fluid={'sm' | 'xs'}>
                        <Row>
                            {
                                displayContent()
                            }
                        </Row>
                    </Container>
                </div>
            </MainContainer>
    )

}
const MainContainer = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    .transparent {
        background: none;
    }

    .scroller {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
    }
`

const MiddleBar = styled.div`
    position: relative;
    margin: auto;
    width: 16px;
    height: 300px;
    background-color: red;

    .sphere {
        position: absolute;
        top: -15px;
        left: -7px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: red;
    }
`
export default Experiences