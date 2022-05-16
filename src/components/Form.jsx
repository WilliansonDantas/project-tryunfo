import React from 'react';
import '../index.css';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <form>
        <label htmlFor="nomeDaCarta">
          Nome:
          <input
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
            data-testid="name-input"
            type="text"
            id="nomeDaCarta"
          />
        </label>
        <label htmlFor="descricaoCarta">
          Descrição:
          <input
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
            type="textarea"
            id="descricaoCarta"
          />
        </label>
        <label htmlFor="atributo1">
          Attr1:
          <input
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
            data-testid="attr1-input"
            type="number"
            id="atributo1 "
          />
        </label>
        <label htmlFor="atributo2">
          Attr2:
          <input
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            data-testid="attr2-input"
            type="number"
            id="atributo2 "
          />
        </label>
        <label htmlFor="atributo3">
          Attr3:
          <input
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
            data-testid="attr3-input"
            type="number"
            id="atributo3 "
          />
        </label>
        <label htmlFor="caminhoImagem">
          Imagem:
          <input
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
            data-testid="image-input"
            type="text"
            id="caminhoImagem"
          />
        </label>
        <label htmlFor="opcoes">
          Raridade:
          <select
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
            id="opcoes"
          >
            <option value="normal">Normal</option>
            <option value="raro"> Raro </option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        { hasTrunfo ? <p> Você já tem um Super Trunfo em seu baralho </p> : (
          <label htmlFor="superTrunfo">
            Super Trunfo
            <input
              name="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              data-testid="trunfo-input"
              type="checkbox"
              id="superTrunfo"
            />
          </label>)}
        <button
          name="isSaveButtonDisabled"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
          type="submit"
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
