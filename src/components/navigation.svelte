<script lang="ts">
	import { base } from '$app/paths'
	import { page } from '$app/stores'
</script>

<nav class="navbar">
	<a href="{base}/home">HOME</a>
	<ul>
		<li><a href="{base}/home/artist">Artists</a></li>
		<li><a href="{base}/home/album">Albums</a></li>
		<li><a href="{base}/home/genre">Genres</a></li>

		{#if $page.data.user}
			<li class="logout">
				<a href="{base}/logout">Log out</a>
			</li>
		{/if}
	</ul>
</nav>

<style>
	.navbar {
		width: 16%;
		height: 100%;
		background-color: #212529;

		position: fixed;
		top: 0;
		right: 0;

		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: flex-end;
	}

	.navbar ul {
		width: 75%;

		margin-left: 1rem;
		list-style-type: none;

		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.navbar li {
		margin-bottom: 1rem;
		padding: 0.5rem 0.5rem 0 0;
		width: 100%;

		border-bottom: 1px solid #868e96;
	}

	.navbar a {
		margin: 2.5rem auto;
	}

	.navbar a {
		text-decoration: none;
		font-size: 1.6rem;
		color: #66a80f;
	}

	.logout a {
		color: #c92a2a;
	}

	.logout a:hover {
		color: #ff6b6b;
	}
</style>
