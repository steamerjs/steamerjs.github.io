'use strict';

var fs = require('fs'),
	path = require('path'),
	request = require('request'),
	mapLimit = require('async/mapLimit'),
	parallel = require('async/parallel');
	
var startkits = [
	'React',
	'Vue',
	'Simple',
	'React-Component',
	'Vue-Component',
	'Simple-Component',
	'Example'
];

var title = {
	'Example' : '脚手架开发',
};

function getStarterKits() {
	mapLimit(
		startkits,
		4,
		function(pkg, cb) {
			let pkgName = pkg.toLowerCase(),
				url = [`https://raw.githubusercontent.com/steamerjs/steamer-${pkgName}`, 'master', 'README.md'].join('/');

			// console.log(url);

			request(url, function(err, response, body) {

				if (err) {
					return cb(err);
				}

				if (body && title[pkg]) {
					// console.log(body);
					body = `---\ntitle: ${title[pkg]}\n---\n` + body;
				}

				fs.writeFileSync(path.resolve(`docs/starterkits/Steamer-${pkg}.md`), body, 'utf-8');

				cb();
	      	});
		}
	);
}

getStarterKits();