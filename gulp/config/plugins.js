import gulpPlumber from "gulp-plumber";
import notify from "gulp-notify";
import browserSync from "browser-sync";
import rename from "gulp-rename";
import newer from "gulp-newer";
import ifPlugin from "gulp-if";

export const plugins = {
  plumber: gulpPlumber,
  notify: notify,
  browserSync: browserSync,
  rename: rename,
  newer: newer,
  if: ifPlugin,
};
