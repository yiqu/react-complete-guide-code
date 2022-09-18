import React, { useState } from 'react';
import styles from './CourseInput.module.css';
import Button from '../../UI/Button/Button';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const [isInputValid, setIsInputValid] = useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    setIsInputValid(event.target.value.trim().length !== 0);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsInputValid(false);
    } else {
      setEnteredValue('');
      props.onAddGoal(enteredValue);
    }
  };

  const validGreen = (validStatus) => {
    return validStatus ? 'valid' : 'invalid';
  }

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
      <div className={styles['form-control'] + ' ' + styles[validGreen(isInputValid)]}>
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler}
          value={enteredValue} />
      </div>
      
      { isInputValid ? 'valid' : 'invalid'}
    </form>
      <Button type="button" primary={true} onClickz={formSubmitHandler} isValid={isInputValid}>Add Goal</Button>
    </div>
    
  );
};

export default CourseInput;
