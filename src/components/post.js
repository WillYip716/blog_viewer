import React from 'react'
import axios from 'axios';


class Post extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            loading: true,
            posts: []
        };
    }

    componentDidMount() {
        axios.get('http://10.0.2.15:4000/posts/'+this.props.match.params.id)
          .then(res => {
            const posts = res.data;
            console.log(res.data);
            this.setState((state) => ({
                loading: false,
                posts: posts
            }));  
          })
    }

    render(){
        return(
            <div>
            {this.state.loading        
                ? <h1>Hello i am loading</h1>
                : <div>
                    <h1>{this.state.posts.post.title}</h1>
                    <p>{this.state.posts.post.article}</p>
                    <p>{this.state.posts.post.timestamp}</p>
                    {this.state.posts.comments.map((comment) => (
                        <div>
                            <p>{comment.content}</p>
                            <p>{comment.author}</p>
                            <p>{comment.timestamp}</p>
                        </div>
                    ))}
                    
                  </div>   
            }
            
                
            </div>
        )
    }
    
}
export default Post;