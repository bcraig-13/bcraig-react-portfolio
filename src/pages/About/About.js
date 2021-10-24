import React from "react";
import "./About.css";
import me from "../../assets/me.jpg";

function About() {
  return (
    <div className="container container-fluid cardbox block-one" style={{marginTop:"100px"}}>
      <div className="row">
        <div className="col-sm-12 col-md-8">
          <h1>A little about me...</h1>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-12">
          <img src={me} alt="Brandon Craig" className="img-fluid float-left mr-5 mb-2" title="Ugh...I need a better picture."></img>
          <p>My name is Brandon Craig and I've just started my career as a web developer. Web design has always interested me and it's something I really should have learned sooner. It's been a ton of fun learning the different ways a webpage can be displayed and all the science/magic that goes into making it look interesting and responsive. I'm a hard and dedicated worker that loves to code and learn new things. </p>
          <br />
          <p>I attended an extension through UC San Diego and earned my certificate in web design after a three month bootcamp. Prior to attending
            coding bootcamp I had no prior experience with coding. I was able to pick things up pretty quickly, and over three months I learned many skills involving:
          </p>
          <table>
            <tr>
              <td>-HTML5</td>
              <td>-CSS</td>
              <td>-Javascript</td>
            </tr>
            <tr>
              <td>-React</td>
              <td>
                <div id="spinTest">
                  <div id="spinOne"></div>
                  <div id="spinTwo"></div>
                </div>
              </td>
              <td>-Bootstrap</td>
            </tr>
            <tr>
              <td>-MySQL</td>
              <td>-MongoDB</td>
              <td>-Git</td>
            </tr>
          </table>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-sm-12 col-md-12">
          <p>I'm trained in full stack but I prefer working with the front-end. In my free time I love to play games, listen to music, watch movies, and read about science and physics. I also have a passion for storytelling, character and world-building, and even designing and creating my own games. Mostly table-top stuff, but it still counts!</p>
          <p>
            Click{" "}
            <a href="https://drive.google.com/file/d/1difBDVvDQHclO7V9Tz_St6KBEG83npG2/view?usp=sharing" rel="noreferrer" target="_blank">
              here
            </a>{" "}
            to view my resume. And check out the projects I've worked on by clicking "My Portfolio" on the navbar.
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      {/* Maybe add some more fun facts here?  Maybe do it in another container to have space*/}
    </div>
  );
}

export default About;
