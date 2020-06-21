import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import { initialState } from  './constants';
import { updateListElement } from './util.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: initialState
    };
  }

  updateField = (id, e, field) => {
    const {value} = e.target;
    this.setState({ elements: updateListElement(this.state.elements, id, field, value) });
  };

  updateInitiative = (id, e) => {
    clearTimeout(this.timeout_)
    this.updateField(id, e, 'initiative')
    this.timeout_ = setTimeout(() => this.sortElements(),  500);
  };

  sortElements = () => {
    const { elements } = this.state;
    this.setState({ elements: elements.sort((l, r) => r.initiative - l.initiative)})
  };

  addCard = () => {
    const { elements } = this.state;
    elements[elements.length] = {
      id: elements.length + 1,
      name: 'Player ${elements.length + 1}',
      initiative: -1,
      hitpoints: 1
    };
    this.setState({
      elements: elements.sort((l, r) => r.initiative - l.initiative)
    });
  }

  removeElement = (id) => {
    let { elements } = this.state;
    elements = elements.filter(el => el.id !== id);
    this.setState({ elements });
  }

  render() {
    const { elements } = this.state;
    return (
      <div>
        <button onClick={this.addCard}>Add</button>
        {elements.map(element =>
          <Card
              key={element.id}
              name={element.name}
              initiative={element.initiative}
              hitpoints={element.hitpoints}
              id={element.id}
              onUpdateField={this.updateField}
              onInitiativeChange={this.updateInitiative}
              onRemove={this.removeElement}
          />
          )}

      </div>
    );
  }
}

export default App;
