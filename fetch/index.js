'use strict';

var fs = require('fs'),
	path = require('path'),
	request = require('request'),
	mapLimit = require('async/mapLimit'),
	parallel = require('async/parallel');

var pkgs = [
	'Steamerjs',
];

function getPlugins() {
	mapLimit(
		pkgs,
		4,
		function(pkg, cb) {
			let pkgName = pkg.toLowerCase(),
				url = [`https://raw.githubusercontent.com/steamerjs/${pkgName}`, 'master', 'README.md'].join('/');

			// console.log(url);

			request(url, function(err, response, body) {

				if (err) {
					return cb(err);
				}

				if (body) {
					// console.log(body);
				}

				if(pkg === 'Steamerjs') {
					pkg = 'Steamer-Core';
					body = '---\ntitle: 核心库及插件化理念\n---\n' + body;
				}

				fs.writeFileSync(path.resolve(`docs/introduction/${pkg}.md`), body, 'utf-8');

				cb();
	      	});
		}
	);
}


getPlugins();