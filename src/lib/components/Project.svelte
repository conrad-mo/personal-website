<script lang="ts">
	const { name, description, photo, link } = $props();

	type ImageModules = Record<
		string,
		{
			default: string;
			[key: string]: unknown;
		}
	>;

	const imageModules: ImageModules = import.meta.glob(
		`$lib/assets/projects/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}`,
		{
			eager: true,
			query: { enhanced: true }
		}
	);
	const selectedImage: string =
		Object.entries(imageModules).find(([path]) => path.split('/').pop()?.startsWith(photo))?.[1]
			.default ?? '';
</script>

<a href={link} target="_blank" rel="noopener noreferrer">
	<enhanced:img src={selectedImage} alt={name} />
	<div>
		<h1>{name}</h1>
		<h2>{description}</h2>
	</div>
</a>

<style>
	a {
		text-decoration: none;
		color: inherit;
		outline: none;
		border-radius: 0.75rem;
		padding: 0.75rem;
		margin-left: -0.75rem;
		margin-right: -0.75rem;
		max-width: 21rem;
		transition: background-color 0.3s ease;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		box-sizing: border-box;
	}
	a:hover {
		background-color: var(--hover-background);
	}
	img {
		border-radius: 0.75rem;
		height: auto;
		width: 100%;
	}
	h1 {
		font-weight: 400;
		font-size: 1.125rem;
		line-height: 1.75rem;
	}
	h2 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 300;
	}
	:root {
		--hover-background: rgb(230, 228, 217);
	}
	@media (prefers-color-scheme: dark) {
		:root {
			--hover-background: rgb(40, 39, 38);
		}
	}
</style>
