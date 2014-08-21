concurrent-grunt
================

Setup for Grunt using a simplified approach to the long grunt.js file. Uses concurrent tasks

This is a basic setup to use the following grunt tasks:
  1. LiveReload thru Watch
  2. Concurrent
  3. Concat
  4. Uglify
  5. cssmin
  6. imagemin
  

Uses an alias.yaml file to start the grunt task process.

In the alias.yaml file we tell it which .js files to start which, in this case watch.js. Watch.js then tells which files to watch for changes, do a livereload on them, and then run a task of 'concurrent'. 

Concurrent.js is then loaded, which is then able to run other grunt task simultaneous and in order.
