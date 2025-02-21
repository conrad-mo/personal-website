<script lang="ts">
	const { name, image, viewbox } = $props();
</script>

<main>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox={viewbox} fill="currentColor" aria-label={name}>
		{@html image}
	</svg>
</main>

<style>
	main {
		padding-left: 4rem;
		padding-right: 4rem;
		padding-top: 3rem;
		padding-bottom: 3rem;
		border-radius: 0.5rem;
		background-color: var(--exp-background);
		display: flex;
		justify-content: center;
		width: 21rem;
	}
	svg {
		max-height: 200px;
		max-width: 200px;
		height: auto;
		width: 40%;
	}
	svg {
		fill: rgb(16, 15, 15);
	}

	:root {
		--exp-background: rgb(242, 240, 229);
	}
	@media (prefers-color-scheme: dark) {
		:root {
			--exp-background: rgb(28, 27, 26);
		}
		svg {
			fill: rgb(206, 205, 195);
		}
	}
</style>
