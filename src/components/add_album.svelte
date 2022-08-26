<script lang="ts">
	let album_name = ''
	let year_of_release = ''
</script>

<div class="albums-content-container">
	<form
		class="form"
		action=""
		method="post"
		autocomplete="off"
	>
		<label for="add-artist">Add album</label>
		<div class="add-genre-track-flex">
			<input
				class="add-genre-track-input"
				aria-label="Add album name"
				bind:value={album_name}
				name="album_name"
				placeholder="Morrison Hotel"
				type="text"
			/>
			<input
				class="year-of-release"
				aria-label="Add year album's year of release"
				bind:value={year_of_release}
				name="year_of_release"
				placeholder="1970"
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
		color: greenyellow;
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
	input[type='text'].year-of-release {
		border: none;
		width: 20%;
		height: 100%;
		background: #495057;
		padding: 6px 8px;
		border: 1px solid #82c91e;
		border-radius: 0.6em;
	}
	.fa-square-plus {
		color: greenyellow;
		font-size: 2.9em;
		height: 100%;
	}

	.add-genre-track-flex {
		margin-bottom: 3rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	}

	form {
		margin: 0 auto;
		width: 48rem;
	}

	input:focus {
		outline: 1px solid #82c91e;
	}
</style>
