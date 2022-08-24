<script lang="ts">
	import { enhance } from '$lib/form'

	let genre_name = ''
	let track_name = ''
</script>

<div class="albums-content-container">
	<form class="form" action="" method="post">
		<label for="add-genre-or-track"
			>Add some genres or tracks</label
		>
		<div class="add-genre-track-flex">
			<button type="submit" class="btn">
				<i class="fas fa-regular fa-square-plus" /></button
			>
			<input
				class="add-genre-track-input"
				aria-label="Add genre"
				bind:value={genre_name}
				name="genre_name"
				placeholder="Add genre"
				type="text"
			/>
		</div>
		<div class="add-genre-track-flex">
			<button type="submit" class="btn">
				<i class="fas fa-regular fa-square-plus" /></button
			>
			<input
				class="add-genre-track-input"
				aria-label="Add genre"
				bind:value={track_name}
				name="track_name"
				placeholder="Add a song"
				type="text"
			/>
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

	form {
		margin: 0 auto;
		width: 48rem;
	}

	input:focus {
		outline: 1px solid lime;
	}
</style>
