<script lang="ts">
	import { base } from '$app/paths'
	import { session } from '$app/stores'
</script>

<!-- <nav>
	{#if !$session.user}
		<a href="{base}/auth/login">Login</a>
		<a href="{base}/auth/register">Register</a>
	{/if}

	{#if $session.user}
		<a href="{base}/protected">Admin</a>
		<a href="{base}/auth/logout">Log out</a>
	{/if}
</nav> -->

<slot />
