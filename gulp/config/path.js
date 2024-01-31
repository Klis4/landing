import * as nodePath from "path";

const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = "./dist";
const buildSrcFolder = `${buildFolder}/src`;

const frontendFolder = "./frontend";
const frontendSrcFolder = `${frontendFolder}/src`;

export const path = {
  build: {
    html: `${buildFolder}/`,
    css: `${buildSrcFolder}/css/`,
    js: `${buildSrcFolder}/js/`,
    fonts: `${buildSrcFolder}/assets/fonts/`,
    images: `${buildSrcFolder}/assets/img/`,
    icons: `${buildSrcFolder}/assets/icons/`,
    libs: `${buildSrcFolder}/libs/`,
  },
  frontend: {
    html: `${frontendFolder}/*.html`,
    scss: `${frontendSrcFolder}/scss/index.scss`,
    js: `${frontendSrcFolder}/js/index.js`,
    fonts: `${frontendSrcFolder}/assets/fonts/*.woff2`,
    images: `${frontendSrcFolder}/assets/img/*.{jpg,jpeg,png,gif,webp}`,
    icons: `${frontendSrcFolder}/assets/icons/*.{svg,ico}`,
    libs: `${frontendSrcFolder}/libs/**/*.*`,
  },
  watch: {
    html: `${frontendFolder}/*.html`,
    scss: `${frontendSrcFolder}/scss/**/*.scss`,
    js: `${frontendSrcFolder}/js/**/*.js`,
    images: `${frontendSrcFolder}/assets/img/*.{jpg,jpeg,png,gif,webp}`,
    icons: `${frontendSrcFolder}/assets/icons/*.{svg,ico}`,
  },
  clean: buildFolder,
  frontendFolder: frontendFolder,
  rootFolder: rootFolder,
};
