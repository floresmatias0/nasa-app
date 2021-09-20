import React from "react";

const About = () => {
    let mercurio = "https://assets.stickpng.com/images/580b585b2edbce24c47b2709.png"
    let venus = "https://assets.stickpng.com/images/580b585b2edbce24c47b2712.png"
    let marte = "https://assets.stickpng.com/thumbs/580b585b2edbce24c47b2708.png"
    let jupiter = "https://assets.stickpng.com/thumbs/580b585b2edbce24c47b2707.png"
    let saturno = "https://assets.stickpng.com/images/580b585b2edbce24c47b270d.png"
    let tierra = "https://assets.stickpng.com/images/580b585b2edbce24c47b2705.png"
    let urano = "https://cdn.pixabay.com/photo/2021/04/05/15/54/uranus-6153865_960_720.png"
    let neptuno = "https://png.vector.me/files/images/3/0/301841/neptune_preview"
  return (
    <div className="container_about">
      <h1>About</h1>
      <div className="container_planets">
          <img id="mercurio" src={mercurio} alt="mercurio"/>
          <img id="venus" src={venus} alt="venus"/>
          <img id="tierra" src={tierra} alt="tierra"/>
          <img id="marte" src={marte} alt="marte"/>
          <img id="jupiter" src={jupiter} alt="jupiter"/>
          <img id="saturno" src={saturno} alt="saturno"/>
          <img id="urano" src={urano} alt="urano"/>
          <img id="neptuno" src={neptuno} alt="neptuno"/>
      </div>
      <p>
        This page is created by Matias Flores, it is a simple project in which
        the photos that were taken by the ships that were destined for Mars
        using the NASA API are shown: <a href="https://api.nasa.gov/">https://api.nasa.gov/</a>, they can be
        filtered by date, by date sun also by camera, it also has the
        functionality of adding some photos to a section of favorites as well as
        deleting them from that place, I hope you like it, enjoy doing it a lot
      </p>
      
    </div>
  );
};

export default About;
