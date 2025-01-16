import { cache } from "react";
import { getRandomArbitrary } from "../next-utils";

const bgStylesConfigs = cache(() => {
  const flagNumber = getRandomArbitrary(0.2, 0.8);
  return {
    flagNumber,
  };
});
export default bgStylesConfigs;
