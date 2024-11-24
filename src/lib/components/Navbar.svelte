<script>
	// @ts-nocheck

	import Instagram from '~icons/mdi/instagram';
	import Linkedin from '~icons/mdi/linkedin';
	import Github from '~icons/mdi/github';
	import Resume from '~icons/mdi/resume';
	import { scrollTo } from 'svelte-scrolling';
</script>

<main>
	<div class="socials">
		<button>
			<Resume />
		</button>
		<button>
			<Instagram />
		</button>
		<button>
			<Linkedin />
		</button>
		<button>
			<Github />
		</button>
	</div>
	<div class="sections">
		<button use:scrollTo={'home'}>Home</button>
		<button use:scrollTo={'experience'}>Experience</button>
		<button use:scrollTo={'projects'}>Projects</button>
	</div>
</main>

<style>
	main {
		background-color: var(--nav-background);
		display: flex;
		align-items: center;
		justify-content: space-between;
		transform: translateY(1rem);
		margin-left: 1rem;
		margin-right: 1rem;
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;
		border-radius: 0.375rem;
		backdrop-filter: blur(15px);
		-webkit-backdrop-filter: blur(10px);
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
	button {
		all: unset;
		display: inline-block;
		cursor: pointer;
		padding-top: 0.25rem;
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		border-radius: 0.375rem;
		transition: background-color 0.3s ease;
	}
	button:hover {
		background-color: var(--tx-3);
	}
	.socials button {
		padding-left: 0.5rem;
		padding-right: 0.5rem;
	}
	.sections button {
		padding-bottom: 0.25rem;
	}
	:root {
		--nav-background: rgb(242, 240, 229, 0.5);
	}
	@media (prefers-color-scheme: dark) {
		:root {
			--nav-background: rgb(40, 39, 38, 0.5);
		}
	}
</style>
