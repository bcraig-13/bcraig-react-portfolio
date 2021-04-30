import React from "react";
import Project from "../../Components/Project/Project";
import "./Portfolio.css";
import movieTaste from "../../assets/movieTaste.PNG";
import pokeBase from "../../assets/pokeBase.PNG";
import dtTrib from "../../assets/dtTrib.PNG";
import empDir from "../../assets/empDir.PNG";
import readmeGen from "../../assets/readmeGen.png";
import lyrArt from "../../assets/lyrArt.PNG";
// import myApps from "./projects.js";

function Portfolio() {
  const myApps = [
    {
      id: 1,
      image: lyrArt,
      title: "Lyrical Artistry",
      description: "For our final project, my team and I developed an app where users can upload an image of their choice, (preferably an album cover) and draw or add text to an image, then save that image to a database so the user can view their creations in a gallery. We implented Amazon's S3 storage to save the images to our database.",
      github: "https://github.com/bcraig-13/lyrical-artistry",
      deployed: "https://lyrical-artistry.herokuapp.com/",
    },
    {
      id: 2,
      image: movieTaste,
      title: "MovieTaste",
      description: "Search for movies and memes to kill some time. This app was my first group project and I wrote the Javascript and API requests.",
      github: "https://github.com/Claudialhc/MovieTaste",
      deployed: "https://claudialhc.github.io/MovieTaste/",
    },
    {
      id: 3,
      image: pokeBase,
      title: "Pokebase",
      description: "Add pokemon that you've caught from each game to your own personal database. This app was my second group project and I handled front-end Javascript, API requests, and routing.",
      github: "https://github.com/bcraig-13/poke-base",
      deployed: "https://poke-base-app.herokuapp.com/",
    },
    {
      id: 4,
      image: dtTrib,
      title: "Dream Theater Tribute Page",
      description: "A tribute page I made for my favorite band. I put this together in a few days over my winter break. I'm really proud of the collapsibles in the album section.",
      github: "https://github.com/bcraig-13/dream-theater-tribute",
      deployed: "https://bcraig-13.github.io/dream-theater-tribute/",
    },
    {
      id: 5,
      image: empDir,
      title: "Employee Directory",
      description: "My first major assignment using React. This app displays a list of random employees using an API and will actively filter the results as you type.",
      github: "https://github.com/bcraig-13/employee-directory",
      deployed: "https://bcraig-13.github.io/employee-directory/",
    },
    {
      id: 6,
      image: readmeGen,
      title: "README Generator",
      description: "This app allows a user to generate a README using Node.js. I don't have a way to show it off just yet since the app is used through node, but I'll have the 'Deployed App' button take you to a YouTube video showing the app in action in the near future.",
      github: "https://github.com/bcraig-13/node-readme-generator",
      deployed: "",
    },
  ];

  return (
    <div className="container-fluid portfolio-bg" style={{ marginTop: "50px" }}>
      <div className="row mx-auto">
        {myApps.map((projects, idx) => (
          <Project key={idx} id={projects.id} image={projects.image} title={projects.title} description={projects.description} github={projects.github} deployed={projects.deployed} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
