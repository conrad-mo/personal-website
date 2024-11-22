<script>
	import { Project } from '$lib/components';
</script>

<div class="main">
	<h1>Software Engineer</h1>
	<p>
		Hi! I&apos;m Conrad Mo, a Computer Science undergrad at the University of Toronto. Coding and
		playing the piano are my two main passions. Music, in particular, holds a special place in my
		heart, allowing me to express myself in unique ways.
	</p>
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
	</div>
</div>

<style>
	:root {
		display: flex;
		flex-direction: column;
	}
	.main {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 4rem;
		padding-left: 8rem;
		padding-right: 8rem;
	}
	.main h1 {
		font-size: 6rem;
		line-height: 1;
		font-weight: 400;
	}
	.main p {
		font-size: 1.5rem;
		line-height: 2rem;
		font-weight: 100;
		width: 50%;
	}
	.projects {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 4rem;
		padding-left: 8rem;
		padding-right: 8rem;
	}
	.project-list {
		display: flex;
		gap: 1.5rem;
		/* flex-wrap: wrap; */
	}
	.projects h1 {
		font-size: 3rem;
		line-height: 1;
		font-weight: 400;
	}
</style>
