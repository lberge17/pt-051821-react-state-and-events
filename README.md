# React: Forms

### Controlled Forms

#### Q: What do we use in React to handle data that changes as user interacts with our app?

We want to keep our React State as our "single source of truth", so we will keep our input fields controlled.

Input fields that have their value managed by state are called "controlled components".

```
export default class MyForm extends Component{

    constructor(props){
        super(props)
        this.state = {
            note: ""
        }

    }

    handleChange = e => {
      this.setState({
        note: e.target.value
      })
    }

    handleSubmit(){
        // send data wherever
        this.setState({
          note: ""
        })
    }

    render(){
      return(
        <form onSubmit={handleSubmit}>
          <input type="text" value={this.state.note} onChange={handleChange} />
          <input type="submit" />
        </form>
      )
    }
}
```