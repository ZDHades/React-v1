import React, { Component } from 'react'
import Post from '../components/post'

export default class Blog extends Component {
    constructor() {
        super()
        this.state = {
            posts : []
        }
    }
    componentDidMount() {
        fetch('https://flaskbook-api.herokuapp.com/api/blog')
        .then(res => res.json())
        .then(data => this.setState({posts:data}))
        // .then(data => console.log(data))
        }
    render() {
        let posts = this.state.posts;
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <ul className="list-group">
                            {posts ? posts.map(post => (
                                <Post post={post} key={post.id}/> ) 
                            ): null}
                            {/* <h3>No posts to show</h3> */}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
