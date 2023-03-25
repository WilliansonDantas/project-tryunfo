// const { newState } = this.state;
// newState.push(this.state);
// this.setState({
//   cardName: '',
//   cardDescription: '',
//   cardAttr1: '0',
//   cardAttr2: '0',
//   cardAttr3: '0',
//   cardImage: '',
//   cardRare: 'Normal',
//   cardTrunfo: true,
//   isSaveButtonDisabled: true,
//   filtroName: '',
//   filtroRare: 'todas',
//   filtroTrunfo: false,
// });
// this.hasTrunfo();
// <div>
//         <div className="border border-red-400 sm:border-2 md:border-4">
//           <h1> Trunfo </h1>
//         </div>
//         <div className="border border-indigo-400 sm:border-2 md:border-4">
//           <label htmlFor="filtroName">
//             Filtro de busca:
//             <input
//               disabled={ filtroTrunfo }
//               name="filtroName"
//               onChange={ this.handleChange }
//               id="filtroName"
//               type="text"
//               data-testid="name-filter"
//             />
//           </label>
//         </div>
//         <div className="border border-purple-400 sm:border-2 md:border-4">
//           <label htmlFor="filtroRare">
//             Raridade:
//             <select
//               disabled={ filtroTrunfo }
//               name="filtroRare"
//               value={ filtroRare }
//               onChange={ this.handleChange }
//               data-testid="rare-filter"
//               id="filtroRare"
//            >
// <option value="todas"> Todas </option>
//               <option value="normal"> Normal </option>
//               <option value="raro"> Raro </option>
//               <option value="muito raro"> Muito raro </option>
//             </select>
//           </label>
//         </div>
//         <div className="border border-yellow-400 sm:border-2 md:border-4">
//           <label htmlFor="filtroTrunfo">
//             Super Trunfo
//             <input
//               name="filtroTrunfo"
//               checked={ filtroTrunfo }
//               onChange={ this.handleChange }
//               data-testid="trunfo-filter"
//               type="checkbox"
//               id="filtroTrunfo"
//             />
//           </label>
//         </div>
//         <div className="border border-blue-400 sm:border-2 md:border-4">
//           <Form
//             cardName={ cardName }
//             cardDescription={ cardDescription }
//             cardAttr1={ cardAttr1 }
//             cardAttr2={ cardAttr2 }
//             cardAttr3={ cardAttr3 }
//             cardImage={ cardImage }
//             cardRare={ cardRare }
//             cardTrunfo={ cardTrunfo }
//             hasTrunfo={ hasTrunfo }
//             onInputChange={ this.handleChange }
//             isSaveButtonDisabled={ isSaveButtonDisabled }
//             onSaveButtonClick={ this.onSaveButtonClick }
//           />
//         </div>
//         <div className="border border-green-400 sm:border-2 md:border-4">
//           <Card
//             cardName={ cardName }
//             cardDescription={ cardDescription }
//             cardAttr1={ cardAttr1 }
//             cardAttr2={ cardAttr2 }
//             cardAttr3={ cardAttr3 }
//             cardImage={ cardImage }
//             cardRare={ cardRare }
//             cardTrunfo={ cardTrunfo }
//             onInputChange={ this.handleChange }
//           />
//         </div>
//         <div className="border border-orange-400 sm:border-2 md:border-4">
//           { newState !== undefined
//             ? (
//               newState
//                 .filter((item) => (item.cardName.includes(filtroName)))
//                 .filter((value) => (
//                   filtroRare !== 'todas' ? value.cardRare === filtroRare : true
//                 ))
//                 .filter((element) => (
//                   filtroTrunfo
//                     ? element.cardTrunfo === true
//                     : element
//                 ))
//                 .map((card) => (
//                   <section key={ card.cardName }>
//                     <Card
//                       cardName={ card.cardName }
//                       cardDescription={ card.cardDescription }
//                       cardAttr1={ card.cardAttr1 }
//                       cardAttr2={ card.cardAttr2 }
//                       cardAttr3={ card.cardAttr3 }
//                       cardImage={ card.cardImage }
//                       cardRare={ card.cardRare }
//                       cardTrunfo={ card.cardTrunfo }
//                     />
//                     <button
//                       onClick={ (event) => {
//                         if (card.cardTrunfo) {
//                           this.setState({ hasTrunfo: false });
//                         }
//                         event.target.parentElement.remove();
//                       } }
//                       type="button"
//                       data-testid="delete-button"
//                     >
//                       Excluir
//                     </button>
//                   </section>
//                 ))
//             )
//             : null}
//         </div>
//       </div>
