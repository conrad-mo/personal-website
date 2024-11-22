<script lang="ts">
	import { Project, Experience, Navbar } from '$lib/components';
	let activeExp = $state('Northern Labs');
	import { scrollRef } from 'svelte-scrolling';
	import Typewriter from 'svelte-typewriter';
	import { fly } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	let homeVisible = $state(false);
	let expsVisible = $state(false);
	let projectsVisible = $state(false);
</script>

<div class="nav">
	<Navbar />
</div>
<div
	use:scrollRef={'home'}
	class="home"
	use:inview={{ threshold: 0.5 }}
	oninview_enter={() => {
		homeVisible = true;
	}}
>
	{#if homeVisible}
		<Typewriter mode="loop"
			><h1 transition:fly={{ y: 200, duration: 500 }}>Software Engineer</h1>
			<h1 transition:fly={{ y: 200, duration: 500 }}>Fullstack Developer</h1>
			<h1 transition:fly={{ y: 200, duration: 500 }}>DevOps Engineer</h1>
			<h1 transition:fly={{ y: 200, duration: 500 }}>Pianist 🎹</h1>
		</Typewriter>
		<p transition:fly={{ delay: 150, y: 200, opacity: 0, duration: 500 }}>
			👋 Hi! I&apos;m Conrad Mo, a Computer Science undergrad at the University of Toronto.
		</p>
	{/if}
</div>
<!-- <div use:scrollRef={'about'} class="about">
	<h1>About me</h1>
	<p>
		Coding and playing the piano are my two main passions. Music, in particular, holds a special
		place in my heart, allowing me to express myself in unique ways.
	</p>
	<p>
		When I&apos;m not immersed in the world of music and coding, I enjoy dining out with friends and
		exploring Toronto&apos;s diverse culinary offerings. Food is a wonderful way to connect, but my
		true love is the piano. If you&apos;re as passionate about music and enjoy good company,
		let&apos;s connect and share our stories!
	</p>
</div> -->
<div
	use:scrollRef={'experience'}
	class="experience"
	use:inview={{ threshold: 0.5 }}
	oninview_enter={() => {
		expsVisible = true;
	}}
>
	{#if expsVisible}
		<h1 transition:fly={{ y: 200, duration: 500 }}>Experiences</h1>
		<div transition:fly={{ delay: 150, y: 200, opacity: 0, duration: 500 }} class="experience-list">
			<Experience
				position="Software Engineer"
				name="Northern Labs"
				description="Canadian blockchain startup. Worked on a proprietary newspaper paywall that processes transactions on the blockchain"
				active={activeExp}
				photo="/experiences/northernlabs.svg"
			/>
			<Experience
				position="Web Developer"
				name="Hack the Valley"
				description="Canada's second largest hackathon"
				active={activeExp}
				photo="/experiences/htv.svg"
			/>
		</div>
	{/if}
</div>
<div
	use:scrollRef={'projects'}
	class="projects"
	use:inview={{ threshold: 0.5 }}
	oninview_enter={() => {
		projectsVisible = true;
	}}
>
	{#if projectsVisible}
		<h1 transition:fly={{ y: 200, duration: 500 }}>Projects</h1>
		<div transition:fly={{ delay: 150, y: 200, opacity: 0, duration: 500 }} class="project-list">
			<Project
				name="UTSC Geoguessr"
				description="A game built with python and tkinter that aims to help new students learn the campus. Submission for HTV 7"
				photo="utscgeoguessr"
				link="https://github.com/conrad-mo/geoguesser-utsc"
			/>
			<Project
				name="Retina"
				description="A desktop app that focuses on helping people explore their
                    surroudings by providing definitions of objects around them.
                    Submission for UoftHacksX"
				photo="retina"
				link="https://github.com/CherylZ4/Retina"
			/>
			<Project
				name="Viridian"
				description="A mobile app for iOS and Android that allows users to talk
                    to each other"
				photo="viridian"
				link="https://github.com/conrad-mo/viridian"
			/>
			<Project
				name="Speech Summarizer"
				description="A mobile app that summarizes long meetings into short
                    meeting summaries. Winner of Best Mobile Hack at Ignition
                    Hacks 2023"
				photo="speechsummarizer"
				link="https://github.com/eveev26/SpeechSummarizer"
			/>
			<Project
				name="Personal Website"
				description="A website to display myself, skills and projects"
				photo="website"
				link="https://github.com/conrad-mo/personal-website"
			/>
			<Project
				name="Eventful"
				description="A mobile app that generates items given an event and
                    optimizes costs of the items for the event. Ranked 14th out
                    of 80 projects at HTV8"
				photo="eventful"
				link="https://github.com/conrad-mo/Eventful"
			/>
			<Project
				name="WisdomWhisperer"
				description="A web app that allows students to upload lecture videos to
                    summarize, generate quiz questions, and ask a chatbot for
                    help. Winner of the Student Challenge at NewHacks2023"
				photo="wisdomwhisperer"
				link="https://github.com/rtutz/NewHacks2023-WisdomWhisperer"
			/>
		</div>
	{/if}
</div>

<style>
	:root {
		display: flex;
		flex-direction: column;
	}
	.nav {
		max-height: 0;
		top: 0;
		position: fixed;
		width: 100%;
		z-index: 1;
	}
	.home,
	.about,
	.experience,
	.projects {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 4rem;
		border-bottom-width: 0.1rem;
		border-bottom-style: solid;
		border-color: var(--tx-3);
	}
	.experience-list,
	.project-list {
		display: flex;
		justify-content: center;
	}
	h1 {
		line-height: 1;
		font-weight: 300;
	}
	.home {
		gap: 2rem;
		padding-left: var(--home-sides);
		padding-right: var(--home-sides);
	}
	.home h1 {
		white-space: nowrap;
		font-size: 2.5rem;
		font-weight: 400;
		width: fit-content;
	}
	.home p {
		font-size: 1rem;
		line-height: 2rem;
		font-weight: 300;
		width: 100%;
	}
	.experience {
		padding-left: var(--exp-sides);
		padding-right: var(--exp-sides);
	}
	.experience h1 {
		font-size: 4.5rem;
	}
	.experience-list {
		gap: 2rem;
		width: 100%;
	}
	.projects {
		padding-left: var(--proj-sides);
		padding-right: var(--proj-sides);
	}
	.projects h1 {
		margin-top: 6rem;
		font-size: 3rem;
	}
	.project-list {
		gap: 1.5rem;
		flex-wrap: wrap;
	}
	@media (max-width: 499px) {
		:root {
			--exp-sides: 3rem;
		}
	}
	@media (max-width: 639px) {
		:root {
			--exp-sides: 4rem;
			--home-sides: 1.5rem;
		}
		.experience-list {
			flex-direction: column;
		}
		.experience h1 {
			font-size: 2.5rem;
		}
	}
	@media (min-width: 640px) {
		:root {
			--exp-sides: 2rem;
			--proj-sides: 8rem;
			--home-sides: 8rem;
		}
		.home {
			gap: 3rem;
		}
		.home h1 {
			font-size: 3rem;
		}
		.home p {
			font-size: 1.5rem;
		}
	}
	@media (min-width: 768px) {
		:root {
			--exp-sides: 7rem;
		}
		.home h1 {
			font-size: 4rem;
		}
	}
	@media (min-width: 900px) {
		:root {
			--exp-sides: 10rem;
		}
	}
	@media (min-width: 1024px) {
		:root {
			--exp-sides: 15rem;
		}
		.projects {
			align-items: start;
		}
		.home h1 {
			font-size: 6rem;
		}
		.home p {
			width: 70%;
		}
	}
	@media (min-width: 1280px) {
		:root {
			--exp-sides: 20rem;
		}
	}
	@media (min-width: 1536px) {
		:root {
			--exp-sides: 24rem;
		}
	}
	@media (min-width: 1804px) {
		:root {
			--exp-sides: 32rem;
		}
		.project-list {
			justify-content: start;
		}
		.home p {
			width: 50%;
		}
	}
	@media (min-width: 2000px) {
		:root {
			--exp-sides: 40rem;
		}
	}
</style>
