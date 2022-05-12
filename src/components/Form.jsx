import React from 'react';

class Form extends React.Component {
  // state = {
  //   nome: '',
  // }

  // handleChange(event) {

  // }

  render() {
    return (
      <form>
        <label htmlFor="nomeDaCarta">
          Nome:
          <input data-testid="name-input" type="text" id="nomeDaCarta" />
        </label>
        <label htmlFor="descricaoCarta">
          Descrição:
          <input data-testid="description-input" type="textarea" id="descricaoCarta" />
        </label>
        <label htmlFor="atributo1">
          Attr1:
          <input data-testid="attr1-input" type="number" id="atributo1 " />
        </label>
        <label htmlFor="atributo2">
          Attr2:
          <input data-testid="attr2-input" type="number" id="atributo2 " />
        </label>
        <label htmlFor="atributo3">
          Attr3:
          <input data-testid="attr3-input" type="number" id="atributo3 " />
        </label>
        <label htmlFor="caminhoImagem">
          Imagem:
          <input data-testid="image-input" type="text" id="caminhoImagem" />
        </label>
        <label htmlFor="caminhoImagem">
          Imagem:
          <select data-testid="rare-input" name="caminhoImagem" id="caminhoImagem">
            <option value="normal">Normal</option>
            <option value="raro"> Raro </option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label htmlFor="superTrunfo">
          Super Trunfo
          <input data-testid="trunfo-input" type="checkbox" id="superTrunfo" />
        </label>
        <button data-testid="save-button" type="submit"> Salvar </button>
      </form>
    );
  }
}

export default Form;
