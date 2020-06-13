//Constantes para el automatizador de tareas
const gulp = require("gulp")
const pug = require('gulp-pug')
const plumber = require("gulp-plumber")

const browserSync = require('browser-sync')

const server = browserSync.create()

gulp.task('pug', () => { //permite compilar automaticamente los archivos pug
  return gulp.src('./dev/pages/*.pug') //carpeta de origen
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./public/')) //carpeta de destino
})

gulp.task('default', () => {
  server.init({
    server: './public'
  })

  //PUG
  gulp.watch('./dev/**/*.pug', gulp.series('pug')).on('change', server.reload) //todos los cambios reazliados en los archivos pug seran mostrados en el servidor
})