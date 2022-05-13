import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  state = {
    cardTrunfo: true,
  };

  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare } = this.props;
    const { cardTrunfo } = this.state;
    return (
      <>
        <p
          data-testid="name-card"
        >
          {cardName}
        </p>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p
          data-testid="description-card"
        >
          {cardDescription}
        </p>
        <p
          data-testid="attr1-card"
        >
          { cardAttr1 }
        </p>
        <p
          data-testid="attr2-card"
        >
          {cardAttr2}
        </p>
        <p
          data-testid="attr3-card"
        >
          {cardAttr3}
        </p>
        <p
          data-testid="rare-card"
        >
          {cardRare}
        </p>
        <p
          onChange={ this.handleChange }
          cardTrunfo={ cardTrunfo }
          data-testid="trunfo-card"
        >
          Super Trunfo
        </p>
      </>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
};

export default Card;
