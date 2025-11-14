<script lang="ts">
	import { page } from '$app/state';
    import '@fontsource/fusion-pixel-8px-proportional-tc';
</script>
<div class="p-4">
    <h1 class="text-center text-2xl md:text-3xl lg:text-4xl" style="font-family: 'Fusion Pixel 8px Proportional TC', sans-serif;">ERROR {page.status}</h1>
    {#if page.error?.message}
    <p class="text-center mt-4 text-red-500">{page.error.message}</p>
    {/if}
</div>

