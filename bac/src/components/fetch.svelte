<script lang="ts">
  import { fly } from "svelte/transition";

  let { id } = $props();
  let username: string = $state("");
  let email: string = $state("");
  let loading = $state(false);

  async function getData(params: string) {
    loading = true;
    try {
      const res = await fetch(`/api/profile?id=${params}`);
      const data = await res.json();
      username = data.name;
      email = data.email;
    } catch (e) {
      console.error("Error fetching data:", e);
    } finally {
      setTimeout(() => {
          loading = false;
    }, 500);
}
  }
</script>

<div
  class="min-h-[60vh] flex flex-col items-center justify-center bg-linear-to-b text-green-300 font-mono relative px-5 py-6"
  style="font-family: 'Fusion Pixel 8px Proportional TC', monospace;"
>
  <div
    class="max-w-[600px] w-full border-2 border-green-500 bg-black/60 p-6 rounded-lg shadow-[0_0_15px_#00ffaa] relative overflow-hidden"
  >
    <!-- CRT glow animation -->
    <div
      class="absolute inset-0 bg-[repeating-linear-gradient(transparent_0px,rgba(0,255,120,0.05)_1px,transparent_2px)] animate-scan blur-[0.3px] mix-blend-overlay pointer-events-none"
    ></div>

    <h3
      class="text-cyan-400 text-xl mb-2 tracking-widest animate-flicker select-none"
    >
      IDOR TEST CONSOLE
    </h3>

    <div
      class="inline-block bg-[#0f0f0f]/70 border border-green-600 text-green-300 p-3 mb-4 rounded"
    >
      <h5 class="text-cyan-300 mb-1">
        💡 IDOR (Insecure Direct Object Reference)
      </h5>
      <p class="text-sm text-green-400 leading-snug">
        ช่องโหว่ที่เกิดขึ้นเมื่อผู้ใช้สามารถเข้าถึงข้อมูลของระบบโดยไม่ตรวจสอบสิทธิ์อย่างเหมาะสม
        (ลองดึง API ของผู้ใช้อื่นดูสิ!)
      </p>
    </div>

    <div class="text-sm text-green-400 mb-4">
      <p>🔍 สังเกต Endpoint:</p>
      <code
        class="block bg-black/50 border border-green-700 px-2 py-1 mt-1 rounded text-cyan-300"
      >
        /api/profile?id={id}
      </code>
    </div>

    <div class="flex gap-3 items-center">
      <button
        onclick={() => getData(id)}
        type="submit"
        class="px-3 py-1 border border-green-400 bg-linear-to-b from-green-700 to-green-900 text-black rounded hover:shadow-[0_0_15px_#00ffaa] hover:scale-105 active:translate-y-px transition-all uppercase"
      >
        {#if loading}
          <span class="animate-pulse text-green-300">Fetching...</span>
        {:else}
          Fetch
        {/if}
      </button>

      <p
        id="detail"
        class="bg-[#0a0a0a]/70 border border-green-600 px-3 py-1 rounded text-green-300 text-xs"
      >
        💡 ลอง Inspect (F12) ตอน Fetch ข้อมูล
      </p>
    </div>

    {#if username}
      <div
        class="mt-6 inline-block bg-[#001800]/60 border-2 border-green-400 rounded p-3 shadow-[0_0_10px_#00ff99_inset] text-[#aaffbb] text-sm backdrop-blur-sm min-w-[260px]"
        transition:fly={{ y: 10, duration: 400 }}
      >
        <p class="font-bold text-green-200">🧑 Name : {username}</p>
        <p class="text-green-300">💻 Email : {email}</p>
      </div>
    {/if}
  </div>
</div>

<style>
  /* Text flicker like CRT terminal titles */
  @keyframes flicker {
    0% {
      opacity: 1;
      text-shadow: 0 0 10px #00ffaa, 0 0 15px #00ffee;
    }
    30% {
      opacity: 0.8;
      text-shadow: 0 0 3px #00ffaa;
    }
    60% {
      opacity: 1;
      text-shadow: 0 0 25px #00ffcc, 0 0 40px #00ffaa;
    }
    100% {
      opacity: 0.9;
      text-shadow: 0 0 10px #00ffaa;
    }
  }
  .animate-flicker {
    animation: flicker 2s infinite alternate;
  }

  /* Subtle animated scanline effect like an old monitor */
  @keyframes scan {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 0 120px;
    }
  }
  .animate-scan {
    animation: scan 1s linear infinite;
  }
</style>