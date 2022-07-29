<script lang="ts">
	import type { GenreType } from '$root/types'
	import { genre_names, i } from '$lib/helper'
	export let genre: GenreType

	export let genre_name = genre.genre_names[0]

	if (genre_names.includes(genre_name)) {
		genre_name = ''
	} else {
		genre_names.push(genre_name)
	}
</script>

<h1>{genre_name}</h1>
