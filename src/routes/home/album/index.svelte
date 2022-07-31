<script lang="ts">
	import Album from '$root/components/album.svelte'
	import type { AlbumType } from '$root/types'

	export let albums: AlbumType[] = []
</script>

<div class="album-blocks-container">
	<!-- {#each albums as album (album.id)}
		<Album {album} />
	{/each} -->
</div>

<style>
	.album-blocks-container {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>
