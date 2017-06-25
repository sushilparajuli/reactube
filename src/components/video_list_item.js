import React from "react";

const VideoListItem = ({video , onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url
  return (
    <li onClick={()=>onVideoSelect(video)} className="list-group-item" style={{cursor:'pointer'}}>

      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} alt={video.snippet.title } />
        </div>
        <div className="media-body">
          <div className="media-heading"> {video.snippet.title }</div>
        </div>
      </div>
      {/*{video.snippet.channelTitle}*/}
    </li>
  )
};
export default VideoListItem;
