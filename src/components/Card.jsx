import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.props;
    return (
      <form
        className="bg-gray-200 flex flex-col items-center justify-cente
        border rounded-lg shadow-lg px-12 py-1"
      >
        <div className="mb-4">
          <h2 className="text-xl font-bold" data-testid="name-card">{cardName}</h2>
        </div>
        <div className="mb-4">
          <img
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
            className="w-full h-64 object-contain border rounded px-6 py-1"
          />
        </div>
        <div className="mb-4">
          <p className="text-lg" data-testid="description-card">{cardDescription}</p>
        </div>
        <div className="mb-4">
          <p
            className="text-sm font-bold text-gray-700"
            data-testid="attr1-card"
          >
            {cardAttr1}

          </p>
        </div>
        <div className="mb-4">
          <p
            className="text-sm font-bold text-gray-700"
            data-testid="attr2-card"
          >
            {cardAttr2}

          </p>
        </div>
        <div className="mb-4">
          <p
            className="text-sm font-bold text-gray-700"
            data-testid="attr3-card"
          >
            {cardAttr3}

          </p>
        </div>
        <div className="">
          {cardTrunfo && (
            <p className="text-sm font-bold text-gray-700" data-testid="rare-card">
              <span className="mr-2">Raridade:</span>
              <span className="text-lg">{cardRare}</span>
            </p>
          )}
        </div>
        <div className="">
          {cardTrunfo && (
            <p className="text-sm font-bold text-gray-700" data-testid="trunfo-card">
              Super Trunfo
            </p>
          )}
        </div>
      </form>
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
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;

/* <form>
<p data-testid="name-card" >
{cardName}
</p>
<img data-testid="image-card" src={ cardImage } alt={ cardName } />
<p data-testid="description-card">
{cardDescription}
</p>
<p data-testid="attr1-card" >
{ cardAttr1 }
</p>
<p data-testid="attr2-card">
{cardAttr2}
</p>
<p data-testid="attr3-card">
{cardAttr3}
</p>
<p data-testid="rare-card">
{cardRare}
</p>
{ cardTrunfo ? <p data-testid="trunfo-card"> Super Trunfo </p> : null }
</form> */
