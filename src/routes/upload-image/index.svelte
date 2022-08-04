<script lang="ts">
	let fileInput: any
	let files: any
	let avatar: any

	function getBase64(image: any) {
		const reader = new FileReader()
		reader.readAsDataURL(image)
		reader.onload = (e: any) => {
			avatar = e.target.result
			uploadFunction(e.target.result)
		}
	}

	async function uploadFunction(imgBase64: any) {
		const data: any = {}
		const imgData: any = imgBase64.split(',')
		data['image'] = imgData[1]
		console.log(data)
		await fetch(`/upload`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: data
		})
	}
</script>

<div class="container">
	{#if avatar}
		<img id="avatar" src={avatar} alt="avatar" />
	{:else}
		<img id="avatar" src="avatar.png" alt="avatar" />
	{/if}
	<input
		class="hidden"
		id="file-to-upload"
		type="file"
		accept=".png,.jpg"
		bind:files
		bind:this={fileInput}
		on:change={() => getBase64(files[0])}
	/>
	<button
		class="upload-btn"
		on:click={() => fileInput.click()}>Upload</button
	>
</div>

<!-- <div class="container">
    {#if avatar}
    <img id="avatar" src={avatar} alt="avatar"/>
    {:else}
    <img id="avatar" src={`avatar.png`} alt="avatar"/>
    {/if}
    <input class="hidden" id="file-to-upload" type="file" accept=".png,.jpg" bind:files bind:this={fileInput}/>
    <button class="upload-btn" on:click={()=>{fileInput.click();}}>Upload</button>
</div> -->
<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	#avatar {
		border-radius: 99999px;
		height: 128px;
		width: 128px;
		margin-bottom: 10px;
	}

	.hidden {
		display: none;
	}

	.upload-btn {
		width: 128px;
		height: 32px;
		background-color: black;
		font-family: sans-serif;
		color: white;
		font-weight: bold;
		border: none;
	}

	.upload-btn:hover {
		background-color: white;
		color: black;
		outline: black solid 2px;
	}
</style>
