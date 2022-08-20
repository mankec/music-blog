<script lang="ts">
	import { base } from '$app/paths'

	import type { GenreType } from '$root/types'
	import type { AlbumType } from '$root/types'

	export let genre: GenreType
	export let albums: AlbumType[] = []
</script>

<div class="main-container">
	<div class="container">
		<div class="genre-title">
			<h1>{genre.genre_name}</h1>
		</div>
		<div class="flex">
			{#each albums as album}
				<!-- prettier-ignore -->
				<div class="album-main-container">
					<div class="album-container">
						<h2><a href="{base}/home/album/{album.id}">{album.album_name}</a></h2>
					</div>
					<div class="yol">
						<div class="yol-2">
							<span>{album.year_of_release}</span>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.flex {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		align-items: baseline;
		align-content: flex-start;
		column-gap: 0.1rem;
		row-gap: 2.5rem;
	}

	.genre-title {
		margin-bottom: 3.6rem;
		/* background-color: yellow; */
	}

	.genre-title h1 {
		margin-top: 0.6rem;
		padding-bottom: 0.1rem;
		padding-right: 0.8rem;
		font-size: 3.2rem;
		border-bottom: 3px solid #66a80f;

		display: inline-block;
	}

	a {
		text-decoration: none;
		color: #ced4da;
	}

	a:hover {
		text-decoration: underline;
	}

	.main-container {
		/* background-color: gray; */

		overflow: hidden;
		width: 84%;
		height: 100vh;
	}

	.container {
		/* background-color: red; */
		height: 100vh;
		margin: 0 auto;
		width: 75%;
	}

	.album-main-container {
		width: 25%;
		display: inline-block;
	}

	.album-container {
		width: auto;

		/* background-color: green; */
		border: 3px solid black;
		border-radius: 0.6em;

		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}

	.album-container h2 {
		padding-top: 1.4rem;
		padding-right: 1.5rem;
		padding-bottom: 2.2rem;
		padding-left: 1.5rem;
		font-size: 2rem;
		text-align: center;
	}

	.yol {
		width: auto;
		height: 3rem;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.yol-2 {
		width: 50%;

		background-color: #343a40;
		border: 2.6px solid black;
		border-radius: 0.5em;
		transform: translateY(-60%);

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.yol-2 span {
		font-size: 1.8rem;
		padding: 0.2rem 1rem;
	}
</style>
