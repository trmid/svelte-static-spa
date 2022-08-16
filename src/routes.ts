import AboutSvelte from "./routes/About.svelte";
import HomeSvelte from "./routes/Home.svelte";
import NotFoundSvelte from "./routes/NotFound.svelte";

export const routes = {
  "/": HomeSvelte,
  "/about": AboutSvelte,
  "*": NotFoundSvelte
};