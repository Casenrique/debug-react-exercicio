import React from 'react';
// import './ImagemButton.css'
import styled from 'styled-components'

const ContainerImagemVerMais = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
`

const ImgVerMais = styled.img`
    width: 30px;
    margin-right: 10px;
`

function ImagemButton(props) {


    return (
        <ContainerImagemVerMais>
            <ImgVerMais src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ContainerImagemVerMais>

    )
}

export default ImagemButton;