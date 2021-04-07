import React, { useState } from "react";
import { IdeaData } from "../Data/Utils";
import { IdeaCard } from "../Components/IdeaCard";
import { IdeaDeck } from "../Components/IdeaDeck";
import { CustomButton } from "../Components/CustomButton";

function randomNumberInSpecificRange(max: number) {
  const rando = (Math.random() * max) | 0;
  return rando;
}

export function IdeaDisplay(props: { ideaData: any; }) {
  //const props.ideaData = props.ideaData
  const [galleryView, setGalleryView] = useState(false);
  const [randomIdeaIndex, setRandomIdeaIndex] = useState(
    randomNumberInSpecificRange(Object.keys(props.ideaData).length)
  );

  //Change active view - Random || Deck
  function activeViewToggle(toggledButtonName: string) {
    if (toggledButtonName == "gallery") {
      setGalleryView(!galleryView);
    }
  }

  function newRandomIdea() {
    let newRando = randomNumberInSpecificRange(Object.keys(props.ideaData).length);
    while (newRando == randomIdeaIndex) {
      newRando = randomNumberInSpecificRange(Object.keys(props.ideaData).length);
    }
    setRandomIdeaIndex(newRando);
  }

  const ideasContainer = {
    display: "flexbox",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    marginTop: "36px"
  };

  const cardStackContainer = {
    height: "100%"
  };

  const ideaCount = {
    fontSize: 24,
    marginBottom: 16
  };

  const randomCardContainer = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column" as "column"
  };

  const buttonHeader = {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",
    alignItems: "center" as "center"
  };

  const randomTriggerText = {
    fontSize: "20px",
    color: "black",
    textDecoration: "underline",
    marginTop: "32px",
    cursor: "pointer"
  };

  function getRandomIdeaByIndex() {
    //console.log(Object.keys(props.ideaData[randomIdeaIndex]))
    const rando: any = Object.values(props.ideaData)[randomIdeaIndex]
    //return Object.values(props.ideaData)[randomIdeaIndex]
    return rando
  }

  return (
    <div style={ideasContainer}>
      <div style={buttonHeader}>
        <div style={ideaCount}>{Object.keys(props.ideaData).length} amazing ideas in database </div>
        <CustomButton
          text="Show All"
          id="gallery"
          toggleCallback={activeViewToggle}
          toggled={galleryView}
        />
      </div>
      {galleryView ? (
        ""
      ) : (
        <div style={randomCardContainer}>
          {" "}
          <div style={randomTriggerText} onClick={newRandomIdea}>
            Here's a random idea
          </div>
        </div>
      )}
      {galleryView ? (
        <div style={cardStackContainer}>
          <IdeaDeck ideaList={props.ideaData} />
        </div>
      ) : (
        <IdeaCard
          content={getRandomIdeaByIndex().content}
          animate={false}
          stack={true}
        />
      )}
    </div>
  );
}


type ideaObject = {
  content: {
    user: string;
    wants: string;
    purpose: string;
    description: string;
    author: string;
  };
};