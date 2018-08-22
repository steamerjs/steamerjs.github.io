'use strict';

var fs = require('fs'),
	path = require('path'),
	request = require('request'),
	mapLimit = require('async/mapLimit'),
	parallel = require('async/parallel');

var plugins = [
	'Ak',
	'Alloystore',
	'Example',
	'JB',
	'Kit',
	'Pro',
	'Mock',
	'Task',
];

var title = {
	'Ak' : '离线包发布 - AK',
	'Alloystore' : '组件发布 - AlloyStore',
	'Example' : '命令插件开发',
	'JB' : '项目发布 - JB',
	'Kit' : '脚手架部署与更新 - Kit',
	'Pro' : '多框架管理 - Pro',
	'Mock' : '假数据模拟 - Mock',
	'Task' : '任务执行 - Task',
};

function getPlugins() {
	mapLimit(
		plugins,
		4,
		function(pkg, cb) {
			let pkgName = pkg.toLowerCase(),
				url = [`https://raw.githubusercontent.com/steamerjs/steamer-plugin-${pkgName}`, 'master', 'README.md'].join('/');

			// console.log(url);

			request(url, function(err, response, body) {

				if (err) {
					return cb(err);
				}

				if (body && title[pkg]) {
					// console.log(body);
					body = `---\ntitle: ${title[pkg]}\n---\n` + body;
				}

				fs.writeFileSync(path.resolve(`docs/plugins/Steamer-Plugin-${pkg}.md`), body, 'utf-8');

				cb();
	      	});
		}
	);
}


getPlugins();