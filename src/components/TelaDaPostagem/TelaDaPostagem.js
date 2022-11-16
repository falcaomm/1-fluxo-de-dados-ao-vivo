import React from 'react'
import { ContainerPostagem, Image, Description, Title } from './styles'

const TelaDaPostagem = (props) => {
  return (
    (props.image.length > 0 && props.titulo.length > 0) ?
      <ContainerPostagem>
        <Title>{props.titulo}</Title>
        <Image src={props.image} alt='Insira sua imagem por link aqui' />
        <Description>{props.descricao}</Description>
      </ContainerPostagem>
      : 
      <ContainerPostagem>
        <Image src="https://lojastalim.com.br/894-large_default/placa-decorativa-personalizada-sua-imagem-aqui.jpg" alt='descrição' />
      </ContainerPostagem>
  )
}

export default TelaDaPostagem