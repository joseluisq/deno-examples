run:
	-deno main.ts
.PHONY: run

test:
	-deno test/calculator.spec.ts
.PHONY: test
