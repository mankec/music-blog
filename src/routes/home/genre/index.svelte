<script lang="ts">
	import Genre from '$root/components/genre/genre.svelte'
	import type { GenreType } from '$root/types'

	export let genres: GenreType[] = []
</script>

<h1>Genres</h1>

{#each genres as genre (genre.id)}
	<Genre {genre} />
{/each}
