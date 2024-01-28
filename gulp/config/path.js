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
    images: `${buildSrcFolder}/assets/img/`,
  },
  frontend: {
    html: `${frontendFolder}/*.html`,
    scss: `${frontendSrcFolder}/scss/*.scss`,
    js: `${frontendSrcFolder}/js/index.js`,
    images: `${frontendSrcFolder}/assets/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${frontendSrcFolder}/assets/img/**/*.svg`,
  },
  watch: {
    html: `${frontendFolder}/*.html`,
    scss: `${frontendSrcFolder}/scss/**/*.scss`,
    js: `${frontendSrcFolder}/js/**/*.js`,
    images: `${frontendSrcFolder}/assets/img/**/*.{jpg,jpeg,png,gif,ico,webp,svg}`,
  },
  clean: buildFolder,
  frontendFolder: frontendFolder,
  rootFolder: rootFolder,
};
