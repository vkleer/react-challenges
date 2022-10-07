import React, { Component } from 'react'
import axios from 'axios'
import API_KEY from '../secrets'
import {savedPosts} from '../posts.json'
import css from './css/Content.module.css'
import PostItemAPI from './PostItemAPI'
import Loader from './Loader'

export class ContentAPI extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            posts: [],
        };
    }

    componentDidMount() {
        this.fetchImages();
    }

    async fetchImages() {
        const response = await axios.get(
            `https://pixabay.com/api/?key=${API_KEY}&per_page=100`
        );
        const fetchedPosts = response.data.hits;
        this.setState({
            isLoaded: true,
            posts: fetchedPosts,
        })
        console.log(fetchedPosts);
    }

    handleSearch = (event) => {
        let name = event.target.value;
        const filteredPosts = savedPosts.filter(post => {
            return post.name.toLowerCase().includes(name);
        })
        this.setState({
            posts: filteredPosts,
        })
    }

    render() {
        return (
            <div className= {css.Content}>
                <div className= {css.TitleBar}>
                    <h1>My Photos</h1>
                    <form>
                        <label htmlFor='searchInput'>Search:</label>
                        <input 
                            onChange={this.handleSearch}
                            id='searchInput' type='search' 
                        />
                        <h4>posts found: {this.state.posts.length}</h4>
                    </form>
                </div>
                <div className= {css.SearchResults}>
                    {
                        this.state.isLoaded ? (
                            <PostItemAPI posts={this.state.posts} savedPosts={savedPosts} />
                        ) : (
                            <Loader />
                        )
                    }  
                </div>
            </div>
        )
    }
}

export default ContentAPI