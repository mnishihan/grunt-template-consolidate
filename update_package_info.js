var fs = require('fs');

var json = JSON.parse(fs.readFileSync('package.json'));
json.readme = fs.readFileSync('README.md', 'utf8');

fs.writeFileSync('package.json', JSON.stringify(json, null, "\t"));