import logo from '../logo.svg';
import React, { useEffect } from 'react';
import { useState} from 'react';
import './App.css';
import './CommentSection.js';
import './DirectMessage.js';
import './EditPost.js';
import './Inbox.js';
import './Loading.js';
import './Login.js';
import './Navbar.js';
import './Posts.js';
import './Profile.js';
import './Register.js';
import './WritePost.js';
import { Navbar } from './';
import { getPosts } from '../api';
import { Route } from 'react-dom';
function App() {
   // data you should keep track of:
   // const [token, setToken] = useState('');
    const [user, setUser] = useState({}); // use to check if logged in
   // const [posts, setPosts] = useState([]); // updated with API calls
   // const [status, setStatus] = useState({}); // used for status bar, like when sending message it says "message sent to" 
   // [open, setOpen] = useState(false); // used to show status or not

   useEffect(){

   }

  return (
   <Navbar user = {user}></Navbar> // doesn't need to be in a route b/c always at top, same as status
  );
}

export default App;
