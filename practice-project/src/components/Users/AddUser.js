import React from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';

import classes from './AddUser.module.css';


const AddUser = (props) => {
    const addUserHandler = (event) => {
        //submit에 기본적으로 실행되도록 정의된 동작 막음
        event.preventDefault();
    }


  return (
      <Card className={classes.input}>
          <form onSubmit={addUserHandler}>
              <label htmlFor="username">UserName</label>
              <input id="username" type="text"/>
              <label htmlFor="age">Age(years)</label>
              <input id="age" type="number"/>
              <Button type="submit">Add User</Button>
          </form>
      </Card>

  )
};

export default  AddUser;