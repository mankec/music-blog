<script lang="ts">
	let artist_name = ''
</script>

<div class="albums-content-container">
	<form
		class="form"
		action=""
		method="post"
		autocomplete="off"
	>
		<label for="add-artist">Add artist</label>
		<div class="add-genre-track-flex">
			<input
				class="add-genre-track-input"
				aria-label="Add track names"
				bind:value={artist_name}
				name="artist_name"
				placeholder="The Doors"
				type="text"
			/>
			<button type="submit" class="btn">
				<i class="fas fa-regular fa-square-plus" /></button
			>
		</div>
	</form>
</div>

<style>
	label {
		margin-bottom: 3rem;
		font-size: 2.2rem;
		color: #ced4da;
		text-align: center;

		display: block;
	}

	.albums-content-container {
		margin-top: 1.25rem;
		margin-right: 1.25rem;
		height: 22rem;
		border: 4px solid #212529;
		border-radius: 1.6em;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.btn {
		border: none;
		padding: 0;
		font-size: 1rem;
		background: none;
		border-radius: 0.25em;
	}
	.btn:hover {
		cursor: pointer;
	}

	input[type='text'].add-genre-track-input {
		border: none;
		width: 40%;
		height: 100%;
		background: #495057;
		padding: 6px 8px;
		border: 1px solid #82c91e;
		border-radius: 0.6em;
	}
	.fa-square-plus {
		color: #82c91e;
		font-size: 2.9em;
		height: 100%;
	}

	.add-genre-track-flex {
		margin-bottom: 3rem;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	}

	form {
		margin: 0 auto;
		width: 48rem;
	}

	input:focus {
		outline: 2px solid #ccc;
	}
</style>
