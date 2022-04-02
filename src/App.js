import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';

export default function Meme(){
    const [images, setImages] = useState([]);
    const [currentImg, setCurrentImg] = useState('https://st2.depositphotos.com/1026266/7750/i/600/depositphotos_77501870-stock-photo-business-man-holding-electricity-light.jpg');
    useEffect(()=>{
        axios.get('https://api.memegen.link/templates').
        then(res =>{setImages(res.data.map(result => result.blank ))}).catch(err => console.log(err))
        

    },[])

    const [text, setText] = useState({
        topText: '',
        bottomText: ''
    })

    const handleChange = (e) => {
        const{value,name} = e.target
        
        setText({
            ...text, 
            [name]: value
        })
    }
    

 function handleCLick() {
    const randomImg = Math.floor(Math.random() * images.length)
    setCurrentImg(images[randomImg])
    }

return(
    <div>
     <center><h1>Meme generator using React by: <i className="name">Jasmin Hadžialić</i></h1></center>

      <div className="meme--inp">
        <input type='text' name="topText" onChange={handleChange}/>
        <input type='text' name="bottomText" onChange={handleChange}/>
      </div>

      <div className="meme--btn">
        <button onClick={handleCLick}>MEME GENERATOR</button>
      </div>
 
      <div className="meme--box">
        
           <img src={currentImg} />
        
          <h2 className="up" id="up">{text.topText === '' ? 'shut up' : text.topText}</h2>
          <h2 className="down" id="down">{text.bottomText === '' ? 'and take my money' : text.bottomText}</h2>
         
      </div>
    </div>
)
}