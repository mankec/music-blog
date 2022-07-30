<script lang="ts">
	import { base } from '$app/paths'
	import { slugify } from '$root/lib/helper'

	let genre_name = ''
</script>

<form action="" method="post">
	<input
		placeholder="Add new genre"
		bind:value={genre_name}
		name="genre_name"
		type="text"
	/>

	<button class="click" type="submit">Submit</button>
</form>
