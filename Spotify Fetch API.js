import React from 'react';
import './Themes.css';
const Spotify = () => {  
return (
    <div className="iframeContainer"> 
        <iframe title= "myFrame" className = "embed-iframe" border-radius = {12} src="https://open.spotify.com/embed/playlist/3oAEtO3PlyJ7oGVw0EPYC5?utm_source=generator" width= {550} 
        height= {400}> 
        </iframe> 
    </div>
)
 };

export default Spotify;