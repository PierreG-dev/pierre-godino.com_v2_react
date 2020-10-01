import React, {useState, useRef} from 'react'
import styled from 'styled-components'

function ExperienceBox({img, title, description, collaboratorsAmount, technologies, }) {
    
    const [deployed, setDeployed] = useState(false);

    const deploy = () => {
        if (deployed) {
            setDeployed(false)
        }
        else {
            setDeployed(true)
        }
    }

    const getImg = () => {
        return
    }

    const getIcons = () => {
        return
    }


    return(
        <MainContainer>
            
            <div className="d-flex justify-content-around align-items-center w-100">
                {
                    img
                    ?
                    getImg()
                    :
                    null
                }
                <h2>issou</h2>
                <i className="fa fa-chevron-down" onClick={deploy}></i>
            </div>

            {deployed ? <hr className="w-100 m-auto" /> : null}

        </MainContainer>
)

}
const MainContainer = styled.div`
    width: 100%;
    height: 200px;
    background-color: #fafafa;
    color: #373737;

    .fa-chevron-down {
        font-size: 1rem;
        opacity: 0.3;
        transition: 0.1s;
    }
    .fa-chevron-down:hover {
        opacity: 0.7;
        cursor: pointer;
    }

    hr {
        transition: 0.5s;
        opacity: 0.7;
    }
`
export default ExperienceBox