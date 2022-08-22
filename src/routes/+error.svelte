<script lang="ts">
	import { page } from '$app/stores'
</script>

<div class="error">
	<h1>{$page.status} : {$page.error?.message}</h1>
</div>

<style>
	.error {
		height: 100vh;
		display: grid;
		gap: var(--spacing-32);
		place-content: center;
		place-items: center;
	}
</style>
