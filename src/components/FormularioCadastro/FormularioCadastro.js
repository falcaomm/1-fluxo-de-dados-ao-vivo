import { FormContainer, Form, Input, StyledLabel } from "./styled";

export const FormularioCadastro = (props) => {

  const trocarImage = (event) => {
    props.setImage(event.target.value)
  }

  const trocarDescricao = (e) => {
    props.setDescricao(e.target.value)
  }

  const trocarTitulo = (e) => {
    props.setTitulo(e.target.value)
  }

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>

      <Form>
        
        <StyledLabel htmlFor="titulo">
          Título:
          <Input
            id="titulo"
            value={props.titulo}
            onChange={trocarTitulo}
          />
        </StyledLabel>

        <StyledLabel htmlFor="foto">
          Link da imagem:
          <Input
            id="foto"
            value={props.image}
            onChange={trocarImage}
            />
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input
            id="descricao" 
            value={props.descricao}
            onChange={trocarDescricao}
            />
        </StyledLabel>

      </Form>

    </FormContainer>
  );
};


export default FormularioCadastro