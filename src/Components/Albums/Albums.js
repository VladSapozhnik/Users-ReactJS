import './Albums.scss'
import {albumsArray} from '../../Store/albums';
import {useSelector} from 'react-redux';

const Albums = ({isOpen, closePopup}) => {
    const albums = useSelector(albumsArray);
    return (
        <>
            <div className={`popup ${isOpen ? 'active' : ''}`} onClick={() => closePopup(false)}>
                <div className="popup-wrap" onClick={e => e.stopPropagation()}>
                    <span className="popup-wrap_close" onClick={() => closePopup(false)}>X</span>
                    {albums.map((item, i) => <p className="popup-wrap_title" key={item.id}>{i + 1}.{item.title}</p>)}
                </div>
            </div>
        </>
    )
}

export default Albums;