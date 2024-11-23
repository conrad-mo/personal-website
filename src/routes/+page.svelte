<script>
	import { Project, Experience } from '$lib/components';
	let activeExp = $state('Northern Labs');
</script>

<div class="home">
	<h1>Software Engineer</h1>
	<div>
		<p>
			Hi! I&apos;m Conrad Mo, a Computer Science undergrad at the University of Toronto. Coding and
			playing the piano are my two main passions.
		</p>
		<p>
			Music, in particular, holds a special place in my heart, allowing me to express myself in
			unique ways.
		</p>
	</div>
</div>
<div class="experience">
	<h1>Experiences</h1>
	<div class="experience-list">
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
</div>
<div class="projects">
	<h1>Projects</h1>
	<div class="project-list">
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
</div>

<style>
	:root {
		display: flex;
		flex-direction: column;
	}
	.home {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 2rem;
		padding-left: var(--home-sides);
		padding-right: var(--home-sides);
		border-bottom-width: 0.1rem;
		border-bottom-style: solid;
		border-color: var(--tx-3);
	}
	.home h1 {
		font-size: 2.5rem;
		line-height: 1;
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
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 4rem;
		padding-left: var(--exp-sides);
		padding-right: var(--exp-sides);
		border-bottom-width: 0.1rem;
		border-bottom-style: solid;
		border-color: var(--tx-3);
	}
	.experience h1 {
		font-size: 4.5rem;
		line-height: 1;
		font-weight: 300;
	}
	.experience-list {
		display: flex;
		justify-content: center;
		gap: 2rem;
		width: 100%;
	}
	.projects {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 4rem;
		padding-left: var(--proj-sides);
		padding-right: var(--proj-sides);
		border-bottom-width: 0.1rem;
		border-bottom-style: solid;
		border-color: var(--tx-3);
	}
	.projects h1 {
		padding-top: 4rem;
		font-size: 3rem;
		line-height: 1;
		font-weight: 300;
	}
	.project-list {
		display: flex;
		justify-content: center;
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
			gap: 4rem;
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
