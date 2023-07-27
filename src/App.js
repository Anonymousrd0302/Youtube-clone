import React from 'react';

import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { Box } from  '@mui/material';

import { Navbar,Feed,videoDetails,channelDetails,searchFeed} from './components';

const App = () => (
      <BrowserRouter>
        <Box sx = {{ backgroundColor:'#000' }}>
          <Navbar />
          <Routes>
            <Route path="/" exact element = {<Feed />} />
            <Route path="/video/:id" element = {<videoDetails />} />
            <Route path="/channel/:id" element = {<channelDetails />} />
            <Route path="/search/searchTerm" element = {<searchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
)

export default App
