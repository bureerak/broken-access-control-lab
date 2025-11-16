<script lang="ts">
  import { fade } from "svelte/transition";
  import Test from "../components/test.svelte";
  import Form from "../components/form.svelte";
  import Fetch from "../components/fetch.svelte";
  import Sum from "../components/sum.svelte";
  import type { PageProps } from "./$types";

  let { data, form }: PageProps = $props();
  let progress = $state(0);
  let page = $state(1);

  if (data.users != null) {
    progress = 2;
  }

  function pageChange(newPage: number) {
    page = newPage;
  }
</script>

<main
  class="min-h-screen flex-col items-center flex justify-center bg-linear-to-b from-black via-purple-900/30 to-black text-green-300 font-mono"
>
  <div
    class="main-content mx-auto mt-8 w-2/3 border border-green-600/50 p-6 rounded-xl backdrop-blur-lg bg-black/50 shadow-[0_0_20px_#00ffcc]"
  >
    <h1 class="text-4xl font-bold mb-2 text-cyan-300 tracking-widest">
      ✦ Broken Access Control Lab ✦
    </h1>
    <p class="mb-6 text-lg text-green-400/80">
      Explore the vulnerabilities and secure your digital world.
    </p>

    <ul class="flex gap-3 mb-6 justify-center">
      <button
        onclick={() => {
          pageChange(1);
        }}
        type="button"
        class="border border-green-400 text-green-300 bg-black/40 px-4 py-2 rounded-md cursor-pointer shadow-[0_0_10px_#00ff99] hover:shadow-[0_0_20px_#00ffcc] hover:bg-green-800/40 transition"
      >
        1
      </button>
      {#if progress >= 1}
        <button onclick={() => pageChange(2)} class="border border-green-400 text-green-300 bg-black/40 px-4 py-2 rounded-md cursor-pointer shadow-[0_0_10px_#00ff99] hover:shadow-[0_0_20px_#00ffcc] hover:bg-green-800/40 transition">2</button>
        <button onclick={() => pageChange(3)} class="border border-green-400 text-green-300 bg-black/40 px-4 py-2 rounded-md cursor-pointer shadow-[0_0_10px_#00ff99] hover:shadow-[0_0_20px_#00ffcc] hover:bg-green-800/40 transition">3</button>
        <button onclick={() => pageChange(4)} class="border border-green-400 text-green-300 bg-black/40 px-4 py-2 rounded-md cursor-pointer shadow-[0_0_10px_#00ff99] hover:shadow-[0_0_20px_#00ffcc] hover:bg-green-800/40 transition">4</button>
      {:else}
        <button class="border border-gray-700 text-gray-500 bg-black/30 px-4 py-2 rounded-md cursor-not-allowed">2</button>
        <button class="border border-gray-700 text-gray-500 bg-black/30 px-4 py-2 rounded-md cursor-not-allowed">3</button>
        <button class="border border-gray-700 text-gray-500 bg-black/30 px-4 py-2 rounded-md cursor-not-allowed">4</button>
      {/if}
    </ul>

</div>
{#if page === 1}
  <div in:fade={{ duration: 400 }}>
    <Form />
  </div>
{:else if page === 2}
  <div in:fade={{ duration: 400 }}>
    <Fetch id={data.users?.id} />
  </div>
{:else if page === 3}
  <div in:fade={{ duration: 400 }}>
    <Test />
  </div>
{:else if page === 4}
  <div in:fade={{ duration: 400 }}>
    <Sum />
  </div>
{/if}
</main>

<style>
  /* เพิ่ม animation cyber flicker effect */
  h1 {
    animation: flicker 2s infinite alternate;
  }

  @keyframes flicker {
    0% {
      opacity: 1;
      text-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff;
    }
    50% {
      opacity: 0.85;
      text-shadow: 0 0 2px #0ff, 0 0 5px #00f;
    }
    100% {
      opacity: 1;
      text-shadow: 0 0 10px #0ff, 0 0 30px #0ff;
    }
  }
</style>