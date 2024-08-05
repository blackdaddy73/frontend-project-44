# Makefile

start: #запуск проекта

	npm install ci

startgame: #запуск игр

	node bin/brain-games.js
	node bin/brain-even.js
	node bin/brain-calc.js
	node bin/brain-gcd.js
	node bin/brain-progression.js
	node bin/brain-prime.js

other: #прочие команды
	npm publish --dry-run
	make lint
