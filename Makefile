# Makefile

start: #запуск проекта

	npm install ci

startgame: #запускает игру

	node bin/brain-games.js
	node bin/games/brain-even.js
	node bin/games/brain-calc.js
	node bin/games/brain-gcd.js
	node bin/games/brain-progression.js
	node bin/games/brain-prime.js

other: #прочие команды
	npm publish --dry-run
	make lint
