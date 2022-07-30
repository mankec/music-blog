<script lang="ts">
	import type { GenreType } from '$root/types'
	import { base } from '$app/paths'
	import { slugify } from '$lib/helper'
	export let genre: GenreType

	export let genre_name = genre.genre_name
</script>

<h1>{genre_name}</h1>
