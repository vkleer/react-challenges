import React from 'react'
import css from './css/Content.module.css'

function PostItem(props) {
    const savedPosts = props.savedPosts;
    return (
        savedPosts.map(post => {
            return (
                <div key={post.title} className={css.SearchItem}>
                    <p>{post.title}</p>
                    <p>{post.name}</p>
                    <img src={post.image} alt={post.title}/>
                    <p>{post.description}</p>
                </div>
            )
        })
    )
}

export default PostItem