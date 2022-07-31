<script lang="ts">
	import AddArtist from '$root/components/add_artist.svelte'
	import ArtistList from '$root/components/artist_list.svelte'
	import type { ArtistType } from '$root/types'

	export let artists: ArtistType[] = []
</script>

<h1>Waddup, welcome!</h1>

<AddArtist />

<h1>Artists</h1>

<ul>
	{#each artists as artist (artist.id)}
		<li><ArtistList {artist} /></li>
	{/each}
</ul>

<style>
</style>
