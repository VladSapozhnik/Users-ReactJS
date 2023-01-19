import "./Users.scss";
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
    usersArray,
    fetchUsers
} from '../../Store/users';

const Users = ({handlerClickPosts, handlerClickAlbums}) => {
    const users = useSelector(usersArray);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])
    return (
        <>

            <div className="user">
                {users.map(item => <div key={item.id} className="user_item">
                    {item.name}
                    <button onClick={() => handlerClickPosts(item.id)}>Posts</button>
                    <button onClick={() => handlerClickAlbums(item.id)}>Albums</button>
                </div>)}
            </div>

        </>
    )
}

export default Users;