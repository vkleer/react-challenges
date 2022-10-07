import React, {useEffect, useState} from 'react'
import axios from 'axios'
import API_KEY from '../secrets'
import css from './css/Content.module.css'
import PostItemAPI from './PostItemAPI'
import Loader from './Loader'

function ContentAPIHooks() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setPosts] = useState([]);
    const [savedPosts, setSavedPosts] = useState([]);

    const fetchImages = async () => {
        axios.get(
            `https://pixabay.com/api/?key=${API_KEY}&per_page=100`
        ).then(response => {
            const fetchedPosts = response.data.hits;
            setIsLoaded(true);
            setPosts(fetchedPosts);
            setSavedPosts(fetchedPosts);
            console.log(fetchedPosts);
        })
    }

    const handleSearch = (event) => {
        let name = event.target.value;
        const filteredPosts = savedPosts.filter(post => {
            return post.user.toLowerCase().includes(name);
        })
            setPosts(filteredPosts);
    }

    useEffect(() => {
        fetchImages();
    }, [])

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
                    <h4>posts found: {posts.length}</h4>
                </form>
            </div>
            <div className= {css.SearchResults}>
                {
                    isLoaded ? (
                        <PostItemAPI posts={posts} savedPosts={savedPosts} />
                    ) : (
                        <Loader />
                    )
                }  
            </div>
        </div>
    )
}

export default ContentAPIHooks