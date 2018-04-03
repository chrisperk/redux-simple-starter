import React from 'react';
import ReactDOM from 'react-dom';
import { YOUTUBE_API_KEY } from './config';

import SearchBar from './components/search-bar';

// Create a new component. This component should produce some HTML.
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};

// Take this component's generated HTML and put it on the page.
ReactDOM.render(<App />, document.querySelector('.container'));