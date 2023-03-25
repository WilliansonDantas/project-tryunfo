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

  typesCardrare = ['Todas', 'Normal', 'Raro', 'Muito raro']

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

      <div className="flex flex-col space-y-4 md:space-y-8 lg:space-y-12">
        <div className="border border-red-400 sm:border-2 md:border-4 p-4 md:p-8 lg:p-12">
          <h1 className="text-lg md:text-2xl lg:text-3xl font-bold">Trunfo</h1>
        </div>
        <div
          className="border border-indigo-400 sm:border-2
        md:border-4 p-4 md:p-8 lg:p-12"
        >
          <label
            htmlFor="filtroName"
            className="font-bold"
          >
            Filtro de busca:
            <input
              className="w-full py-2 px-4 rounded-lg
            border-2 border-gray-200 mt-2 focus:outline-none focus:border-indigo-500"
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
          className="border border-purple-400 sm:border-2
        md:border-4 p-4 md:p-8 lg:p-12"
        >
          <label
            htmlFor="filtroRare"
            className="font-bold"
          >
            Raridade:
            <select
              className="w-full py-2 px-4 rounded-lg border-2 border-gray-200 mt-2
            focus:outline-none focus:border-indigo-500"
              disabled={ filtroTrunfo }
              name="filtroRare"
              value={ filtroRare }
              onChange={ this.handleChange }
              data-testid="rare-filter"
              id="filtroRare"
            >
              { typesCardrare.map((type) => (
                <option
                  key={ type.lenght + 1 }
                  value={ type }
                >
                  {type}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div
          className="border border-yellow-400 sm:border-2
        md:border-4 p-4 md:p-8 lg:p-12"
        >
          <label
            htmlFor="filtroTrunfo"
            className="font-bold"
          >
            Super Trunfo
            <input
              className="ml-2"
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
          className="border border-blue-400 sm:border-2
        md:border-4 p-4 md:p-8 lg:p-12"
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
          className="border border-green-400 sm:border-2
        md:border-4 p-4 md:p-8 lg:p-12"
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
        <div className="border border-orange-400 sm:border-2 md:border-4">
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
                  <section key={ card.cardName } className="my-4">
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
                      className="mt-2 px-4 py-2 text-white bg-red-500
                    hover:bg-red-600 rounded"
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
    );
  }
}

export default App;
