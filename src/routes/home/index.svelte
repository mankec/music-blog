<script lang="ts">
	import Album from '$root/components/album.svelte'
	import AddAlbum from '$root/components/add_album.svelte'
	import Artist from '$root/components/artist.svelte'
	import type { AlbumType } from '$root/types'

	export let albums: AlbumType[] = []
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<h1>Waddup, welcome!</h1>

<AddAlbum />
<div class="album-blocks-container">
	{#each albums as album (album.id)}
		<Album {album} />
	{/each}
</div>

<style>
	.album-blocks-container {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>
