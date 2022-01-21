import React from 'react'

export default class MovieCard extends React.Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         likes: props.movie.likes
    //     }
    // }

    state = {
        likes: this.props.movie.likes
    }

    handleClick = () => {
        // WRONG (state is immutable)
        // this.state.likes += 1

        // WRONG
        // this.setState({likes: this.state.likes + 1})
 
        // RIGHT
        this.setState(prevState => {
            return {
                likes: prevState.likes + 1
            }
        })
        // this.setState(prevState => ({likes: prevState.likes + 1}))
    }

    render(){
        console.log(this.props)
        return (
            <div className="movie-card">
                <img alt="movie-poster" className="movie-image" src={this.props.movie.image}/>
                <h3>{this.props.movie.title}</h3>
                <p>Movie Rating: {this.state.likes}</p>
                <button onClick={this.handleClick} className="like-bttn">❤️</button>
            </div>
        )
    }
}
