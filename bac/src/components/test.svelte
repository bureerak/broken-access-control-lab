<script lang="ts">
    import { fly } from "svelte/transition";
    let id : number = $state(0);
    let username : string = $state("");
    let email : string = $state("");
    async function getData(params:string) {
        const res = await fetch(`/api/profile?id=${params}`);
        const data = await res.json();
        username = data.name;
        email = data.email;
    }
</script>

<div>
    <div class="inline-block bg-[#efc29f] text-gray-700 p-2 mb-4">
        <h3>🎲Guessing & Predicting Pattern</h3>
        <p class="text-sm">สังเกตจาก API ที่ใช้สำหรับดึงข้อมูลมีรูปแบบที่สามารถคาดเดา หรือสุ่มหาได้ส่งผลให้ผู้ใช้งานสามารถเข้าถึง API อื่นๆได้โดยตรง</p>
        <p>การขาดการตรวจสอบสิทธิ์ที่ชัดเจนและเข้มงวดส่งผลให้เกิดปัญหาหลักของ Broken Access Control</p>
        <br>
        <p>ให้ทดลองใช้ id (1 ,3) ในการทดสอบเพื่อเข้าถึงข้อมูลผู้ใช้ที่ไม่ใช่ของตนเอง</p>
    </div>

    <div class="mb-3 w-fit bg-[#ffeed0] border-[3px] border-[#5d3a00] p-2 shadow-[4px_4px_0_#5d3a00]">
    <label for="idInput" class="text-[#3a2500] text-sm mr-1">💡 /api/profile?id=</label>
    <input
      id="idInput"
      bind:value={id}
      placeholder="id"
      class="px-1 border-2 border-[#5d3a00] bg-[#fff6ea] text-[#3a2500] w-24 focus:outline-none focus:bg-white text-center inline-block"/>
      <button onclick={() => getData(String(id))} style="font-family: 'Fusion Pixel 8px Proportional TC', sans-serif;" type="submit" class="border rounded px-2 py-0.5 bg-blue-500 text-white inline-block">Fetch</button>
    </div>
    {#if username}
    <div class="mt-4 inline-block bg-[#ffeed0] border-[3px] border-[#5d3a00] rounded-none p-3 shadow-[4px_4px_0_#5d3a00] text-[#3a2500]" in:fly={{ y: 10, duration: 400 }}>
    <p class="font-bold">🧑 Name : {username}</p>
    <p>💻 Email : {email}</p>
    </div>
    {/if}
</div>