module.exports = {
    src: {
        files: [
            //what are the files that we want to watch
            'paht-to-javascript-folder/*.js',
            'path-to-less-folder/*.less',
            '*.html'
            
        ],
        options: {
            nospawn: true,
            livereload: true,
        },
        //lets run some tasks
        //livereload will always happen after the tasks are ran
        tasks: ['concurrent']
        
    }
     
};