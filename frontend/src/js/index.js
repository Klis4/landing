import Swiper from "swiper";
import { Autoplay } from "swiper/modules";

import { isWebp } from "./modules/functions.js";
import { checkRequestModalInit, imageModalInit } from "./modules/modals.js";

import "swiper/css";

isWebp();

const howItWorksSwiper = new Swiper("#how-it-works-swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true,
  },
  modules: [Autoplay],
});

imageModalInit();
checkRequestModalInit();
