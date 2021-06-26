import React, {Component } from 'react';
import axios from 'axios'

class Home extends Component {
    state = {urls: []};

    componentDidMount() {
      axios.get('http://localhost:3001/video')
      .then((res) => {
          console.log(res.data);
          this.setState({urls: res.data})
      })
      .catch(e => console.log(e)); 
    }

    renderUrls() {
        if(!this.state.urls) {
            return <div>Loading...</div>
        }

        return this.state.urls.map(url => {
            return (
            <li key={url._id}>{url.url}</li>
            );
        })
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <h2>URLS Are </h2>
                <ul>
                    {this.renderUrls()}
                </ul>
            </div>
        )
    }
}

export default Home;