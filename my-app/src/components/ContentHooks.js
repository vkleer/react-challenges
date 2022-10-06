import React, {useState, useEffect} from 'react'
import {savedPosts} from '../posts.json'
import css from './css/Content.module.css'
import PostItem from './PostItem'
import Loader from './Loader'

function ContentHooks() {
    const isLoaded = useState(false);
    const fetchedPosts = useState([]);

    useEffect(() => {
        setTimeout(() => {
            isLoaded = true;
            fetchedPosts = savedPosts;
        }, 2000);
    }, []);

    handleSearch = (event) => {
        let name = event.target.value;
        const filteredPosts = savedPosts.filter(post => {
            return post.name.toLowerCase().includes(name);
        });
        fetchedPosts = filteredPosts;
    }

    return (
        <div className= {css.Content}>
            <div className= {css.TitleBar}>
                <h1>My Photos</h1>
                <form>
                    <label htmlFor='searchInput'>Search:</label>
                    <input 
                        onChange={handleSearch}
                        id='searchInput' type='search' 
                    />
                    <h4>posts found: {fetchedPosts.length}</h4>
                </form>
            </div>
            <div className= {css.SearchResults}>
                {
                    this.state.isLoaded ? (
                        <PostItem posts={fetchedPosts} savedPosts={savedPosts} />
                    ) : (
                        <Loader />
                    )
                }  
            </div>
        </div>
    )
}

export default ContentHooks