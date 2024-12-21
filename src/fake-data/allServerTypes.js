import goLiveIcon from "/go-live.png";
import stagingEnvironmentIcon from "/staging-environment.png";

export const allServerTypes = [
  {
    id: 1,
    type: "Go Live",
    info: "Get your site up and running for the world to see by simply pointing your domain to the server.",
    icon: goLiveIcon,
  },
  {
    id: 2,
    type: "Staging Environment",
    info: "Create your site in a staging environment and refine it until it's ready for launch.",
    icon: stagingEnvironmentIcon,
  },
];
