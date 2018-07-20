import React, { Component } from 'react';
import Posts from './Posts/Posts';
import { Route, NavLink, Switch } from 'react-router-dom';
import './Blog.css';
//import NewPost from './NewPost/NewPost';
//import FullPost from './FullPost/FullPost';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state ={
        auth: true,
    }
    render () {
       
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                            to="/posts" 
                            activeClassName="my-active" 
                            activeStyle={{
                                color: '#fa923f',
                                textDecoration: 'underline',
                            }}
                            >Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: 'quick-submit=true',
                            }}>NEW POST</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/"  exact render={ () => <h1>HOME</h1> } />
                <Route path="/"  render={ () => <h1>HOME 2</h1> } />*/}
               
                <Switch>
                {this.state.auth ? <Route path="/new-post"  component={AsyncNewPost}/> : null} 
                <Route path="/posts"  component={Posts}/> 
                <Route render={()=> <h1>Page Not Found</h1>}/>
                {/*<Redirect from="/" to="/posts" /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;