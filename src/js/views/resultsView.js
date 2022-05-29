import icons from '../../img/icons.svg';
import View from './View.js';
import previewView from './previewView';

class ResultsView extends View {
  _parentElement = document.querySelector(`.results`);
  _errorMessage = `No recipe found for your query! Please tyr again ;)`;
  _message = ``;

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join(``);
  }
}

export default new ResultsView();
