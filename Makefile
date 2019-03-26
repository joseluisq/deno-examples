factorial:
	-deno examples/factorial.ts
.PHONY: factorial

server:
	-deno --allow-net examples/server.ts
.PHONY: server

tests:
	-deno tests/*.spec.ts
.PHONY: tests
