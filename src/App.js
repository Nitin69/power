import React from 'react';
import {Grid} from '@material-ui/core';
import youtube from './api/youtube'
import {VideoDetail, SearchBar, VideoList} from './components';

class App extends React.Component{
  state = {
    selectedVideo: [],
    videos:null
  }
  handleSubmit = async (searchTerm)=>{

    const response = await youtube.get('search',{
      params:{
        part:'snippet',
        maxResults:5,
        key:'AIzaSyAt6q143pijm56E6Fu8qTZifO3rIely-J0',
        q:searchTerm
      }
    });
    this.setState({
      selectedVideo: response.data.items[0],
      videos: response.data.items
    });
  }
  onVideoSelect = (video)=>{
    this.setState({
      selectedVideo: video
    });
  }
  componentDidMount(){
    this.handleSubmit("Dragon ball super");
  }
  render(){
    const {selectedVideo, videos} = this.state;
    return <Grid spacing={10} justify="center" container>
      <Grid item xs={12}>
          <Grid container spacing ={10} >
            <Grid></Grid>
            <Grid item xs={12}><SearchBar onFormSubmit= {this.handleSubmit}/></Grid>

            <Grid item xs={8}><VideoDetail video={selectedVideo} /></Grid>
            <Grid item xs={4}><VideoList videos = {videos} onVideoSelect = {this.onVideoSelect}/></Grid>
          </Grid>
      </Grid>
    </Grid>
  }
}
export default App;
