import React from 'react';
import './index.css'
/* import './post-add-form.css' */
import styled from 'styled-components'
import { Button } from 'reactstrap';

const FormPanel = styled.form`
    margin-top: 20px;
    
`
const inputPanel = styled.input`
    width: auto;
    flex-grow: 1;
    margin-right: 3px;`

const PostAddForm = ({onAdd}) =>{
    return (
        <FormPanel as='div'>
            <input
            type="text"
            placeholder="О чем вы сейчас думаете?"
            className="form-control new-post-label"
            />
            <Button type="submit" outline color="secondary" onClick = { () => {onAdd('hello')}}>
                Добавить          
            </Button>
        </FormPanel>
    )
} 
export default PostAddForm;
