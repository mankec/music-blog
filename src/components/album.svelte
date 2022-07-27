<script lang="ts">
	import type { AlbumType } from '$root/types'

	export let album: AlbumType

	// export let artist_data = album.artist_name[0]
	// export let artist = Object.values(artist_data)

	export let track_data = album.track_names[0]
	export let track_names: any =
		Object.values(track_data).slice(1)

	export let genre_data = album.genre_names[0]
	export let genre_names: any =
		Object.values(genre_data).slice(1)
</script>

<!-- ------------------------ -->

<div class="album-block">
	<div class="album-block-1">
		<div class="album-header">
			<div class="album-name">
				<h2>{album.album_name}</h2>
			</div>
			<div class="album-release-date">
				<span>{album.year_of_release}</span>
			</div>
		</div>
		<div class="album-cover-container">
			<img
				src="images/hold_your_colour.jpg"
				alt="album cover"
			/>
		</div>
	</div>

	<div class="genre-tags">
		<ul>
			{#each genre_names[0] as genre}
				<li class="genre">
					<a href="/pages/genres/{genre}">{genre}</a>
				</li>
			{/each}
		</ul>
	</div>

	<div class="album-block-2">
		<div class="sub-album-block-2">
			<div class="album-songs-container">
				<div class="album-list-header">
					<span>Songs</span>
				</div>
				<div class="album-list-container">
					<ol>
						{#each track_names[0] as track}
							<li class="album-list">
								<span />
								<h3>{track}</h3>
							</li>
						{/each}
					</ol>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.album-block {
		margin: 1rem;
		width: 46%;
		height: 100%;
		background-color: green;
	}

	.album-block-1 {
		width: 100%;
		height: 40%;
		background-color: green;
	}

	.album-block-2 {
		height: 40%;
		background-color: yellow;
		width: 100%;

		display: flex;
		justify-content: center;
		align-items: flex-end;
	}

	.sub-album-block-2 {
		width: 100%;
		height: 10rem;
		background-color: green;

		overflow-x: hidden;
		overflow-y: scroll;
	}

	.sub-album-block-2::-webkit-scrollbar {
		width: 18px; /* width of the entire scrollbar */
	}

	.sub-album-block-2::-webkit-scrollbar-track {
		background: green; /* color of the tracking area */
	}

	.sub-album-block-2::-webkit-scrollbar-thumb {
		background-color: green; /* color of the scroll thumb */
		border-radius: 10px; /* roundness of the scroll thumb */
		border: 3px solid green; /* creates padding around scroll thumb */
	}

	.sub-album-block-2 {
		scrollbar-width: thin; /* "auto" or "thin" */
		scrollbar-color: green green; /* scroll thumb and track */
	}

	.album-header {
		height: 10%;

		display: flex;
	}

	.album-name {
		width: 75%;
		border-right: 3px solid green;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.album-name h2 {
		font-size: 22px;
		color: limegreen;
	}

	.album-release-date {
		width: 25%;
		height: 2.5rem;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.album-release-date span {
		color: orange;
		font-size: 2rem;
		font-weight: bold;
	}

	.album-cover-container {
		width: 100%;
		height: 40%;
	}

	.album-cover-container img {
		max-width: 100%;
		max-height: auto;
	}

	.album-cover-tag-container {
		width: 100%;
		height: 500px;
	}

	.album-cover-tag-container img {
		max-width: 25%;
		max-height: auto;
	}

	.album-list-header {
		margin: 0 0 1rem 2.5rem;
		height: 2.5rem;
		font-size: 28px;
		background-color: green;

		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.album-songs-container {
		margin-top: 0.25rem;
		padding: 0.25rem;
	}

	.album-list-container {
		width: 100%;
	}

	.album-list {
		list-style: none;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.album-list ol {
		list-style: none;
	}

	.album-list span {
		padding: 0.25rem;
		width: 10%;
		font-weight: bold;
		color: orange;
		border-right: 4px solid blue;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.album-list h3 {
		padding: 0.25rem;
		width: 90%;
		margin-left: 15px;
		font-size: 15px;

		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.album-list:last-child {
		margin-bottom: 2.5rem;
		border-radius: 0 0 10px 10px;
	}

	.album-list:nth-child(odd) {
		background-color: green;
	}

	.album-list:nth-child(even) {
		background-color: green;
	}

	.genre-tags {
		margin: 0 0.15rem 0.25rem 0;
		padding: 0.25rem;
		height: 10%;

		background-color: green;
		display: flex;
		justify-content: flex-end;
	}

	ul .genre {
		display: inline-block;
	}

	.genre {
		padding: 4px;
		font-weight: bold;

		border: 2px solid orange;
		border-radius: 25px;
	}

	.genre a {
		font-size: 14px;
		color: orange;
		text-decoration: none;
	}
	.genre a:hover {
		color: yellow;
		text-decoration: underline;
	}
</style>
