all: index.js
	node index.js

test: index.js
	node index.js | diff index.js -
