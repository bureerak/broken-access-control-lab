<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/LOGO.jpg';
	import Nav from '../components/nav.svelte';
	import bg from '$lib/assets/bestBG.jpg';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Open House : Broken Access Control</title>
</svelte:head>

<main class="min-h-screen" style="background-image: url({bg}); background-size: cover; background-position: center;">
	{@render children()}
</main>
