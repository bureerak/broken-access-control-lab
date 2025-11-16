<script lang="ts">
  import "@fontsource/fusion-pixel-8px-proportional-tc";
</script>

<div
  class=" flex items-center justify-center bg-linear-to-b text-green-300 font-mono px-4 py-8"
  style="font-family: 'Fusion Pixel 8px Proportional TC', monospace;"
>
  <div
    class="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl p-6 sm:p-8 rounded-lg border-2 border-green-500 bg-black/70 shadow-[0_0_25px_#00ff99,0_0_10px_#00ff99_inset]"
  >
    <!-- Glow pulse background -->
    <div class="absolute inset-0 rounded-lg bg-green-500/10 blur-xl animate-pulse -z-10"></div>

    <!-- Header -->
    <div class="text-center mb-5">
      <h2 class="text-2xl sm:text-3xl text-cyan-300 mb-1 tracking-widest animate-flicker">
        SYSTEM LOGIN
      </h2>
      <p class="text-green-400/80 text-xs sm:text-sm">
        Authorized users only – Access will be monitored.
      </p>
    </div>

    <!-- Instruction box -->
    <div class="bg-[#0f0f0f]/70 border border-green-600 p-3 mb-4 rounded text-xs sm:text-sm">
      <h5 class="text-cyan-300 mb-1">ทดลองล็อกอิน:</h5>
      <p class="text-green-400">
        Email : <span class="text-green-200">toby@kmitl.ac.th</span><br />
        Password : <span class="text-green-200">tobynaja</span>
      </p>
    </div>

    <!-- Form -->
    <form
      method="post"
      action="?/login"
      class="flex flex-col gap-2 text-green-300 text-sm"
    >
      <label for="email" class="tracking-wide">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        class="px-2 py-1 border border-green-600 rounded bg-black focus:outline-none focus:ring-2 focus:ring-green-400 text-green-100 placeholder-green-700 text-sm sm:text-base"
        placeholder="example@kmitl.ac.th"
      />

      <label for="password" class="tracking-wide">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        class="px-2 py-1 border border-green-600 rounded bg-black focus:outline-none focus:ring-2 focus:ring-green-400 text-green-100 placeholder-green-700 text-sm sm:text-base"
        placeholder="•••••••"
      />

      <button
        type="submit"
        class="mt-3 border border-green-400 bg-linear-to-b from-green-600 to-green-800 text-black uppercase rounded py-1 text-sm sm:text-base transition-transform transform hover:scale-105 hover:shadow-[0_0_15px_#00ff99] active:translate-y-px"
      >
        Login
      </button>
    </form>

    <!-- Status Text -->
    <div
      class="mt-6 text-center text-xs text-green-600 animate-scanline select-none whitespace-nowrap overflow-hidden text-ellipsis"
    >
      [ Connection Stable - Awaiting Authorization... ]
    </div>
  </div>
</div>

<style>
  /* Flicker effect for LED glow title */
  @keyframes flicker {
    0% {
      opacity: 1;
      text-shadow: 0 0 10px #00ffaa, 0 0 20px #00ffee, 0 0 40px #00ffcc;
    }
    20% {
      opacity: 0.9;
      text-shadow: 0 0 5px #00ffaa, 0 0 15px #00ffaa;
    }
    40% {
      opacity: 1;
      text-shadow: 0 0 25px #00ffcc, 0 0 50px #00ffaa;
    }
    60% {
      opacity: 0.8;
      text-shadow: 0 0 2px #00ffaa;
    }
    100% {
      opacity: 1;
      text-shadow: 0 0 20px #00ffaa, 0 0 40px #00ffee;
    }
  }
  .animate-flicker {
    animation: flicker 1.6s infinite alternate;
  }

  /* Scanline flicker text */
  @keyframes scanline {
    0%, 100% {
      opacity: 0.9;
    }
    50% {
      opacity: 0.4;
    }
  }
  .animate-scanline {
    animation: scanline 1.5s infinite;
  }
</style>