// Artists.js
import React, { useState } from "react";
import Img1 from "../Assets/01.png";
import Img2 from "../Assets/02.jpg";
import Img3 from "../Assets/03.jpg";

const Artists = () => {
  const [active, setActive] = useState(0);
  const artists = [
    {
      name: "Spider-Man Suit 1",
      description: "The Spider-Man Suit is a specialized suit used by Peter Parker to protect his identity as Spider-Man. It originally consisted of a red hoodie with a spider symbol, blue garments and a mask with goggles.",
      backgroundUrl: Img1,
    },
    {
      name: "Spider-Man Suit 2",
      description: "The latest MCU film Spider-Man: No Way Home introduces the Black & Gold and Integrated suits. With so many costumes part of Spider-Man's journey in the Marvel Cinematic Universe, each one brings a unique feel and look to Spider-Man. Here are all of Tom Holland's Spider-Man suits, ranked.",
      backgroundUrl: Img2,
    },
    {
      name: "Spider-Man Suit 3",
      description: "Before Peter Parker meets Tony Stark, he wears a homemade costume he designed himself. The homemade suit revealed in Captain America: Civil War and used in Spider-Man: Homecoming is a goofy-looking low-budget design that reflects Spider-Man's humble origins. With that being said, the suit is very well-made considering the fact that a young high-schooler quickly designs the suit on a budget.",
      backgroundUrl: Img3,
    },
  ];

  return (
    <ul>
      {artists.map((artist, i) => (
        <li
          key={i}
          style={{ backgroundImage: `url(${artist.backgroundUrl})` }}
          role="button"
          className={active === i ? "active" : ""}
          onClick={() => setActive(i)}
        >
          <h3>{artist.name}</h3>
          <div className="section-content">
            <div className="inner">
              <div className="bio">
                <h2>{artist.name}</h2>
                <p>{artist.description}</p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default Artists;
