<script lang="ts">
	import type { ArtistType } from '$root/types'
	import { base } from '$app/paths'
	import { slugify } from '$lib/helper'
	export let artist: ArtistType

	export let artist_name = artist.artist_name
</script>

<a
	href="{base}/home/artists/{artist.id}/{slugify(
		artist_name
	)}"><h2>{artist_name}</h2></a
>
