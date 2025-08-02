<script lang="ts">
	const { name, image, viewbox } = $props();
</script>

<main class="experience-card">
	<svg xmlns="http://www.w3.org/2000/svg" viewBox={viewbox} fill="currentColor" aria-label={name}>
		{@html image}
	</svg>
</main>

<style>
	/* Experience Card */
	.experience-card {
		display: flex;
		justify-content: center;
		width: 21rem;
		padding: 3rem 4rem;
		border-radius: 0.5rem;
		background-color: var(--surface-secondary);
	}

	/* Logo Styling */
	.experience-card svg {
		width: 40%;
		height: auto;
		max-width: 200px;
		max-height: 200px;
		fill: var(--text-primary);
	}

	/* Theme Variables */
	:root {
		--surface-secondary: rgb(242, 240, 229);
		--text-primary: rgb(16, 15, 15);
	}

	@media (prefers-color-scheme: dark) {
		:root {
			--surface-secondary: rgb(28, 27, 26);
			--text-primary: rgb(206, 205, 195);
		}
	}
</style>
