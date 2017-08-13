const { readFileSync, writeFileSync } = require('fs');

const currentPackage = JSON.parse(readFileSync('package.json'));
const JSONLSPackage = JSON.parse(readFileSync('vscode-json-languageserver/package.json'));

writeFileSync('dist/package.json', JSON.stringify(Object.assign(JSONLSPackage, currentPackage, { scripts: {} }), null, 2));
