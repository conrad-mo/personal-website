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

<a class="project-card" href={link} target="_blank" rel="noopener noreferrer">
	<enhanced:img class="project-card_image" src={selectedImage} alt={name} />
	<div class="project-card_content">
		<h3 class="project-card_title">{name}</h3>
		<p class="project-card_description">{description}</p>
	</div>
</a>

<style>
	.project-card {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: 21rem;
		padding: 0.75rem;
		margin: 0 -0.75rem;
		border-radius: var(--radius-lg);
		text-decoration: none;
		color: inherit;
		outline: none;
		transition: background-color 0.3s ease;
		box-sizing: border-box;
	}

	.project-card:hover {
		background-color: var(--surface-hover);
	}

	.project-card_image {
		width: 100%;
		height: auto;
		border-radius: var(--radius-lg);
	}

	.project-card_content {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.project-card_title {
		font-size: 1.125rem;
		font-weight: 400;
		line-height: 1.75rem;
		margin: 0;
		color: var(--foreground);
	}

	.project-card_description {
		font-size: 0.875rem;
		font-weight: 300;
		line-height: 1.25rem;
		margin: 0;
		color: var(--tx-2);
	}
	:root {
		--radius-lg: 0.75rem;
		--surface-hover: rgb(230, 228, 217);
	}

	@media (prefers-color-scheme: dark) {
		:root {
			--surface-hover: rgb(40, 39, 38);
		}
	}
</style>
