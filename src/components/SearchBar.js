import React from 'react';
import {Paper, TextField} from '@material-ui/core';
class SearchBar extends React.Component{
  state = {
    searchTerm:""
  }
  handleChange = (e)=>{
    this.setState({
      searchTerm : e.target.value
    })
  }
  handleSubmit = (e)=>{
    e.preventDefault();
    const {searchTerm} =  this.state;
    const {onFormSubmit} = this.props;
    console.log(searchTerm);
    onFormSubmit(searchTerm);

  }
  render(){

    return <Paper>
      <form onSubmit={this.handleSubmit}>
        <TextField fullWidth label="Search" onChange={this.handleChange}/>
      </form>
    </Paper>
  }
}
export default SearchBar;
