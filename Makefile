install:
		npm ci

brain-games:
		node bin/brain-games.js

publish:
		nom publish --dry-run