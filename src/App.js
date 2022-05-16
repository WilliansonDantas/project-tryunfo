import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
// gif para teste: https://c.tenor.com/f08JC5l9cncAAAAC/mort-mortal-kombat.gif
class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: 'Normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    newState: [],
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.type
      === 'checkbox' ? event.target.checked : event.target.value }, this.checkSaveButton);
  };

  onSaveButtonClick = () => {
    const { newState } = this.state;
    newState.push(this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'Normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    }));
  }

  checkSaveButton = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3 } = this.state;
    const somaAtributos = 210;
    const limiteAtributo = 90;
    if (
      cardName !== ''
    && cardDescription !== ''
    && cardImage !== ''
    && cardRare !== ''
    && ((cardAttr1 * 1) + (cardAttr2 * 1) + (cardAttr3 * 1)) <= somaAtributos
    && cardAttr1 <= limiteAtributo
    && cardAttr2 <= limiteAtributo
    && cardAttr3 <= limiteAtributo
    && cardAttr1 >= 0
    && cardAttr2 >= 0
    && cardAttr3 >= 0) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <>
        <h1> Trunfo </h1>
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
      </>
    );
  }
}

export default App;
