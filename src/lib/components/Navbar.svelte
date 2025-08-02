<script lang="ts">
	import Instagram from '~icons/mdi/instagram';
	import Linkedin from '~icons/mdi/linkedin';
	import Github from '~icons/mdi/github';
	import Resume from '~icons/mdi/resume';
	import Menu from '~icons/mdi/menu';
	import Close from '~icons/mdi/close';
	import { scrollTo } from 'svelte-scrolling';
	let isDrawerOpen = $state(false);
	function toggleDrawer() {
		isDrawerOpen = !isDrawerOpen;
	}
</script>

<nav class="navbar">
	<div class="navbar_mobile-toggle">
		<button class="icon-button" onclick={toggleDrawer} aria-label="Menu Button">
			{#if isDrawerOpen}
				<Close />
			{:else}
				<Menu />
			{/if}
		</button>
	</div>

	{#if isDrawerOpen}
		<div class="navbar_drawer">
			<button class="nav-link" use:scrollTo={'home'} onclick={toggleDrawer}>Home</button>
			<button class="nav-link" use:scrollTo={'about'} onclick={toggleDrawer}>About</button>
			<button class="nav-link" use:scrollTo={'experience'} onclick={toggleDrawer}>Experience</button
			>
			<button class="nav-link" use:scrollTo={'projects'} onclick={toggleDrawer}>Projects</button>
			<div class="social-links">
				<a
					href="/Conrad_Mo_resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Resume Link"
				>
					<button class="icon-button" onclick={toggleDrawer} aria-label="Resume Button">
						<Resume />
					</button>
				</a>
				<a
					href="https://www.instagram.com/conrad.mo/"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Instagram Link"
				>
					<button class="icon-button" onclick={toggleDrawer} aria-label="Instagram Button">
						<Instagram />
					</button>
				</a>
				<a
					href="https://www.linkedin.com/in/conradmo/"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Linkedin Link"
				>
					<button class="icon-button" onclick={toggleDrawer} aria-label="Linkedin Button">
						<Linkedin />
					</button>
				</a>
				<a
					href="https://github.com/conrad-mo"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Github Link"
				>
					<button class="icon-button" onclick={toggleDrawer} aria-label="Github Button">
						<Github />
					</button>
				</a>
			</div>
		</div>
	{/if}

	<div class="navbar_desktop">
		<div class="social-links">
			<a
				href="/Conrad_Mo_resume.pdf"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Resume Link"
			>
				<button class="icon-button" aria-label="Resume Button">
					<Resume />
				</button>
			</a>
			<a
				href="https://www.instagram.com/conrad.mo/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Instagram Link"
			>
				<button class="icon-button" aria-label="Instagram Button">
					<Instagram />
				</button>
			</a>
			<a
				href="https://www.linkedin.com/in/conradmo/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Linkedin Link"
			>
				<button class="icon-button" aria-label="Linkedin Button">
					<Linkedin />
				</button>
			</a>
			<a
				href="https://github.com/conrad-mo"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Github Link"
			>
				<button class="icon-button" aria-label="Github Button">
					<Github />
				</button>
			</a>
		</div>
		<div class="nav-links">
			<button class="nav-link" use:scrollTo={'home'}>Home</button>
			<button class="nav-link" use:scrollTo={'about'}>About</button>
			<button class="nav-link" use:scrollTo={'experience'}>Experience</button>
			<button class="nav-link" use:scrollTo={'projects'}>Projects</button>
		</div>
	</div>
</nav>

<style>
	.navbar {
		--nav-padding: 0.75rem;
		--nav-margin: 1rem;
		--nav-radius: 0.375rem;
		--nav-gap: 0.5rem;
		--backdrop-blur: 15px;
	}

	.navbar_mobile-toggle,
	.navbar_desktop,
	.navbar_drawer {
		display: flex;
		margin: 0 var(--nav-margin);
		padding: var(--nav-padding) 0;
		border-radius: var(--nav-radius);
		background-color: var(--surface-glass);
		backdrop-filter: blur(var(--backdrop-blur));
		-webkit-backdrop-filter: blur(var(--backdrop-blur));
		transform: translateY(1rem);
	}

	.navbar_mobile-toggle {
		justify-content: flex-end;
		padding-right: 0.5rem;
		touch-action: manipulation;
	}

	.navbar_drawer {
		flex-direction: column;
		gap: var(--nav-gap);
		margin-top: var(--nav-gap);
	}

	.navbar_desktop {
		align-items: center;
		justify-content: space-between;
		z-index: 1;
	}

	button {
		all: unset;
		display: inline-block;
		cursor: pointer;
		border-radius: var(--nav-radius);
		transition: background-color 0.3s ease;
	}

	button:hover {
		background-color: var(--tx-3);
	}

	.nav-link {
		padding: 0.5rem 0.75rem;
	}

	.navbar_desktop .nav-link {
		padding: 0.25rem 0.75rem;
	}

	.icon-button {
		padding: 0.25rem 0.5rem 0 0.5rem;
	}

	.social-links {
		display: flex;
		gap: 1rem;
		margin-left: 1rem;
	}

	.nav-links {
		display: flex;
		gap: var(--nav-gap);
		margin-right: 1rem;
	}

	a {
		text-decoration: none;
		color: inherit;
		outline: none;
	}

	:root {
		--surface-glass: rgb(242, 240, 229, 0.5);
	}

	@media (prefers-color-scheme: dark) {
		:root {
			--surface-glass: rgb(40, 39, 38, 0.5);
		}
	}

	@media (max-width: 768px) {
		.navbar_desktop {
			display: none;
		}
	}

	@media (min-width: 769px) {
		.navbar_mobile-toggle,
		.navbar_drawer {
			display: none;
		}
	}
</style>
