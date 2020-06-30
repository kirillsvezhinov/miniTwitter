import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel'
import PostStatusFilter from '../post-satus-filter'
import Postlist from '../post-list';
import PostAddForm from '../post-add-form';
import styled from 'styled-components'


import './index.css'

const AppBlock = styled.div`
        margin: 0 auto;
        max-width: 800px;
`

const App = () => {
    const data = [
        {label:'Трамп победил', important:true, id:'asdol'},
        {label:'Конституция наше все', important:false, id:'asdkuqwe'},
        {label:'А нет, не все)', important:false, id:'asdasd'}
    ]

    return(
            <AppBlock>
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <Postlist posts={data}/>
                <PostAddForm/>
                
            </AppBlock>
        )
}
export default App