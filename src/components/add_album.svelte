<script lang="ts">
	let album_name = ''
	let year_of_release = ''
</script>

<!-- prettier-ignore -->
<div class="albums-content-container">
	<form
		action=""
		method="post"
		autocomplete="off"
	>
		<div class="grid-form-container">
			<div class="col-label-1">
				<label for="add-album">Album name:</label>
			</div>
			<div class="col-input-1">
				<input
					aria-label="Add album name"
					bind:value={album_name}
					name="album_name"
					placeholder=" Morrison Hotel"
					type="text"
				/>
			</div>

			<div class="col-label-2">
				<label for="add-year-of-release"
					>Year of release:</label
				>
			</div>
			<div class="col-input-2 w-50">
				<input
					aria-label="Add year album came out"
					bind:value={year_of_release}
					name="year_of_release"
					placeholder=" 1970"
					type="text"
				/>
			</div>

			<button class="btn w-84" type="submit">Submit</button>
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

	.col-label-1 {
		grid-column: span 1 / 2;
		justify-self: end;
	}
	.col-input-1 {
		grid-column: span 1 / 3;
	}

	.col-label-2 {
		grid-column: span 1 / 4;
		justify-self: end;
	}
	.col-input-2 {
		grid-column: span 1 / 5;
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
