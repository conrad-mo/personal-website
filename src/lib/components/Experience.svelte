<script lang="ts">
	const { name, photo } = $props();
</script>

<main>
	<img loading="lazy" src={photo} alt={name} />
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
		width: 100%;
	}
	img {
		max-height: 200px;
		max-width: 200px;
		height: auto;
		width: 40%;
	}
	:root {
		--exp-background: rgb(242, 240, 229);
	}
	@media (prefers-color-scheme: dark) {
		:root {
			--exp-background: rgb(28, 27, 26);
		}
	}
</style>
