import React from 'react';
import Input from './components/Input';
import { roll20 } from './util.js';

export default ({ id,  name,  initiative, hitpoints,  onInitiativeChange, onUpdateField, onRemove }) =>
<div className="card">
    <Input
        label="Name"
        type="text"
        value= {name}
        onChange={e => onUpdateField(id, e, 'name')}
    />
    <Input
        label="Initiative"
        type="number"
        value = {initiative}
        onChange={e => onInitiativeChange(id, e)}
    />
    <button onClick={() => onInitiativeChange(id, {target: {value: roll20()}})}>
        d20
        </button>
    <Input
        label="HP"
        type="number"
        value = {hitpoints}
        onChange={e => onUpdateField(id, e, 'hitpoints')}
        />
    <button onClick={() => onRemove(id)}>
        Remove
    </button>
</div>;
