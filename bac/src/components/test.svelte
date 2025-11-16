<script lang="ts">
  import { fly } from "svelte/transition";
  let id: number = $state(0);
  let username: string = $state("");
  let email: string = $state("");
  let loading = $state(false);

  async function getData(params: string) {
    loading = true;
    username = "";
    email = "";
    try {
      const res = await fetch(`/api/profile?id=${params}`);
      const data = await res.json();
      username = data.name;
      email = data.email;
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      loading = false;
    }
  }
</script>

<div
  class="min-h-[60vh] flex flex-col items-center justify-center bg-linear-to-b text-green-300 font-mono relative px-5 py-8"
  style="font-family: 'Fusion Pixel 8px Proportional TC', monospace;"
>
  <div
    class="relative w-[600px] max-w-full border-2 border-green-500 bg-black/70 p-6 rounded-lg shadow-[0_0_20px_#00ffaa] overflow-hidden"
  >
    <!-- CRT scanline overlay -->
    <div
      class="absolute inset-0 bg-[repeating-linear-gradient(transparent_0px,rgba(0,255,0,0.05)_1px,transparent_2px)] animate-scan blur-[0.3px] mix-blend-overlay pointer-events-none"
    ></div>

    <h3
      class="text-cyan-300 text-xl mb-2 tracking-widest animate-flicker select-none"
    >
      GUESSING & PATTERN PREDICTION TEST
    </h3>

    <div
      class="inline-block bg-[#0f0f0f]/70 border border-green-600 text-green-300 p-3 mb-5 rounded leading-snug"
    >
      <p class="text-sm text-green-400">
        🧩 ช่องโหว่ RBAC / IDOR อีกแบบหนึ่ง ที่เกิดจาก API มีรูปแบบ predictable เช่น
        `/api/profile?id=1`.
      </p>
      <p class="text-sm text-green-400">
        ลองใส่ <strong>id 1</strong> หรือ <strong>3</strong> เพื่อทดสอบการเข้าถึงข้อมูลของผู้อื่น.
      </p>
    </div>

    <div
      class="mb-3 w-fit bg-black/60 border border-green-500 p-3 rounded shadow-[0_0_10px_#00ff99_inset] flex items-center gap-2 justify-center"
    >
      <label
        for="idInput"
        class="text-green-400 text-sm whitespace-nowrap"
      >💡 /api/profile?id=</label>

      <input
        id="idInput"
        bind:value={id}
        placeholder="Enter ID"
        class="px-2 py-1 border border-green-500 bg-black text-green-100 w-24 focus:outline-none focus:ring focus:ring-green-400 rounded text-center"
      />

      <button
        onclick={() => getData(String(id))}
        type="button"
        class="border border-green-400 rounded px-2 py-1 bg-linear-to-b from-green-800 to-green-950 text-black uppercase hover:shadow-[0_0_15px_#00ffaa] hover:scale-105 active:translate-y-px transition-all"
      >
        {#if loading}
          <span class="animate-pulse text-green-300">Fetching...</span>
        {:else}
          Fetch
        {/if}
      </button>
    </div>

    {#if username}
      <div
        class="mt-5 inline-block bg-[#001800]/60 border-2 border-green-400 rounded p-3 shadow-[0_0_10px_#00ff99_inset] text-[#aaffbb] text-sm backdrop-blur-sm min-w-[260px]"
        transition:fly={{ y: 10, duration: 400 }}
      >
        <p class="font-bold text-green-200">🧑 Name : {username}</p>
        <p class="text-green-300">💻 Email : {email}</p>
      </div>
    {/if}
  </div>
</div>

<style>
  /* flickering CRT header */
  @keyframes flicker {
    0% {
      opacity: 1;
      text-shadow: 0 0 10px #0ff, 0 0 20px #00ffaa;
    }
    25% {
      opacity: 0.9;
      text-shadow: 0 0 5px #00ffaa;
    }
    50% {
      opacity: 1;
      text-shadow: 0 0 30px #00ffcc, 0 0 40px #00ffaa;
    }
    75% {
      opacity: 0.85;
      text-shadow: 0 0 3px #00ffaa;
    }
    100% {
      opacity: 1;
      text-shadow: 0 0 15px #00ffaa, 0 0 30px #00ffee;
    }
  }
  .animate-flicker {
    animation: flicker 2s infinite alternate;
  }

  /* terminal scanline effect */
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