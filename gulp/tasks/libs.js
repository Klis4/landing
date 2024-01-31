import { app } from "../../gulpfile.js";

export const libs = () => {
  return app.gulp
    .src(app.path.frontend.libs)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "LIBS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.libs))
    .pipe(app.plugins.browserSync.stream());
};
