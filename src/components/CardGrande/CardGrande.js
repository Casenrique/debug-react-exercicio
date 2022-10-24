import React from 'react';
import { ImgCardGrande, InfosCard, LayoutCardGrande, TituloCardGrande } from './styles';


function CardGrande(props) {   
    return (
        <LayoutCardGrande>
            <ImgCardGrande src={ props.imagem } />
            <InfosCard>
                <TituloCardGrande>{ props.nome }</TituloCardGrande>
                <p>{ props.descricao }</p>
            </InfosCard>
        </LayoutCardGrande>
    )
}

export default CardGrande