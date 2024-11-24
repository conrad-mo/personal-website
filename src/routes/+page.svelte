<script lang="ts">
	import { Project, Experience, Navbar } from '$lib/components';
	let activeExp = $state('Northern Labs');
	import { scrollRef } from 'svelte-scrolling';
	import Typewriter from 'svelte-typewriter';
	import { fly } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	let homeVisible = $state(false);
	let aboutVisible = $state(false);
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
<div
	use:scrollRef={'about'}
	class="about"
	use:inview={{ threshold: 0.5 }}
	oninview_enter={() => {
		aboutVisible = true;
	}}
>
	{#if aboutVisible}
		<div class="about-content">
			<h1 transition:fly={{ y: 200, duration: 500 }}>About me</h1>
			<div class="about-text">
				<p transition:fly={{ delay: 150, y: 200, opacity: 0, duration: 500 }}>
					Coding and playing the piano are my two main passions. Music, in particular, holds a
					special place in my heart, allowing me to express myself in unique ways.
				</p>
				<p transition:fly={{ delay: 300, y: 200, opacity: 0, duration: 500 }}>
					When I&apos;m not immersed in the world of music and coding, I enjoy dining out with
					friends and exploring Toronto&apos;s diverse culinary offerings. Food is a wonderful way
					to connect, but my true love is the piano. If you&apos;re as passionate about music and
					enjoy good company, let&apos;s connect and share our stories!
				</p>
			</div>
		</div>
		<enhanced:img src="$lib/assets/pfp.jpg" alt="pfp" transition:fly={{ y: 200, duration: 500 }} />
	{/if}
</div>
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
			<Experience name="Northern Labs" photo="/experiences/northernlabs.svg" />
			<Experience name="Hack the Valley" photo="/experiences/htv.svg" />
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
			<Project
				name="Histovibes"
				description="A web app that allows students to historic content and 
                    create timelines, explore auto-generated quizzes from 
                    uploaded historic content. Submission for UoftHacks 11"
				photo="histovibes"
				link="https://github.com/anniyy/HistoVibes"
			/>
			<Project
				name="Lifelens"
				description="A mobile app built with flutter that allows users to input 
                    personal information and share it with friends and join multiple friend groups.
                    Winner of Best Use of Kintone at QHacks 2024"
				photo="lifelens"
				link="https://github.com/CherylZ4/LifeLens"
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
		font-size: 2.25rem;
		font-weight: 400;
		width: fit-content;
	}
	.home p {
		font-size: 1rem;
		line-height: 2rem;
		font-weight: 300;
		width: 100%;
	}
	.about {
		flex-direction: column-reverse;
		align-items: center;
		padding-left: var(--about-sides);
		padding-right: var(--about-sides);
		gap: 1rem;
	}
	.about-content,
	.about-text {
		display: flex;
		flex-direction: column;
	}
	.about-content {
		align-items: center;
		gap: 2rem;
	}
	.about-text {
		gap: 1rem;
	}
	.about h1 {
		font-size: 2.25rem;
		font-weight: 300;
	}
	.about p {
		font-size: 1rem;
		font-weight: 300;
		color: var(--tx-2);
	}
	.about img {
		width: var(--pfp-width);
		height: var(--pfp-height);
		clip-path: circle();
		transform: translateY(2rem);
	}
	.experience {
		align-items: center;
		padding-left: var(--exp-sides);
		padding-right: var(--exp-sides);
	}
	.experience h1 {
		font-size: 4rem;
	}
	.experience-list {
		gap: 2rem;
		width: 100%;
	}
	.projects {
		padding-left: var(--proj-sides);
		padding-right: var(--proj-sides);
		padding-bottom: 10rem;
	}
	.projects h1 {
		margin-top: 6rem;
		font-size: 2.75rem;
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
			--pfp-width: 180px;
			--pfp-height: 240px;
			--about-sides: 2rem;
		}
		.experience-list {
			flex-direction: column;
		}
		.experience h1 {
			font-size: 2.25rem;
		}
		.projects h1 {
			margin-left: 2rem;
		}
	}
	@media (min-width: 640px) {
		:root {
			--exp-sides: 2rem;
			--proj-sides: 8rem;
			--home-sides: 8rem;
			--pfp-width: 180px;
			--pfp-height: 240px;
			--about-sides: 2rem;
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
			--pfp-width: 240px;
			--pfp-height: 320px;
		}
		.home h1 {
			font-size: 4rem;
		}
		.about {
			flex-direction: row;
			gap: 3rem;
		}
		.about-content {
			align-items: start;
		}
		.about h1 {
			font-size: 2.75rem;
		}
		.about img {
			transform: translateY(0rem);
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
			--about-sides: 4rem;
			--pfp-width: 300px;
			--pfp-height: 400px;
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
		.about {
			gap: 10rem;
		}
	}
	@media (min-width: 1280px) {
		:root {
			--exp-sides: 20rem;
			--about-sides: 8rem;
			--pfp-width: 330px;
			--pfp-height: 440px;
		}
		.about-text {
			gap: 1.5rem;
		}
	}
	@media (min-width: 1536px) {
		:root {
			--exp-sides: 24rem;
			--about-sides: 16rem;
			--pfp-width: 390px;
			--pfp-height: 520px;
		}
		.about-content {
			gap: 4rem;
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
