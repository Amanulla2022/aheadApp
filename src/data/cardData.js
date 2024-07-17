import blush from "../images/emojis/blush.png";
import angry from "../images/emojis/rage.png";
import raise from "../images/emojis/face_with_raised_eyebrow.png";
import flushed from "../images/emojis/flushed.png";
import smirk from "../images/emojis/smirk.png";

const cardData = [
  {
    id: 1,
    bgColor: "bg-purple-200",
    emoji: angry,
    title: "You argue with a colleague",
    description:
      "You get angry and defensive, instead of staying open and working towards common ground.",
  },
  {
    id: 2,
    bgColor: "bg-blue-300",
    emoji: flushed,
    title: "You get a promotion at work",
    description:
      "You question yourself and wonder if you're an unqualified imposter instead of trusting yourself & your abilities.",
  },
  {
    id: 3,
    bgColor: "bg-yellow-200",
    emoji: raise,
    title: "You attend a class reunion",
    description:
      "You compare yourself with your peers and judge yourself instead of being more independent of others.",
  },
  {
    id: 4,
    bgColor: "bg-violet-600",
    title: "You are at a lively dinner party",
    emoji: blush,
    description:
      "You play on your phone instead of confidently approaching strangers and striking up a chat.",
  },
  {
    id: 5,
    bgColor: "bg-blue-100",
    title: "You hit a dead end in a negotiation",
    emoji: smirk,
    description:
      "You get frazzled, nervous, and frustrated instead of staying optimistic and solution-oriented.",
  },
];

export default cardData;
