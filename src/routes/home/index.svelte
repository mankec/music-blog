<script lang="ts">
	import { base } from '$app/paths'
</script>

<div class="container">
	<a href="{base}/home/album">
		<div class="albums">
			<h2>Albums</h2>
		</div>
	</a>
	<a href="{base}/home/artist">
		<div class="artists">
			<h2>Artists</h2>
		</div>
	</a>
	<a href="{base}/home/genre">
		<div class="genres">
			<h2>Genres</h2>
		</div>
	</a>
</div>

<style>
	.container {
		width: 75%;
		height: 100vh;
		margin: 0 auto;

		display: flex;
	}

	h2 {
		font-size: 4.8rem;
		color: white;
	}

	a {
		text-decoration: none;
		width: 33.33%;
		height: 100%;
		background-color: #5c940d;

		transition-timing-function: ease-in-out;
		transition-duration: 0.6s;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	a:hover {
		color: white;
		background-color: #66a80f;
	}
</style>
