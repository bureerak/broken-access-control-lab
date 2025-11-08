<script lang="ts">
    let { id } = $props();
    async function getData(params:string) {
        const res = await fetch(`/api/profile?id=${params}`);
        const data = await res.json();
        document.getElementById("detail")!.style.visibility = "visible";
        alert(JSON.stringify(data, null, 2));
        // console.log(data);
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
    <p id="detail" style="visibility: hidden;" class=" inline-block bg-blue-500 text-white px-2 py-0.5 rounded">/api/profile?id=num</p>
</div>