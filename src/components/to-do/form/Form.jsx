import React, { useContext } from 'react';
import { ListContext } from '../../../context/list';
import { FormGroup, InputGroup, Intent, H1 } from '@blueprintjs/core';
import './form.scss';

function Form() {
  const { handleSubmit, handleChange } = useContext(ListContext);

  return (
    <div className="form1">
      <H1>Add To Do Item</H1>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormGroup label="To-Do Details" labelInfo="(required)" required="true">
            <InputGroup
              onChange={handleChange}
              name="text"
              placeholder="what do you want to do ?"
              intent={Intent.PRIMARY}
            />
          </FormGroup>
          <FormGroup label="Assignee Name" labelFor="text-input" labelInfo="(required)" required="true">
            <InputGroup onChange={handleChange} name="assignee" placeholder="flan w 3lan" intent={Intent.PRIMARY} />
          </FormGroup>
          <FormGroup label="Difficulty" labelFor="range">
            <input
              className="deff"
              onChange={handleChange}
              defaultValue={3}
              type="range"
              min={1}
              max={5}
              name="difficulty"
            />
          </FormGroup>
          <FormGroup>
            <InputGroup type="submit" intent={Intent.DANGER} />
          </FormGroup>
        </FormGroup>
      </form>
    </div>
  );
}

export default Form;
