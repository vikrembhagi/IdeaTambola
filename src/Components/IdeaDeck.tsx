import { IdeaCard } from "./IdeaCard";

export function IdeaDeck(props: {
  ideaList: {
    content: {
      user: string;
      wants: string;
      purpose: string;
      description: string;
      author: string;
    };
  }[];
}) {


  const IdeaDeckStyle = {
    display: "flex",
    flexDirection: "row" as "row",
    alignItems: "space-between",
    flexWrap: "wrap" as "wrap",
    height: "100%",
    width: "100%"
  };
  return (

    <div style={IdeaDeckStyle}>
      {Object.keys(props.ideaList).map((key, index) => {
        let animFactor = index
        if (animFactor > 3) {
          animFactor = 2
        }
        return (
          <IdeaCard
            content={Object.values(props.ideaList)[index].content}
            stack={false}
            animationFactor={animFactor}
          />
        );
      })}
    </div>
  );
}

IdeaDeck.defaultProps = {
  ideaList: [
    {
      content: {
        user: "an active adult",
        wants: "to compare my previous run/biking times ",
        purpose: "track my improvement",
        author: "Mister Pixel",
        description:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias"
      }
    },
    {
      content: {
        user: "A single 30 year old duck",
        wants: "to meet hot ducks in the neihborhood ",
        purpose: "so he can take them out to eat bread",
        author: "Go ducks",
        description:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias"
      }
    }
  ]
};
