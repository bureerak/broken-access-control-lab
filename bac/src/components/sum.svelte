<script lang="ts">
  import { fade, fly, scale } from "svelte/transition";
  let show = $state(false);

  // แสดง effect หลัง component mount เล็กน้อย
  setTimeout(() => (show = true), 400);
</script>

{#if show}
<div in:fade={{ duration: 600 }}>
    <div
      class="min-h-[50vh] flex flex-col justify-center items-center bg-linear-to-b text-green-300 font-mono relative overflow-hidden"
      style="font-family: 'Fusion Pixel 8px Proportional TC', monospace;"
      
      in:scale={{ duration: 600, start: 0.8 }}
    >
      <!-- Background burst effect -->
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,100,0.2),transparent_70%)] animate-pulse blur-2xl"
      ></div>
  
      <!-- Animated glowing ring -->
      <div
        class="absolute w-[250px] h-[250px] border-4 border-green-500 rounded-full animate-spin-slow opacity-40"
      ></div>
      <div
        class="absolute w-[400px] h-[400px] border-[3px] border-cyan-400 rounded-full animate-spin-reverse opacity-20"
      ></div>
  
      <!-- Summary box -->
      <div
        class="relative inline-block z-10 bg-[#001800]/70 border-2 border-green-500 text-green-300 p-6 rounded-lg shadow-[0_0_25px_#00ff99,0_0_15px_#00ffaa_inset]"
        in:fly={{ y: 30, duration: 600 }}
      >
        <h3
          class="text-2xl text-cyan-300 mb-2 uppercase tracking-widest animate-flicker"
        >
          🚩 Mission Summary
        </h3>
        <p class="text-sm text-green-400 leading-snug mb-1">
          หากทดลองใช้ API เส้นนี้กับเว็บเบราเซอร์ที่ไม่มีการล็อคอินจะไม่สามารถทำได้
          เพราะได้มีการตรวจสอบอยู่บ้างแล้ว
        </p>
        <p class="text-sm text-green-400 leading-snug mb-1">
          แต่ข้อผิดพลาดจากการตรวจสอบสิทธิ์ที่ไม่รัดกุม
          จะส่งผลให้สามารถเข้าถึงข้อมูลที่ผู้พัฒนาไม่ได้ตั้งใจให้เข้าถึง
        </p>
        <p class="text-sm text-green-400 leading-snug">
          ซึ่งเป็นสาเหตุหลักของ <strong class="text-cyan-300">Broken Access Control</strong>.
        </p>
      </div>
  
      <!-- Victory text overlay -->
      <div
        class="absolute bottom-8 text-2xl text-green-400 animate-glow select-none"
        in:fade={{ duration: 1000 }}
      >
        ✅ ACCESS SECURED — LAB COMPLETED
      </div>
    </div>

</div>
{/if}

<style>
  /* Victory flicker effect for title */
  @keyframes flicker {
    0% {
      text-shadow: 0 0 15px #00ffaa, 0 0 25px #00ffff;
      opacity: 1;
    }
    50% {
      text-shadow: 0 0 5px #00ffaa;
      opacity: 0.85;
    }
    100% {
      text-shadow: 0 0 25px #00ffaa, 0 0 40px #00ffcc;
      opacity: 1;
    }
  }
  .animate-flicker {
    animation: flicker 1.8s infinite alternate;
  }

  /* slow spinning border circles */
  @keyframes spin-slow {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes spin-reverse {
    0% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  .animate-spin-slow {
    animation: spin-slow 10s linear infinite;
  }
  .animate-spin-reverse {
    animation: spin-reverse 14s linear infinite;
  }

  /* glowing victory text pulse */
  @keyframes glow {
    0% {
      opacity: 0.6;
      text-shadow: 0 0 10px #00ff99;
    }
    50% {
      opacity: 1;
      text-shadow: 0 0 25px #00ffaa, 0 0 40px #00ffcc;
    }
    100% {
      opacity: 0.6;
      text-shadow: 0 0 10px #00ffaa;
    }
  }
  .animate-glow {
    animation: glow 2.5s infinite;
  }
</style>