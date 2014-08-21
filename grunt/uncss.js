module.exports = {
    dist: {
        src: ['index.html'], //where is our main file that has the css <link> in it
        dest: 'path-to-destination-folder/tidy.css', //where do we want to output this file
        options: {
            report: 'min' // optional: include to report savings
        }
    }
     
};