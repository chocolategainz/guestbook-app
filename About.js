import React from 'react';
import PictureTwo from './PictureTwo.jpg';
import './Themes.css';


const About = () => {
    return ( 
<div className = "container">



<h4 id = "aboutUsTitle">OUR STORY</h4>
<div class="d-flex justify-content-evenly">
 <img srcset = {PictureTwo} className = "mainPicture" alt = "Two people smiling" height = {250}></img>
    <p className = "description">
{/*Placeholder */}
In the digital expanse of a dating website our two hearts found solace in each other's words. 
With each exchanged message, our connection deepened, transcending screens and distances.
 As days turned into nights filled with endless conversations, we realized that we had stumbled upon a rare love, 
 one destined for eternity. With hesitant yet hopeful steps, we ventured beyond the virtual realm, forging bonds in the tangible world. 
 And as time wove its gentle tapestry, amidst laughter, tears, and shared dreams, we have decided to stand hand in hand, 
 saying "I do", so that our love story will eternally be etched in the stars.</p>
</div>

{/*<img srcset = {Names} className = "cards" alt = "Names on cards" height = {280}></img> */}
    

    
  
{/*Image of married couple on wedding cards
<Names ImageNames={ImageNames} height={260} width={450}/>
    */}
</div>
)};
export default About;