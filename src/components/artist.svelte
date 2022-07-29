<script lang="ts">
	import type { ArtistType } from '$root/types'

	export let artist: ArtistType

	export let artist_name = artist.artist_name
</script>

<!--  -->

<div class="flex flex-col">
	<div class="bands-container">
		<div class="band-desc">
			<h2>{artist_name}</h2>
			<p>
				<!-- artist description -->
				<a> <!-- link to artist's page --></a>
			</p>
		</div>
		<div class="band-photo" />
	</div>
</div>

<style>
	.bands-container {
		margin-bottom: 5rem;
		width: 88%;
		border-radius: 2vmin;

		display: flex;
		justify-content: center;
	}
	.band-desc {
		width: 56%;
		border-radius: 2vmin 0 0 2vmin;
		background-color: green;
	}
	.band-photo {
		aspect-ratio: 1 / 1;
		width: 26%;
		border-radius: 0 2vmin 2vmin 0;

		background-color: red;
	}
	.band-desc h2 {
		margin-top: 0.75rem;
		margin-bottom: 1rem;
		padding-left: 1.75rem;
		display: inline-block;

		border-bottom: 2px solid red;
	}
	.band-desc p {
		padding-left: 3rem;
		padding-right: 0.5rem;
		font-size: 1.3rem;
	}
</style>
