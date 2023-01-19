import {useState} from 'react';
import {useDispatch} from 'react-redux';
import Posts from './Components/Posts/Posts';
import Users from './Components/User/Users';
import Albums from './Components/Albums/Albums';
import {Routes, Route, useNavigate} from "react-router-dom";

import {
    fetchUserPosts
} from './Store/posts'

import {
    fetchUserAlbums
} from './Store/albums'

function App() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    async function handlerClickPosts (id) {
        console.log(id)
        await dispatch(fetchUserPosts(id));
        await navigate('/posts')
    }

    async function handlerClickAlbums(id) {
        console.log(id)
        await dispatch(fetchUserAlbums(id));
        await setIsOpen(true)
    }


    return (
        <div className="App">
            <div className="container">
                <h1>Users unit</h1>
                <Albums closePopup={setIsOpen} isOpen={isOpen}/>
                <Routes>
                    <Route exact path="/" element={<Users handlerClickPosts={handlerClickPosts}
                                                          handlerClickAlbums={handlerClickAlbums}/>}/>
                    <Route path="/posts" element={<Posts/>} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
