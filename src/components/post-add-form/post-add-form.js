import React from 'react';
import './index.css'
/* import './post-add-form.css' */
import styled from 'styled-components'
import { Button } from 'reactstrap';

const formPanel = styled.form`
    margin-top: 20px;
    
`
const inputPanel = styled.input`
    width: auto;
    flex-grow: 1;
    margin-right: 3px;`

const PostAddForm = () =>{
    return (
        <formPanel>
            <input
            type="text"
            placeholder="О чем вы сейчас думаете?"
            className="form-control new-post-label"
            />
            <Button type="submit" outline color="secondary">
                Добавить          
            </Button>
        </formPanel>
    )
} 
export default PostAddForm;
