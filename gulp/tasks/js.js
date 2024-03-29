import { app } from "../../gulpfile.js";

import webpack from "webpack-stream";

export const js = () => {
  return app.gulp
    .src(app.path.frontend.js, { sourcemaps: app.isDev })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "JS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(
      webpack({
        mode: app.isBuild ? "production" : "development",
        output: {
          filename: "index.min.js",
        },
        module: {
          rules: [
            {
              test: /\.(sa|sc|c)ss$/,
              use: ["style-loader", "css-loader", "sass-loader"],
            },
          ],
        },
      })
    )
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browserSync.stream());
};
