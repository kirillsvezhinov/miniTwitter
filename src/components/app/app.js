import React,{Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel'
import PostStatusFilter from '../post-satus-filter'
import Postlist from '../post-list';
import PostAddForm from '../post-add-form';
import styled from 'styled-components';
import nextId from "react-id-generator";


import './index.css'

const AppBlock = styled.div`
        margin: 0 auto;
        max-width: 800px;
`

export default class App extends Component {
    constructor(props){
        super(props);
        this.state= {
            data : [
                {label:'Трамп победил', important:true, like:true ,id:nextId()},
                {label:'Конституция наше все', important:false, like:false ,id:nextId()},
                {label:'А нет, не все)', important:false, like:false ,id:nextId()}
            ],
            term: '',
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onUpdateSearch= this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);

    }
    deleteItem(id){
        this.setState(({data}) =>{
            const index = data.findIndex(item => item.id === id);
            const before = data.slice(0,index);
            const after = data.slice(index+1);

            const newArray = [...before,...after]
            return{
                data:newArray
            }
        })
    }
    addItem(body){
        const elem ={
            label:body,
            important:false,
            id:nextId()
        }
        this.setState(({data}) =>{
            const items = [...data,elem];
            return {
                data:items
            }
        });
    }
    onToggleImportant(id){

        this.setState(({data}) =>{
            const index = data.findIndex(item => item.id === id);
            const old = data[index];
            const newItem = {...old, important : !old.important};
            const before = data.slice(0,index);
            const after = data.slice(index+1);
            const newArray = [...before, newItem, ...after]
            return { 
                data:newArray
            }
      
        })
    }
    onToggleLiked(id){
        this.setState(({data}) =>{
            const index = data.findIndex(item => item.id === id);
            const old = data[index];
            const newItem = {...old, like : !old.like};
            const before = data.slice(0,index);
            const after = data.slice(index+1);
            const newArray = [...before, newItem, ...after]
            return { 
                data:newArray
            }
      
        })
    }
    filterPost(items, filter){
        if(filter === 'like'){
            return items.filter(item => item.like === true)
        }else{
            return items
        }
    }
    searchPost(items, term){
        if(term.length === 0 ){
            return items
        }
        return items.filter((item) => { 
            return item.label.indexOf(term) > -1
        })
    }
    onFilterSelect(filter){
        this.setState({filter})
    }
    onUpdateSearch(term){
        this.setState({term})
    }
    render(){
        const {data,term,filter} = this.state;
        const liked = this.state.data.filter(item => item.like).length;
        const allPosts = this.state.data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);
        return(
            <AppBlock>
                <AppHeader liked={liked} allPosts={allPosts}/>
                <div className="search-panel d-flex">
                    <SearchPanel
                    onUpdateSearch={this.onUpdateSearch}
                    />
                    <PostStatusFilter
                    onFilterSelect = {this.onFilterSelect}
                    filter={filter}
                    />
                </div>
                <Postlist 
                posts={visiblePosts} 
                onDelete = {this.deleteItem}
                onToggleImportant = {this.onToggleImportant}
                onToggleLiked = {this.onToggleLiked} 
                />
                <PostAddForm onAdd={this.addItem}/>
                
            </AppBlock>
        )
    }
}