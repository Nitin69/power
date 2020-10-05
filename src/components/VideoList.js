import React from 'react';
import {Grid} from '@material-ui/core';
import VideoItem from './VideoItem';
const VideoList =({videos, onVideoSelect})=>{
  const list=[];
  for(let x in videos){
    list.push(<VideoItem onVideoSelect={onVideoSelect} key={x} video={videos[x]} />)
  }
  return ( <Grid container spacing={10}>
  {list}
  </Grid>
);
}
export default VideoList;
