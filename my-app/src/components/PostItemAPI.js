import React from 'react'
import css from './css/Content.module.css'

function PostItemAPI(props) {
    return (
        props.posts.map(post => {
            const {id, type, user, webformatURL, tags} = post;
            return (
                <div key={id} className={css.SearchItem}>
                    <p>{type}</p>
                    <p>{user}</p>
                    <img src={webformatURL} alt={`Photo of ${tags}`}/>
                    <p>{tags}</p>
                </div>
            )
        })
    )
}

export default PostItemAPI