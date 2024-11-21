<script>
	let { children } = $props();
</script>

{@render children()}

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

	:global(html) {
		font-family: 'Inter', sans-serif;
		color: var(--foreground);
		background: var(--background);
		font-family: Arial, Helvetica, sans-serif;
	}
	:root {
		--background: rgb(255, 252, 240);
		--foreground: rgb(16, 15, 15);
		--tx-2: rgb(111, 110, 105);
		--tx-3: rgb(183, 181, 172);
	}
	@media (prefers-color-scheme: dark) {
		:root {
			--background: rgb(16, 15, 15);
			--foreground: rgb(206, 205, 195);
			--tx-2: rgb(135, 133, 128);
			--tx-3: rgb(87, 86, 83);
		}
	}
</style>
