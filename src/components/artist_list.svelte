<script lang="ts">
	import type { ArtistType } from '$root/types'
	import { base } from '$app/paths'
	import { slugify } from '$lib/helper'
	export let artist: ArtistType

	export let artist_name = artist.artist_name
</script>

<li>
	<a href="{base}/home/artist/{artist.id}">{artist_name}</a>
</li>

<style>
	li a {
		font-size: 1.6rem;
	}
</style>
