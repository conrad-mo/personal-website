<script>
	// @ts-nocheck

	import Instagram from '~icons/mdi/instagram';
	import Linkedin from '~icons/mdi/linkedin';
	import Github from '~icons/mdi/github';
	import Resume from '~icons/mdi/resume';
	import Menu from '~icons/mdi/menu';
	import Close from '~icons/mdi/close';
	import { scrollTo } from 'svelte-scrolling';
	import { slide } from 'svelte/transition';
	let isDrawerOpen = $state(false);
	function toggleDrawer() {
		isDrawerOpen = !isDrawerOpen;
	}
</script>

<main>
	<div class="menu-button">
		<button onclick={toggleDrawer}>
			{#if isDrawerOpen}
				<Close />
			{:else}
				<Menu />
			{/if}
		</button>
	</div>
	{#if isDrawerOpen}
		<div transition:slide={{ y: -200, duration: 250 }} class="drawer">
			<button use:scrollTo={'home'}>Home</button>
			<button use:scrollTo={'experience'}>Experience</button>
			<button use:scrollTo={'projects'}>Projects</button>
			<div class="socials">
				<a href="/Conrad_Mo_resume.pdf" target="_blank" rel="noopener noreferrer">
					<button>
						<Resume />
					</button>
				</a>
				<a href="https://www.instagram.com/conrad.mo/" target="_blank" rel="noopener noreferrer">
					<button>
						<Instagram />
					</button>
				</a>
				<a href="https://www.linkedin.com/in/conradmo/" target="_blank" rel="noopener noreferrer">
					<button>
						<Linkedin />
					</button>
				</a>
				<a href="https://github.com/conrad-mo" target="_blank" rel="noopener noreferrer">
					<button>
						<Github />
					</button>
				</a>
			</div>
		</div>
	{/if}
	<div class="desktop">
		<div class="socials">
			<a href="/Conrad_Mo_resume.pdf" target="_blank" rel="noopener noreferrer">
				<button>
					<Resume />
				</button>
			</a>
			<a href="https://www.instagram.com/conrad.mo/" target="_blank" rel="noopener noreferrer">
				<button>
					<Instagram />
				</button>
			</a>
			<a href="https://www.linkedin.com/in/conradmo/" target="_blank" rel="noopener noreferrer">
				<button>
					<Linkedin />
				</button>
			</a>
			<a href="https://github.com/conrad-mo" target="_blank" rel="noopener noreferrer">
				<button>
					<Github />
				</button>
			</a>
		</div>
		<div class="sections">
			<button use:scrollTo={'home'}>Home</button>
			<button use:scrollTo={'experience'}>Experience</button>
			<button use:scrollTo={'projects'}>Projects</button>
		</div>
	</div>
</main>

<style>
	.menu-button,
	.desktop,
	.drawer {
		background-color: var(--nav-background);
		display: flex;
		transform: translateY(1rem);
		margin-left: 1rem;
		margin-right: 1rem;
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;
		border-radius: 0.375rem;
		backdrop-filter: blur(15px);
		-webkit-backdrop-filter: blur(10px);
	}
	.menu-button {
		touch-action: manipulation;
		justify-content: end;
		padding-right: 0.5rem;
	}
	.drawer {
		margin-top: 0.5rem;
		flex-direction: column;
		gap: 0.5rem;
	}
	button {
		all: unset;
		display: inline-block;
		cursor: pointer;
		transition: background-color 0.3s ease;
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		border-radius: 0.375rem;
	}
	button:hover {
		background-color: var(--tx-3);
	}
	.menu-button button {
		padding-top: 0.25rem;
		padding-right: 0.5rem;
		padding-left: 0.5rem;
	}
	.drawer button {
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
	}
	.drawer .socials button {
		padding-top: 0.25rem;
		padding-bottom: 0;
	}
	.desktop {
		align-items: center;
		justify-content: space-between;
		z-index: 1;
	}
	.socials {
		display: flex;
		gap: 1rem;
		margin-left: 1rem;
	}
	.sections {
		display: flex;
		gap: 0.5rem;
		margin-right: 1rem;
	}
	.desktop button {
		padding-top: 0.25rem;
	}
	.desktop .socials button {
		padding-left: 0.5rem;
		padding-right: 0.5rem;
	}
	.desktop .sections button {
		padding-bottom: 0.25rem;
	}
	a {
		text-decoration: none;
		color: inherit;
		outline: none;
	}
	:root {
		--nav-background: rgb(242, 240, 229, 0.5);
	}
	@media (prefers-color-scheme: dark) {
		:root {
			--nav-background: rgb(40, 39, 38, 0.5);
		}
	}
	@media (max-width: 768px) {
		.desktop {
			display: none;
		}
	}
	@media (min-width: 769px) {
		.menu-button {
			display: none;
		}
		.drawer {
			display: none;
		}
	}
</style>
