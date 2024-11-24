<script>
	let { children } = $props();
</script>

{@render children()}

<style>
	@font-face {
		font-family: Inter;
		font-style: normal;
		font-weight: 100 900;
		font-display: swap;
		src: url('$lib/assets/fonts/InterVariable.woff2') format('woff2');
	}
	:global(html, body) {
		font-family: 'Inter', sans-serif;
		color: var(--foreground);
		background: var(--background);
		height: 100%;
	}
	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	:global(h2) {
		color: var(--tx-2);
	}
	:global(h3) {
		color: var(--tx-3);
	}
	:root {
		--background: rgb(255, 252, 240);
		--foreground: rgb(16, 15, 15);
		--tx-2: rgb(111, 110, 105);
		--tx-3: rgb(183, 181, 172);
		--cursor-width: 5px;
		--cursor-color: rgb(16, 15, 15);
	}
	@media (prefers-color-scheme: dark) {
		:root {
			--background: rgb(16, 15, 15);
			--foreground: rgb(206, 205, 195);
			--tx-2: rgb(135, 133, 128);
			--tx-3: rgb(87, 86, 83);
			--cursor-width: 5px;
			--cursor-color: rgb(206, 205, 195);
		}
	}
</style>
