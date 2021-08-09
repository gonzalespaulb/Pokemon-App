import black2 from "../assets/indices/black-2.png";
import black from "../assets/indices/black.jpeg";
import blue from "../assets/indices/blue.jpeg";
import crystal from "../assets/indices/crystal.png";
import diamond from "../assets/indices/diamond.jpeg";
import emerald from "../assets/indices/emerald.jpeg";
import firered from "../assets/indices/firered.jpg";
import gold from "../assets/indices/gold.png";
import heartgold from "../assets/indices/heartgold.jpeg";
import leafgreen from "../assets/indices/leafgreen.jpg";
import pearl from "../assets/indices/pearl.jpeg";
import platinum from "../assets/indices/platinum.jpg";
import red from "../assets/indices/red.jpg";
import ruby from "../assets/indices/ruby.jpeg";
import sapphire from "../assets/indices/sapphire.jpeg";
import silver from "../assets/indices/silver.png";
import soulsilver from "../assets/indices/soulsilver.jpeg";
import white2 from "../assets/indices/white-2.jpeg";
import white from "../assets/indices/white.jpeg";
import yellow from "../assets/indices/yellow.png";

export const gameIndices = (game) => {
  switch (game) {
    case "black-2":
      return {title: `Black 2`, url: black2};
    case "black":
      return {title: `Black`, url: black};
    case "blue":
      return {title: `Blue`, url: blue};
    case "crystal":
      return {title: `Crystal`, url: crystal};
    case "diamond":
      return {title: `Diamond`, url: diamond};
    case "emerald":
      return {title: `Emerald`, url: emerald};
    case "firered":
      return {title: `Fire Red`, url: firered};
    case "gold":
      return {title: `Gold`, url: gold};
    case "heartgold":
      return {title: `Heart Gold`, url: heartgold};
    case "leafgreen":
      return {title: `Leaf Green`, url: leafgreen};
    case "pearl":
      return {title: `Pearl`, url: pearl};
    case "platinum":
      return {title: `Platinum`, url: platinum};
    case "red":
      return {title: `Red`, url: red};
    case "ruby":
      return {title: `Ruby`, url: ruby};
    case "sapphire":
      return {title: `Sapphire`, url: sapphire};
    case "silver":
      return {title: `Silver`, url: silver};
    case "soulsilver":
      return {title: `Soul Silver`, url: soulsilver};
    case "white-2":
      return {title: `White 2`, url: white2};
    case "white":
      return {title: `White`, url: white};
    case "yellow":
      return {title: `Yellow`, url: yellow};
    default:
      break;
  }
};
