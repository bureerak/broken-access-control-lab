<script lang="ts">
    import Form from '../components/form.svelte';
    import type { PageProps } from './$types';
    let {data, form} : PageProps = $props();
    let progress = $state(0);

    if (form?.success) {
        progress = 1;
    }

    // $inspect(data);
    $inspect(progress);
</script>

<main class="">
    <div class="main-content mx-auto mt-6 w-2/3 border p-4 rounded">
        <h1 class=" text-3xl">Broken Access Control Lab</h1>
        <p class="mb-2">Explore the vulnerabilities and learn how to secure your applications.</p>
        <ul class="flex gap-1 mb-4">
            <button type="button" class="border rounded w-6 h-fit bg-sky-500 text-white cursor-pointer">1</button>
            {#if progress >= 1} 
            <button class="border rounded w-6 h-fit bg-sky-500 text-white cursor-pointer">2</button>
            {:else}
            <button class="border rounded w-6 h-fit bg-gray-500 text-white cursor-not-allowed">2</button>
            {/if}
            <button class="border rounded w-6 h-fit bg-gray-500 text-white cursor-not-allowed">3</button>
        </ul>
        <Form></Form>
    </div>
</main>