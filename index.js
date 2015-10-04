var loadConfig = require('json-config-loader'),
	path = require('path');

module.exports = function(dir) {
	return loadConfig({
		namespace: 'musicmap',
		configDirectories: [
			path.join(dir, 'config'),
			'/etc',
			'/usr/local/etc'
		]
	});
};
