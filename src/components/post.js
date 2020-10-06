import moment from 'moment'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Post extends Component {
    constructor(props) {
        super()
        this.state = {
            post: {}
        }
    }
    render() {
        let post = this.props.post            
        return (
            <div>
                <li className="list-group-item">
                    <p>
                        <h5>
                            <Link to={`/blog/${post.id}`}> {post.body} </Link> 
                        </h5>
                    </p>
                    <cite>
                        &mdash; {post.user.first_name} {post.user.last_name} @ {moment(post.created_on).fromNow()}
                    </cite>
                </li>
            </div>
        )
    }
}
