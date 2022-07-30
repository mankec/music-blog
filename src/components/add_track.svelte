<script lang="ts">
	let track_name = ''
</script>

<form action="" method="post">
	<input
		placeholder="Add new track"
		bind:value={track_name}
		name="track_name"
		type="text"
	/>

	<button class="click" type="submit">Submit</button>
</form>
