<script>
	const { name, description, photo } = $props();
</script>

<main>
	<img src={photo} alt="name" />
	<h1>{name}</h1>
	<h2>{description}</h2>
</main>

<style>
	main {
		outline-style: solid;
		border-radius: 0.75rem;
		padding: 0.5rem;
		width: fit-content;
		max-width: 40%;
	}
	img {
		border-radius: 0.75rem;
		height: auto;
		width: 100%;
	}
	h1 {
		font-weight: 300;
		font-size: 1.125rem;
		line-height: 1.75rem;
	}
	h2 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 100;
	}
</style>
