import {useSelector} from 'react-redux';
import {
    postsArray
} from '../../Store/posts'
import {Link} from "react-router-dom";

const Posts = () => {

    const posts = useSelector(postsArray);
    return (
        <>
            <Link to="/">Главная</Link>
            {posts.map((item,i) => <div key={item.id}>
                <h3>{i + 1}.{item.name}</h3>
                <p>{item.body}</p>
            </div>)}
        </>
    )
}

export default Posts;