<script lang="ts">
	import { base } from '$app/paths'
	import { slugify } from '$root/lib/helper'
	let artist_name = ''
</script>

<div class="albums-content-container">
	<form
		action="{base}/home"
		method="post"
		autocomplete="off"
	>
		<div class="grid-form-container">
			<div class="col-label-4">
				<label for="add-track-names">Artist name:</label>
			</div>
			<div class="col-input-4 w-50">
				<input
					aria-label="Add track names"
					bind:value={artist_name}
					name="artist_name"
					placeholder=""
					type="text"
				/>
			</div>

			<button class="btn w-50" type="submit">Submit</button>
		</div>
	</form>
</div>

<style>
	.w-50 {
		width: 50%;
	}

	.w-84 {
		width: 84%;
	}

	.grid-form-container {
		display: grid;
		grid-template-columns: repeat(4, 120px);
		align-items: center;

		column-gap: 8px;
		row-gap: 6px;
	}

	.col-label-4 {
		grid-column: span 1 / 2;
		justify-self: end;
	}
	.col-input-4 {
		grid-column: span 3 / 5;
	}

	button {
		grid-column: span 3 / 5;
	}

	form {
		margin: 0 auto;
		width: 48rem;
	}

	input:focus {
		outline: 1px solid lime;
	}

	label {
		font-size: 1.2rem;
	}

	input[type='text'] {
		width: 100%;
		padding: 5px 8px;
		margin: 8px 0;
		border: 1px solid #ccc;
		border-radius: 4px;
	}
</style>
