import arcjet, { shield, detectBot, tokenBucket } from "@arcjet/node";
import { ARJECT_KEY } from "./env.js";

const aj = arcjet({
  key: ARJECT_KEY,
  // characteristics: ["ip.src"],
  rules: [
    shield({ mode: "LIVE" }), //sql injection
    detectBot({
      mode: "LIVE",
      // Block all bots except the following
      allow: [
        "CATEGORY:SEARCH_ENGINE",
        "CATEGORY:PREVIEW",
        "POSTMAN"
      ],
    }),
    tokenBucket({
      mode: "LIVE",
      refillRate: 5,
      interval: 10,
      capacity: 10,
    }),
  ],
});

export default aj;