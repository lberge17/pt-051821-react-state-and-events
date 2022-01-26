import React, { Component } from 'react'

export default class MovieForm extends Component {

    state = {
        title: "",
        image: ""
    }

    // handleTitleChange = e => {
    //     this.setState({
    //         title: e.target.value
    //     })
    // }

    // handleImageUrlChange = e => {
    //     this.setState({
    //         image: e.target.value
    //     })
    // }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addMovie({...this.state, likes: 0})
        alert("Movie created!")
        this.setState({
            title: "",
            image: ""
        })
    }

    render() {
        console.log(this.state)
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="movie-title-input">Title:</label>
                {/* CONTROLLED */}
                <input 
                    id="movie-title-input" 
                    type="text" 
                    value={this.state.title}
                    onChange={this.handleChange}
                    name="title"
                />

                <label htmlFor="movie-image-input">Image Url:</label>
                {/* CONTROLLED */}
                <input 
                    id="movie-image-input" 
                    type="text" 
                    value={this.state.image}
                    onChange={this.handleChange}
                    name="image"
                />

                <input type="submit" />
            </form>
        )
    }
}
