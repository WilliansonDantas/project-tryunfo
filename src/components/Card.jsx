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
      <form className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <p
          data-testid="name-card"
          className="text-gray-800 font-bold text-xl mb-2 p-4"
        >
          {cardName}
        </p>
        <img
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
          className="w-full object-cover h-64"
        />
        <p
          data-testid="description-card"
          className="text-gray-800 font-semibold text-md p-4"
        >
          {cardDescription}
        </p>
        <div
          className="flex justify-between items-center p-4"
        >
          <p
            data-testid="attr1-card"
            className="text-gray-700 font-semibold text-sm"
          >
            {cardAttr1}
          </p>
          <p
            data-testid="attr2-card"
            className="text-gray-700 font-semibold text-sm"
          >
            {cardAttr2}
          </p>
          <p
            data-testid="attr3-card"
            className="text-gray-700 font-semibold text-sm"
          >
            {cardAttr3}
          </p>
          <p
            data-testid="rare-card"
            className="text-gray-700 font-semibold text-sm"
          >
            {cardRare}
          </p>
        </div>
        {
          cardTrunfo ? (
            <p
              data-testid="trunfo-card"
              className="text-white bg-yellow-400 font-bold
              uppercase tracking-wide text-sm p-2"
            >
              Super Trunfo
            </p>
          )
            : null
        }
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
