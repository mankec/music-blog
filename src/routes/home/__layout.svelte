<script lang="ts">
	import Navigation from '$root/components/navigation.svelte'
</script>

<Navigation />
<div class="albums-content-container">
	<slot />
</div>

<style>
	.albums-content-container {
		width: 88%;
	}
</style>
