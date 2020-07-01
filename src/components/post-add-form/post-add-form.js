import React,{Component} from 'react';
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

export default class PostAddForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            text:''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onValueChange(e){
        this.setState({
            text: e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        if(this.state.text !=''){
            this.props.onAdd(this.state.text)
        }
        
        this.setState({
            text:''
        })
    }

   render(){
    return (
        <FormPanel onSubmit={this.onSubmit}>
            <input
            type="text"
            placeholder="О чем вы сейчас думаете?"
            className="form-control new-post-label"
            onChange={this.onValueChange}
            value={this.state.text}
            />
            <Button type="submit" outline color="secondary">
                Добавить          
            </Button>
        </FormPanel>
    )
   }
} 

