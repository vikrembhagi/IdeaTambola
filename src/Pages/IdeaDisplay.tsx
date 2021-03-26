import React, { useState } from "react";
import { IdeaData } from "../Data/Utils";
import { IdeaCard } from "../Components/IdeaCard";
import { IdeaDeck } from "../Components/IdeaDeck";
import { CustomButton } from "../Components/CustomButton";

function randomNumberInSpecificRange(max: number) {
  const rando = (Math.random() * max) | 0;
  return rando;
}

export function IdeaDisplay() {
  const ideaListData = IdeaData();
  const [galleryView, setGalleryView] = useState(false);
  const [randomIdeaIndex, setRandomIdeaIndex] = useState(
    randomNumberInSpecificRange(ideaListData.length)
  );

  //Change active view - Random || Deck
  function activeViewToggle(toggledButtonName: string) {
    if (toggledButtonName == "gallery") {
      setGalleryView(!galleryView);
      console.log(galleryView);
    }

    if (toggledButtonName == "randomIdea") {
      console.log(toggledButtonName);
    }
  }

  function newRandomIdea() {
    let newRando = randomNumberInSpecificRange(ideaListData.length);

    while (newRando == randomIdeaIndex) {
      newRando = randomNumberInSpecificRange(ideaListData.length);
    }
    setRandomIdeaIndex(newRando);
  }

  const appContainer = {
    display: "flexbox",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    marginTop: "36px"
  };

  const cardStackContainer = {
    height: "100%"
  };

  const appHeader = {
    display: "flex",
    fontSize: "48px",
    justifyContent: "center",
    marginBottom: "48px"
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

  return (
    <div style={appContainer}>
      <div style={appHeader}>Idea Tambola</div>
      <div style={buttonHeader}>
        <div style={ideaCount}>{ideaListData.length} amazing ideas</div>
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
            Tap for another rando
          </div>
          <IdeaCard
            content={ideaListData[randomIdeaIndex].content}
            animate={false}
            stack={true}
          />
        </div>
      )}
      {galleryView ? (
        <div style={cardStackContainer}>
          <IdeaDeck ideaList={ideaListData} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
