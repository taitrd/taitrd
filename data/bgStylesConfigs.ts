import { cache } from "react";

const bgStylesConfigs = cache(() => {
  const flagNumber = Math.random();
  return {
    flagNumber,
  };
});
export default bgStylesConfigs;
