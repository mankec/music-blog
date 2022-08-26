<script lang="ts">
	import { base } from '$app/paths'
	import type { AlbumType } from '$root/types'

	export let album: AlbumType

	export let album_name = album.album_name
</script>

<!-- prettier-ignore -->
<li>
	<a href="{base}/home/album/{album.id}">{album_name}</a>
</li>

<style>
	li a {
		font-size: 1.6rem;
	}
</style>
