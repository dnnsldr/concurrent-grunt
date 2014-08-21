module.exports = {
    src: {
        files: [
            'assets/js/*.js',
            'assets/css/less/*.less',
            '*.html'
            
        ],
        options: {
            nospawn: true,
            livereload: true,
        },
        tasks: ['concurrent']
        
    }
     
};