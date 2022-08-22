<script lang="ts">
	import { base } from '$app/paths'
	import type { GenreType } from '$root/types'
	import type { PageData } from '@sveltejs/kit/types/internal'

	export let data: PageData
	const genres = data.genres
</script>

<div class="container">
	<div class="header">
		<h1>Genres</h1>
	</div>
	<div class="artists-add-artist">
		<div class="artists">
			<ul>
				{#each genres as genre}
					<li>
						<a href="{base}/home/genre/{genre.id}">
							<h2>{genre.genre_name}</h2></a
						>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

<style>
	.container {
		width: 68%;
		height: 100%;
		margin: 0 auto;
		/* background-color: blue; */
	}

	.header {
		width: 100%;
		height: auto;
		/* background-color: blue; */

		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.header h1 {
		margin-top: 1rem;
		padding-bottom: 0.1rem;
		padding-right: 0.8rem;
		font-size: 3.2rem;
		border-bottom: 3px solid #66a80f;

		display: inline-block;
	}

	.artists-add-artist {
		height: 100%;
		display: flex;
	}

	.artists {
		width: 100%;
		height: 100%;
	}

	.artists ul {
		margin-top: 4.2rem;
		margin-right: 2.5rem;
		list-style-type: none;

		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.artists li {
		margin-bottom: 0.8rem;
		margin-right: 1.6rem;
	}

	.artists h2 {
		font-size: 2.4rem;
	}

	.artists a:hover {
		text-decoration: underline;
	}

	.artists a {
		height: auto;
		text-decoration: none;
		color: #ced4da;
		/* background-color: yellow; */
		transition-timing-function: ease-in-out;
		transition-duration: 0.6s;
	}
</style>
