import React, {useEffect, useState, useRef} from 'react'
import styled from 'styled-components'

function Background(props) {

    const [display, setDisplay] = useState(1);


    const background = useRef()

    useEffect(() => {
        switch(display) {
            case 1:
                background.current.style.background = 'url(' + process.env.PUBLIC_URL + 'ressources/backgrounds/DC_Background.jpg)'
                break
            
        }
    }, [display])


    return(
        <MainContainer ref={background}>
            
        </MainContainer>
)

}
const MainContainer = styled.div`
    position: relative;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    img {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1
    }
`
export default Background