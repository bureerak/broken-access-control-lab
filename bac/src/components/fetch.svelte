<script lang="ts">
    import { fly } from "svelte/transition";

    let { id } = $props();
    let username : string = $state("");
    let email : string = $state("");

    async function getData(params:string) {
        const res = await fetch(`/api/profile?id=${params}`);
        const data = await res.json();
        username = data.name;
        email = data.email;
    }
</script>

<div >
    <div class="inline-block bg-[#efc29f] text-gray-700 p-2 mb-4">
        <h5>💡IDOR (Insecure Direct Object Reference)</h5>
        <p class="text-sm">ช่องโหว่ความปลอดภัยที่เกิดขึ้นเมื่อให้ผู้ใช้เข้าถึงข้อมูลหรือทรัพยากรโดยไม่ตรวจสอบสิทธิ์การเข้าถึงให้เพียงพอ</p>
        <br>
        <p>ในส่วนนี้เราจะทดสอบการเข้าถึงข้อมูลผู้ใช้ผ่านทาง API แบบปกติให้สังเกตที่ API ที่ใช้ดึงข้อมูล</p>
    </div>
    <br>
    <button onclick={() => getData(id)} style="font-family: 'Fusion Pixel 8px Proportional TC', sans-serif;" type="submit" class="border rounded px-2 py-0.5 bg-blue-500 text-white">Fetch</button>
    <p id="detail" class=" inline-block bg-[#efc29f]  px-2 py-0.5 rounded">💡 ลอง Inspect ( F12 ) </p>
    <br>
    {#if username}
    <div class="mt-4 inline-block bg-[#ffeed0] border-[3px] border-[#5d3a00] rounded-none p-3 shadow-[4px_4px_0_#5d3a00] text-[#3a2500]" transition:fly={{ y: 10, duration: 400 }}>
    <p class="font-bold">🧑 Name : {username}</p>
    <p>💻 Email : {email}</p>
    </div>
    {/if}
</div>