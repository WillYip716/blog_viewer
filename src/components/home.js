import React from 'react'
import axios from 'axios';

class Home extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            loading: true,
            posts: []
        };
    }

    componentDidMount() {
        axios.get('http://10.0.2.15:4000/posts')
          .then(res => {
              console.log(res.data);
            //const persons = res.data;
            /*this.setState((state) => ({
                loading: false,
                posts: res.data
            }));  */
          })
    }

    render(){
        return(
            <div>
                <h1>Hello from home</h1>
            </div>
        )
    }
    
}

export default Home;