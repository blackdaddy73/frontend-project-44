# Makefile

start: #запуск проекта

	npm install ci

startgame: #запускает игру

	node bin/brain-games.js
	node bin/brain-even.js

other: #прочие команды
	npm publish --dry-run
	make lint
