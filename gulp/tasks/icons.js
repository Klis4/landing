import { app } from "../../gulpfile.js";

import imagemin from "gulp-imagemin";

export const icons = () => {
  return app.gulp
    .src(app.path.frontend.icons)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "ICONS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(app.plugins.newer(app.path.build.icons))
    .pipe(
      app.plugins.if(
        app.isBuild,
        imagemin({
          progressive: true,
          svgoPlugins: [{ removeViewBox: false }],
          interlaced: true,
          optimizationLevel: 3,
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.icons))

    .pipe(app.plugins.browserSync.stream());
};
