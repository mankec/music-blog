<script lang="ts">
	import type { TrackType } from '$root/types'
	import { base } from '$app/paths'
	import { slugify } from '$lib/helper'
	export let track: TrackType

	export let track_name = track.track_name
</script>
