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
			<Experience
				name="Northern Labs"
				image={`<path d="M0 0 C32 0 32 0 38.4921875 5.74609375 C39.794503 8.34182821 40.85251265 10.74949763 41.875 13.4375 C42.50048583 14.78177527 43.1390143 16.12005411 43.79003906 17.45214844 C45.05455873 20.07430109 46.25162869 22.71127969 47.39550781 25.38818359 C49.48503642 30.09184857 52.02912704 34.39218325 54.75 38.75 C57.94678593 44.10735792 60.96860191 49.54348343 64 55 C64.33 36.85 64.66 18.7 65 0 C75.56 0 86.12 0 97 0 C97 35.64 97 71.28 97 108 C86.44 108 75.88 108 65 108 C55.41666667 95.36111111 55.41666667 95.36111111 52.45849609 87.33837891 C50.41911622 82.67040429 47.62085255 78.36808759 45 74 C41.04 67.4 37.08 60.8 33 54 C32.67 71.82 32.34 89.64 32 108 C21.44 108 10.88 108 0 108 C0 72.36 0 36.72 0 0 Z " transform="translate(7,47)"/>
<path d="M0 0 C10.89 0 21.78 0 33 0 C33 26.73 33 53.46 33 81 C47.19 81 61.38 81 76 81 C76 89.91 76 98.82 76 108 C50.92 108 25.84 108 0 108 C0 72.36 0 36.72 0 0 Z " transform="translate(116,47)"/>
`}
				viewbox="0 0 200 200"
			/>
			<Experience
				name="Hack the Valley"
				image={`<path
			d="M478.35 273.47h-1a21.65 21.65 0 00-21.65 21.65v2.32a86.67 86.67 0 01-43.33 75l-119 68.72a86.66 86.66 0 01-86.66 0l-119-68.72a86.67 86.67 0 01-43.33-75v-2.32a21.65 21.65 0 00-21.65-21.65h-1A21.65 21.65 0 000 295.12v27.9a86.67 86.67 0 0043.33 75.06l163.34 94.3a86.66 86.66 0 0086.66 0l163.34-94.3A86.67 86.67 0 00500 323.02v-27.9a21.65 21.65 0 00-21.65-21.65zM478.35 234.8h-1a21.65 21.65 0 01-21.65-21.65v-6.65a86.67 86.67 0 00-43.33-75l-119-68.72a86.66 86.66 0 00-86.66 0l-119 68.72a86.67 86.67 0 00-43.33 75v6.65a21.65 21.65 0 01-21.65 21.65h-1A21.65 21.65 0 010 213.15v-32.18a86.67 86.67 0 0143.33-75.06l163.34-94.3a86.66 86.66 0 0186.66 0l163.34 94.3A86.67 86.67 0 01500 180.97v32.23a21.65 21.65 0 01-21.65 21.6z"
		  /><path
			d="M377.05 211.83a86.68 86.68 0 00-86.67 0l-104.63 60.41-39.64-22.88a86.63 86.63 0 00-86.67 0l-43.2 24.94a21.45 21.45 0 015.41-.71h1a21.65 21.65 0 0121.65 21.65v14l15.12-8.73a86.66 86.66 0 0181.8-2.6h-.08a293.7 293.7 0 017 3.31 324.8 324.8 0 0143.15 25.35l73.8 42.6a86.68 86.68 0 0143.34 75.06v27.34l44.35-25.6v-27.26a86.65 86.65 0 00-43.34-75l-79.38-45.83 60.32-34.91a86.68 86.68 0 0186.67 0l78.63 45.4v-13.13a21.65 21.65 0 0121.65-21.65h1a21.39 21.39 0 019.58 2.26l-110.86-64.02z"
		  />`}
				viewbox="0 0 500 504.04"
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
