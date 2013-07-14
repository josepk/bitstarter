#!/usr/bin/env node
/*
Automatically grade files for the presence of specified HTML tags/attributes.
Uses commander.js and cheerio. Teaches command line application development
and basic DOM parsing.

References:

 + cheerio
   - https://github.com/MatthewMueller/cheerio
   - http://encosia.com/cheerio-faster-windows-friendly-alternative-jsdom/
   - http://maxogden.com/scraping-with-node.html

 + commander.js
   - https://github.com/visionmedia/commander.js
   - http://tjholowaychuk.com/post/9103188408/commander-js-nodejs-command-line-interfaces-made-easy

 + JSON
   - http://en.wikipedia.org/wiki/JSON
   - https://developer.mozilla.org/en-US/docs/JSON
   - https://developer.mozilla.org/en-US/docs/JSON#JSON_in_Firefox_2
*/

var fs = require('fs');
var program = require('commander');
var cheerio = require('cheerio');
<<<<<<< HEAD
var rest = require('restler');
=======

>>>>>>> 4e38ffe2b4c59c9d09505d7dbc6cb966719f6575
var HTMLFILE_DEFAULT = "index.html";
var CHECKSFILE_DEFAULT = "checks.json";

var assertFileExists = function(infile) {
    var instr = infile.toString();
    if(!fs.existsSync(instr)) {
        console.log("%s does not exist. Exiting.", instr);
        process.exit(1); // http://nodejs.org/api/process.html#process_process_exit_code
    }
    return instr;
};

var cheerioHtmlFile = function(htmlfile) {
    return cheerio.load(fs.readFileSync(htmlfile));
};

var loadChecks = function(checksfile) {
    return JSON.parse(fs.readFileSync(checksfile));
};

var checkHtmlFile = function(htmlfile, checksfile) {
    $ = cheerioHtmlFile(htmlfile);
    var checks = loadChecks(checksfile).sort();
    var out = {};
    for(var ii in checks) {
        var present = $(checks[ii]).length > 0;
        out[checks[ii]] = present;
    }
    return out;
};

var clone = function(fn) {
    // Workaround for commander.js issue.
    // http://stackoverflow.com/a/6772648
    return fn.bind({});
};


<<<<<<< HEAD
function doJob (result) {
	//console.log('entrant doJob');
		if (result instanceof Error) {
		//	console.log('entrant error');
			sys.puts('Error: ' + result.message);
			this.retry(5000); 
		} else {
		//	console.log('url llegida');
		//	console.log('url llegida');
			fs.writeFileSync('tmp_index.tmp', result);
			program.file = 'tmp_index.tmp';
			var checkJson = checkHtmlFile(program.file, program.checks);
			var outJson = JSON.stringify(checkJson, null, 4);
		 	console.log(outJson);
	   		//sys.puts(result);
	 	}
	//console.log('sortint doJob');
}
=======

>>>>>>> 4e38ffe2b4c59c9d09505d7dbc6cb966719f6575

if(require.main == module) {
    program
        .option('-c, --checks <check_file>', 'Path to checks.json', clone(assertFileExists), CHECKSFILE_DEFAULT)
        .option('-f, --file <html_file>', 'Path to index.html', clone(assertFileExists), HTMLFILE_DEFAULT)
<<<<<<< HEAD
        .option('-u, --url [value]','Path to checks.json')
	.parse(process.argv);
	var checkJson =null;

    if (program.url !== null){
    	rest.get(program.url).on('complete', doJob);
	
    } else { 
    	var checkJson = checkHtmlFile(program.file, program.checks);
    	var outJson = JSON.stringify(checkJson, null, 4);
    	console.log(outJson);
    }
=======

>>>>>>> 4e38ffe2b4c59c9d09505d7dbc6cb966719f6575
} else {
    exports.checkHtmlFile = checkHtmlFile;
}

