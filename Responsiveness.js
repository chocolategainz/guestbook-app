import React from 'react';
import './Themes.css';
import useWindowDimensions from './Metrics';
import Homepage from './Homepage';
import Contacts from './Contacts';
import About from './About';
import Form from './Form';
import Playlist from './Playlist';
import Pagination from './Pagination';

const Responsiveness = () => {
    const {width} = useWindowDimensions();
    const style ={
        container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: width < 600 ? 'column' : 'row',
      width:'100%',
      height: '100vh',
      boxSizing: 'border-box',
        },
        item: {
            margin: 10,
            padding: 20,
           width:'100%',
      maxWidth: '500px', 
      
          },

        };
        return (
            
          <div style={style.container}>
           <div style={style.item}><Homepage /></div>
            <div style={style.item}><Contacts /></div>
            <div style={style.item}><About /></div>
            <div style={style.item}><Form /></div>
            <div style={style.item}><Pagination /></div>
            <div style={style.item}><Playlist /></div>

      </div>
        );
};

export default Responsiveness;