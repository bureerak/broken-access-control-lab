<script lang="ts">
    import { fade } from "svelte/transition";
    import Test from '../components/test.svelte';
    import Form from '../components/form.svelte';
    import Fetch from '../components/fetch.svelte';
    import Sum from '../components/sum.svelte';
    import type { PageProps } from './$types';

    let {data, form} : PageProps = $props();
    let progress = $state(0);
    let page = $state(1);

    if (data.users != null) {
        progress = 2;
    }


    function pageChange(newPage: number) {
        page = newPage;
    }

    // $inspect(data.users);
    // $inspect(progress);
    // $inspect(page);

</script>

<main class="">
    <div class="main-content mx-auto mt-6 w-2/3 border p-4 rounded Backdrop-blur-sm bg-white/30">
        <h1 class=" text-3xl">Broken Access Control Lab</h1>
        <p class="mb-2">Explore the vulnerabilities and learn how to secure your applications.</p>
        <ul class="flex gap-1 mb-4">
            <button onclick={() => {pageChange(1)}} type="button" class="border rounded w-6 h-fit bg-sky-500 text-white cursor-pointer">1</button>
            {#if progress >= 1}
            <button onclick={() => {pageChange(2)}} class="border rounded w-6 h-fit bg-sky-500 text-white cursor-pointer">2</button>
            <button onclick={() => {pageChange(3)}} class="border rounded w-6 h-fit bg-sky-500 text-white cursor-pointer">3</button>
            <button onclick={() => {pageChange(4)}} class="border rounded w-6 h-fit bg-sky-500 text-white cursor-pointer">4</button>
            {:else}
            <button class="border rounded w-6 h-fit bg-gray-500 text-white cursor-not-allowed">2</button>
            <button class="border rounded w-6 h-fit bg-gray-500 text-white cursor-not-allowed">3</button>
            <button class="border rounded w-6 h-fit bg-gray-500 text-white cursor-not-allowed">4</button>
            {/if}
        </ul>
        {#if page === 1}
        <div in:fade={{ duration: 400 }}>
            <Form></Form>
        </div>
        {:else if page === 2}
        <div in:fade={{ duration: 400 }}>
            <Fetch id={data.users?.id}></Fetch>
        </div>
        {:else if page === 3}
        <div in:fade={{ duration: 400 }}>
            <Test></Test>
        </div>
        {:else if page === 4}
        <div in:fade={{ duration: 400 }}>
            <Sum></Sum>
        </div>
        {/if}
    </div>
</main>