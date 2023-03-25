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
      <form
        className="flex flex-col items-center justify-cente"
      >
        <div
          className="mb-4"
        >
          <label
            htmlFor="nomeDaCarta"
            className="inline-block mr-2"
          >
            Nome:
            <input
              className="border rounded px-2 py-1"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
              data-testid="name-input"
              type="text"
              id="nomeDaCarta"
            />
          </label>
        </div>
        <div
          className="mb-4"
        >
          <label
            htmlFor="descricaoCarta"
            className="inline-block mr-2"
          >
            Descrição:
            <input
              className="border rounded px-2 py-1"
              name="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
              data-testid="description-input"
              type="textarea"
              id="descricaoCarta"
            />
          </label>
        </div>
        <div
          className="mb-4"
        >

          <label
            htmlFor="atributo1"
            className="inline-block mr-2"
          >
            Atributo 01:
            <input
              className="border rounded px-2 py-1"
              name="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
              data-testid="attr1-input"
              type="number"
              id="atributo1 "
            />
          </label>
        </div>
        <div
          className="mb-4"
        >
          <label
            htmlFor="atributo2"
            className="inline-block mr-2"
          >
            Atributo 02:
            <input
              className="border rounded px-2 py-1"
              name="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
              data-testid="attr2-input"
              type="number"
              id="atributo2 "
            />
          </label>
        </div>
        <div
          className="mb-4"
        >
          <label
            htmlFor="atributo3"
            className="inline-block mr-2"
          >
            Atributo 03:
            <input
              className="border rounded px-2 py-1"
              name="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
              data-testid="attr3-input"
              type="number"
              id="atributo3 "
            />
          </label>
        </div>
        <div
          className="mb-4"
        >
          <label
            htmlFor="caminhoImagem"
            className="inline-block mr-2"
          >
            Imagem:
            <input
              className="border rounded px-2 py-1"
              name="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
              data-testid="image-input"
              type="text"
              id="caminhoImagem"
            />
          </label>
        </div>
        <div
          className="mb-4"
        >
          <label
            htmlFor="opcoes"
            className="inline-block mr-2"
          >
            Raridade:
            <select
              className="border rounded px-2 py-1"
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
        </div>
        <div
          className="mb-4"
        >
          { hasTrunfo ? (
            <p
              className="text-red-500 text-2xl font-bold mb-8 my-8"
            >
              Você já tem um Super Trunfo em seu baralho
            </p>
          ) : (
            <label
              htmlFor="superTrunfo"
              className="inline-block mr-2"
            >
              Super Trunfo
              <input
                className="border rounded px-2 py-1"
                name="cardTrunfo"
                checked={ cardTrunfo }
                onChange={ onInputChange }
                data-testid="trunfo-input"
                type="checkbox"
                id="superTrunfo"
              />
            </label>)}
        </div>
        <div
          className="mb-4"
        >
          <button
            className="border rounded px-2 py-1 mt-2 bg-gray-200"
            name="isSaveButtonDisabled"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            data-testid="save-button"
            type="button"
          >
            Salvar
          </button>
        </div>
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
