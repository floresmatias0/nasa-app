import React from "react";
import mercurio from "../../assets/images/mercurio.png";
import venus from "../../assets/images/venus.png";
import tierra from "../../assets/images/tierra.png";
import marte from "../../assets/images/marte.png";
import jupiter from "../../assets/images/jupiter.png";
import saturno from "../../assets/images/saturno.png";
import urano from "../../assets/images/urano.webp";
import neptuno from "../../assets/images/neptuno.png";
import copernico from "../../assets/images/copernico.jpg";
import AndyWeir from "../../assets/images/AndyWheir.jpg";
import carlSagan from "../../assets/images/carlSagan.jpeg";
import romanos from "../../assets/images/romanos.jpg";
import galileo from "../../assets/images/galileo.jpg";
import robert from "../../assets/images/robertHooke.jpg";
import stephen from "../../assets/images/StephenHawking.jpg";
import johannes from "../../assets/images/johannes.jpg";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import Swal from "sweetalert2";

const About = () => {

  let linkedin =
  "https://res.cloudinary.com/djnhaprmj/image/upload/v1631657531/linkedin_nj0q7q.png";
  let instagram =
    "https://res.cloudinary.com/djnhaprmj/image/upload/v1631658056/instagram_k33rwq.png";
  let facebook =
    "https://res.cloudinary.com/djnhaprmj/image/upload/v1631659057/facebook_wpoox9.png";
  let cv =
    "https://res.cloudinary.com/djnhaprmj/image/upload/v1631661310/curriculum_wgpy4g.png";

  let titleCopernico = "Nicolás Copérnico (1473 - 1543)";
  let phraseEarth =
    "The apparent retrograde and direct movement of the planets does not arise from their movement, but from the Earth";

  let titleAndy = "Andrew Taylor Weir (1972)";
  let phraseMars =
    "The famous red color of the planet is due to the layer of iron oxide that covers everything. Therefore, it is not simply a desert: it is a desert so old that it is literally rusty";

  let titleCarl = "Carl Edward Sagan (1934 - 1996)";
  let phraseCarl =
    "If we are alone in the Universe, it is a terrible waste of space";

  let phraseRome =
    "For the Romans, Venus (Aphrodite for the Greeks, and Ishtar for the Babylonians) was the goddess of love and beauty. The planet was probably named this way because it is the brightest of the planets known since ancient times.";

  let titleGalileo = "Galileo Galilei (1564 - 1642)";
  let phraseGalileo =
    "In 1610, the Italian astronomer Galileo Galilei observed it for the first time through a telescope and to his surprise, he discovered two objects flanking the planet. He drew them as separate spheres and described Saturn as an object made up of three bodies";

  let titleJupiter = "Robert Hooke (1635 - 1703)";
  let phraseJupiter =
    "The Great Red Spot, as astronomers call it, is the largest anticyclonic vortex on the planet and one of the phenomena that most fascinate scientists. It was discovered in the 17th century by Robert Hooke and continues to spin non-stop on itself like a great giant tornado. In fact, endless hurricanes on Jupiter's surface can be the size of Earth";

  let titleStephen = "Stephen Hawking (1942 - 2018)";
  let phraseStephen = `Einstein was wrong when he said that "God does not play dice with the universe." Considering the black hole hypotheses, God doesn't just play dice with the universe: sometimes he throws them where we can't see them`;

  let titleJohannes = "Johannes Kepler (1571 - 1630)";
  let phraseJohannes =
    "My intention in this is to show that the celestial machine can be compared not to a divine organism but rather to a clockwork gear ... Since almost all the multiple movements are executed by means of a single very simple magnetic force, as is the case of a watch in which all movements are produced by a simple weight";

  const phrases = (image, phrase, title, width, height) => {
    Swal.fire({
      customClass: {
        container: "container_custom",
        popup: "popup_custom",
        title: "title_custom",
        image: "image_custom",
        htmlContainer: "html_custom",
        actions: "actions_custom",
        confirmButton: "confirm_custom",
      },
      title: `${title}`,
      text: `${phrase}`,
      imageUrl: `${image}`,
      imageWidth: `${width}`,
      imageHeight: `${height}`,
      imageAlt: "Custom image",
      confirmButtonText: "Close",
    });
  };

  return (
    <div className="container_about">
      <h1>About</h1>
      <div className="container_planets">
        <Tippy content={<p className="info_rover">Click me</p>}>
          <img
            id="mercurio"
            src={mercurio}
            alt="mercurio"
            onClick={() => phrases(carlSagan, phraseCarl, titleCarl, 125, 150)}
            className="floating"
          />
        </Tippy>
        <Tippy content={<p className="info_rover">Click me</p>}>
          <img
            id="venus"
            src={venus}
            alt="venus"
            onClick={() => phrases(romanos, phraseRome, "Rome", 150, 150)}
            className="floatingV2"
          />
        </Tippy>
        <Tippy content={<p className="info_rover">Click me</p>}>
          <img
            id="tierra"
            src={tierra}
            alt="tierra"
            onClick={() =>
              phrases(copernico, phraseEarth, titleCopernico, 150, 150)
            }
            className="floating"
          />
        </Tippy>
        <Tippy content={<p className="info_rover">Click me</p>}>
          <img
            id="marte"
            src={marte}
            alt="marte"
            onClick={() => phrases(AndyWeir, phraseMars, titleAndy, 150, 150)}
            className="floatingV2"
          />
        </Tippy>
        <Tippy content={<p className="info_rover">Click me</p>}>
          <img
            id="jupiter"
            src={jupiter}
            alt="jupiter"
            onClick={() =>
              phrases(robert, phraseJupiter, titleJupiter, 125, 150)
            }
            className="floating"
          />
        </Tippy>
        <Tippy content={<p className="info_rover">Click me</p>}>
          <img
            id="saturno"
            src={saturno}
            alt="saturno"
            onClick={() =>
              phrases(galileo, phraseGalileo, titleGalileo, 125, 150)
            }
            className="floatingV2"
          />
        </Tippy>
        <Tippy content={<p className="info_rover">Click me</p>}>
          <img
            id="urano"
            src={urano}
            alt="urano"
            onClick={() =>
              phrases(stephen, phraseStephen, titleStephen, 100, 150)
            }
            className="floating"
          />
        </Tippy>
        <Tippy content={<p className="info_rover">Click me</p>}>
          <img
            id="neptuno"
            src={neptuno}
            alt="neptuno"
            onClick={() =>
              phrases(johannes, phraseJohannes, titleJohannes, 150, 150)
            }
            className="floatingV2"
          />
        </Tippy>
      </div>
      <p>
        This page was created by Matias Flores, it is a simple project in which
        the photos that were taken by the robot they had on Mars using the NASA
        API are shown: <a href="https://api.nasa.gov/">https://api.nasa.gov/</a>
        , they can be filtered by date, by date sun also by camera, it also has
        the functionality of adding some photos to a favorites section as well
        as deleting them from that place, the styles inspired me by the official
        NASA website although a little modernized I hope you like it, enjoy
        doing it a lot
      </p>
      <div className="container_social_networks">
        <h2 style={{ marginTop: "1em" }}>Social Networks</h2>
        <div className="container_images">
          <img
            onClick={() => {
              window.open("https://www.linkedin.com/in/matias-leandro-flores/");
            }}
            src={linkedin}
            alt="linkedin"
          />
          <img
            onClick={() => {
              window.open("https://www.instagram.com/matiasleandro._/?hl=es");
            }}
            src={instagram}
            alt="instagram"
          />
          <img
            onClick={() => {
              window.open("https://www.facebook.com/MatiasLeandroFlores/");
            }}
            src={facebook}
            alt="facebook"
          />
          <img
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1OLPW-9ng1Do1PmZKkOzLvBXi1ZD_XnjQ/view?usp=sharing"
              );
            }}
            src={cv}
            alt="cv"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
