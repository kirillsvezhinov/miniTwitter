import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel'
import PostStatusFilter from '../post-satus-filter'
import Postlist from '../post-list';
import PostAddForm from '../post-add-form';

import './index.css'
import './app.css'

const App = () => {

    return(<div className="app">
            <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <Postlist/>
                <PostAddForm/>
                
            </div>
        )
}
export default App