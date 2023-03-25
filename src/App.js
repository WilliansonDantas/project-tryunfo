import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'Normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    newState: [],
    filtroName: '',
    filtroRare: 'todas',
    filtroTrunfo: false,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.type
      === 'checkbox' ? event.target.checked : event.target.value }, this.checkSaveButton);
  };

  onSaveButtonClick = () => {
    const { newState } = this.state;
    newState.push(this.state);
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'Normal',
      cardTrunfo: true,
      isSaveButtonDisabled: true,
      filtroName: '',
      filtroRare: 'todas',
      filtroTrunfo: false,
    });
    this.hasTrunfo();
  }

  hasTrunfo = () => {
    const { newState } = this.state;
    const someTeste = newState.some((element) => element.cardTrunfo === true);
    if (someTeste) {
      this.setState({ hasTrunfo: true, cardTrunfo: false });
    }
  }

  checkSaveButton = () => {
    const { cardName, cardDescription, cardImage, cardRare,
      cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const somaAtributos = 210;
    const limiteAtributo = 90;
    if (
      cardName !== '' && cardDescription !== '' && cardImage !== ''
    && cardRare !== ''
    && ((cardAttr1 * 1) + (cardAttr2 * 1) + (cardAttr3 * 1)) <= somaAtributos
    && cardAttr1 <= limiteAtributo && cardAttr2 <= limiteAtributo
    && cardAttr3 <= limiteAtributo && cardAttr1 >= 0
    && cardAttr2 >= 0 && cardAttr3 >= 0) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled, newState,
      filtroName, filtroRare, filtroTrunfo } = this.state;

    return (
      <body className="bg-orange-200 ">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-4">
            <h1 className="text-2xl font-bold mb-8 my-8">Trunfo</h1>
          </div>
          <div
            className="mb-4"
          >
            <label
              htmlFor="filtroName"
              className="inline-block mr-2"
            >
              Filtro de busca:
              <input
                className="border rounded px-2 py-1"
                disabled={ filtroTrunfo }
                name="filtroName"
                onChange={ this.handleChange }
                id="filtroName"
                type="text"
                data-testid="name-filter"
              />
            </label>
          </div>
          <div
            className="mb-4"
          >
            <label
              htmlFor="filtroRare"
              className="inline-block mr-2"
            >
              Raridade:
              <select
                className="border rounded px-2 py-1"
                disabled={ filtroTrunfo }
                name="filtroRare"
                value={ filtroRare }
                onChange={ this.handleChange }
                data-testid="rare-filter"
                id="filtroRare"
              >
                <option value="todas"> Todas </option>
                <option value="normal"> Normal </option>
                <option value="raro"> Raro </option>
                <option value="muito raro"> Muito raro </option>
              </select>
            </label>
          </div>
          <div
            className="mb-4"
          >
            <label
              htmlFor="filtroTrunfo"
              className="inline-block mr-2"
            >
              Super Trunfo
              <input
                className="border rounded px-2 py-1"
                name="filtroTrunfo"
                checked={ filtroTrunfo }
                onChange={ this.handleChange }
                data-testid="trunfo-filter"
                type="checkbox"
                id="filtroTrunfo"
              />
            </label>
          </div>
          <div
            className="mb-4"
          >
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
              onInputChange={ this.handleChange }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </div>
          <div
            className="mb-4"
          >
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              onInputChange={ this.handleChange }
            />
          </div>
          <div className="flex flex-col items-center justify-center mb-4">
            { newState !== undefined
              ? (
                newState
                  .filter((item) => (item.cardName.includes(filtroName)))
                  .filter((value) => (
                    filtroRare !== 'todas' ? value.cardRare === filtroRare : true
                  ))
                  .filter((element) => (
                    filtroTrunfo
                      ? element.cardTrunfo === true
                      : element
                  ))
                  .map((card) => (
                    <section key={ card.cardName } className="mb-4">
                      <Card
                        cardName={ card.cardName }
                        cardDescription={ card.cardDescription }
                        cardAttr1={ card.cardAttr1 }
                        cardAttr2={ card.cardAttr2 }
                        cardAttr3={ card.cardAttr3 }
                        cardImage={ card.cardImage }
                        cardRare={ card.cardRare }
                        cardTrunfo={ card.cardTrunfo }
                      />
                      <button
                        onClick={ (event) => {
                          if (card.cardTrunfo) {
                            this.setState({ hasTrunfo: false });
                          }
                          event.target.parentElement.remove();
                        } }
                        type="button"
                        className="border rounded px-2 py-1 mt-2"
                        data-testid="delete-button"
                      >
                        Excluir
                      </button>
                    </section>
                  ))
              )
              : null}
          </div>
        </div>
      </body>
    );
  }
}

export default App;
