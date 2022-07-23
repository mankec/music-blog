<nav class="navbar">
	<a href="/">HOME</a>
	<ul>
		<li><a href="home/bands">Bands</a></li>
		<li><a href="home/albums">Albums</a></li>
		<li><a href="home/genres">Genres</a></li>
	</ul>
</nav>

<style>
	.navbar a {
		font-size: 2rem;
		color: orange;
		margin: 2.5rem auto;
	}

	.navbar {
		width: 12%;
		height: 100%;
		background-color: #1a1a1a;

		position: fixed;
		top: 0;
		right: 0;

		display: flex;
		flex-direction: column;
		justify-content: start;
	}

	.navbar ul {
		width: 100%;

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

		border-bottom: 1px solid lime;
	}

	.navbar li a {
		text-decoration: none;
		font-size: 1.4rem;
		color: orange;
	}

	.navbar li a:hover {
		text-decoration: underline;
		color: orange;
	}
</style>
