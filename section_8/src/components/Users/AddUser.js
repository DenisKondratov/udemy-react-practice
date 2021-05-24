import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import React, { useState } from 'react'
import ErrorModal from '../UI/ErrorModal'

const AddUser = props => {

  const [enteredUserName, setenteredUserName] = useState('')
  const [enteredAge, setenteredAge] = useState('')
  const [error, setError] = useState()

  const addUserHandler = (e) => {
    e.preventDefault()
    setenteredUserName('')
    setenteredAge('')
    if (enteredUserName.trim() === 0 || enteredAge.trim() === 0) {
      setError({
        title: 'Invalid input',
        message: 'Set valid input'
      })
      return
    } 
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Set valid age'
      })
      return
    }
    
    props.onAddUsers(enteredUserName, enteredAge)
  } 

  const userNameChangeHandler = (e) => {
    setenteredUserName(e.target.value)
    
  }
  const ageChangeHandler = (e) => {
    setenteredAge(e.target.value)
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
      <label htmlFor='username'>Username</label>
      <input 
        id='username'
        type='text'
        onChange={userNameChangeHandler}
        value={enteredUserName}
        />
      <label htmlFor='age'>Age (years)</label>
      <input 
        id='age' 
        type='number' 
        onChange={ageChangeHandler}
        value={enteredAge}
        />
      <Button type='submit'>Add User</Button>
    </form>  
    </Card>
    </div>      
  )
}

export default AddUser