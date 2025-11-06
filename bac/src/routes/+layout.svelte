<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Nav from '../components/nav.svelte';
	let { children } = $props();
</script>

<Nav></Nav>
<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
