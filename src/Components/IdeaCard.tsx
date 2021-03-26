//@ts-check

import { motion } from "framer-motion";

function random_rgb_value() {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return o(r() * s);
}

export function IdeaCard(props: {
    stack: boolean;
    animate: boolean;
    animationFactor: number;
    content: {
      user: string;
      wants: string;
      purpose: string;
      description: string;
      author: string;
    };
  }) {
  const randomRedVal = random_rgb_value();
  const randomBlueVal = random_rgb_value();
  const randomGreenVal = random_rgb_value();

  const CardContainer = {
    margin: "0 auto"
  };

  const CardStyle = {
    width: "280px",
    height: "280px",
    display: "flex",
    flexDirection: "column" as "column",
    borderRadius: "5px",
    border: "2px black solid",
    position: "relative" as "relative",
    marginTop: "32px",
    boxShadow: props.stack ? "8px 8px 8px black" : "none"
  };

  const CardTop = {
    backgroundColor:
      "rgba(" +
      randomRedVal +
      "," +
      randomBlueVal +
      "," +
      randomGreenVal +
      "," +
      "0.8" +
      ")",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "space-evenly",
    textAlign: "center" as "center"
  };

  const CardIdeaContent = {
    fontSize: "16px",
    color: "black",
    fontWeight: 600,
    padding: "8px"
  };

  const CardDescription = {
    fontSize: "12px",
    height: "50px",
    overflow: "hidden",
    padding: "8px"
  };

  const HighlightedContent = {
    fontSize: "16px",
    fontWeight: 400,
    textDecoration: "underline"
  };

  const CardBottom = {
    backgroundColor:
      "rgba(" +
      randomRedVal +
      "," +
      randomBlueVal +
      "," +
      randomGreenVal +
      "," +
      "0.4" +
      ")",
    height: "80px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    borderTop: "1px black solid"
  };

  const UserPhoto = {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    backgroundImage: "url(" + "https://source.unsplash.com/random/32x32" + ")",
    marginLeft: "8px",
    marginRight: "8px"
  };

  return (
    <div style={CardContainer}>
      <motion.div
        style={CardStyle}
        initial={props.animate ? { opacity: 0.1, top: -40 } : { top: 0 }}
        animate={props.animate ? { opacity: 1, top: 0 } : { opacity: 1 }}
        transition={{
          duration: props.animationFactor,
          type: "spring"
        }}
      >
        <div style={CardTop}>
          <div style={CardIdeaContent}>
            As <span style={HighlightedContent}>{props.content.user}</span> I
            want <span style={HighlightedContent}>{props.content.wants}</span>{" "}
            so that I can{" "}
            <span style={HighlightedContent}>{props.content.purpose}</span>{" "}
          </div>
          <div style={CardDescription}>{props.content.description} </div>
        </div>

        <div style={CardBottom}>
          By <div style={UserPhoto} /> {props.content.author}
        </div>
      </motion.div>
    </div>
  );
}

IdeaCard.defaultProps = {
  content: {
    user: "an active adult",
    wants: "to compare my previous run/biking times ",
    purpose: "track my improvement",
    author: "Mister Pixel",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias"
  },
  animate: true,
  stack: false,
  animationFactor:1
};
