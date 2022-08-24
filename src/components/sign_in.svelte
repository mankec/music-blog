<script lang="ts">
</script>

<div class="albums-content-container">
	<form class="form" action="/login" method="post">
		<h2 class="add-genre-or-track">
			Login or <a class="register" href="/register"
				>Register</a
			>
		</h2>

		<div class="add-genre-track-flex">
			<label for="username">Username</label>
			<input
				class="add-genre-track-input"
				aria-label="Your username"
				name="username"
				placeholder=""
				type="text"
			/>
		</div>

		<div class="add-genre-track-flex">
			<label for="password">Password</label>
			<input
				class="add-genre-track-input"
				aria-label="Your password"
				name="password"
				placeholder=""
				type="password"
			/>
			<button type="submit">Sign in</button>
		</div>
	</form>
</div>

<style>
	.register {
		color: #82c91e;
		text-decoration: none;
	}

	.register:hover {
		text-decoration: underline;
	}

	h2 {
		margin-top: 2.5rem;
		margin-bottom: 2.5rem;
		font-size: 2.2rem;
		letter-spacing: 0.2px;
		text-align: center;
		color: #ced4da;

		display: block;
	}

	label {
		font-size: 1.4rem;
		color: #ced4da;
		align-self: flex-start;
	}

	.albums-content-container {
		margin: auto 0;
		height: auto;
		border: 4px solid #212529;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	input[type='text'].add-genre-track-input,
	input[type='password'].add-genre-track-input {
		width: 100%;
		height: 100%;
		padding: 6px 8px;
		background: #495057;
		border: 1px solid #82c91e;
		border-radius: 0.6em;
	}

	input:focus {
		outline: 1.5px solid #82c91e;
	}

	button[type='submit'] {
		width: 30%;
		height: 100%;
		margin-top: 3px;
		padding: 6px 8px;
		font-size: 1.2rem;
		background-color: #82c91e;
		border: 1px solid #ccc;
		border-radius: 0.6em;
		align-self: flex-end;
		cursor: pointer;
	}

	button[type='submit']:hover {
		background-color: #94d82d;
	}

	.add-genre-track-flex {
		width: 50%;
		margin: 0 auto;
		margin-bottom: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 0.1rem;
	}

	form {
		margin: 0 auto;
		width: 48rem;
	}
</style>
