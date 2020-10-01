import React, {useState, useRef } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

import ExperienceBox from './ExperienceBox'

function Experiences() {
    return(
        <MainContainer>

            <Container className={'m-auto'}>

            </Container>
            
            <Container fluid={'sm' | 'xs'}>
                <Row>

                    <Col xs={12} sm={12} md={5} lg={5}>
                        <ExperienceBox>
                            experience
                        </ExperienceBox>
                    </Col>
                    <Col xs={12} sm={12} md={1} lg={1}>
                        <MiddleBar>
                            <div className="sphere"></div>
                        </MiddleBar>
                    </Col>
                    <Col xs={12} sm={12} md={5} lg={5}>

                    </Col>


                    <Col xs={12} sm={12} md={5} lg={5}>
                        <ExperienceBox>
                            experience
                        </ExperienceBox>
                    </Col>
                    <Col xs={12} sm={12} md={1} lg={1}>
                        <MiddleBar>
                            <div className="sphere"></div>
                        </MiddleBar>
                    </Col>
                    <Col xs={12} sm={12} md={5} lg={5}>

                    </Col>


                    <Col xs={12} sm={12} md={5} lg={5}>
                        <ExperienceBox>
                            experience
                        </ExperienceBox>
                    </Col>
                    <Col xs={12} sm={12} md={1} lg={1}>
                        <MiddleBar>
                            <div className="sphere"></div>
                        </MiddleBar>
                    </Col>
                    <Col xs={12} sm={12} md={5} lg={5}>

                    </Col>


                    <Col xs={12} sm={12} md={5} lg={5}>
                        <ExperienceBox>
                            experience
                        </ExperienceBox>
                    </Col>
                    <Col xs={12} sm={12} md={1} lg={1}>
                        <MiddleBar>
                            <div className="sphere"></div>
                        </MiddleBar>
                    </Col>
                    <Col xs={12} sm={12} md={5} lg={5}>

                    </Col>

                </Row>
            </Container>

        </MainContainer>
)

}
const MainContainer = styled.div`
    
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