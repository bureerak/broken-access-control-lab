<script lang="ts">
    import '@fontsource/fusion-pixel-8px-proportional-tc';
</script>

<div class="">
    <div class=" inline-block bg-[#efc29f] text-gray-700 p-2 mb-4">
        <h5>ก่อนที่จะเริ่มการทดสอบในส่วนนี้ ทดลองล็อกอินด้วยชื่อผู้ใช้ดังนี้</h5>
        <p>Email : toby@kmitl.ac.th<br>Password : tobynaja</p>
    </div>
    <form method="post" action="?/login" class="">
        <label for="email">Email:</label>
        <br>
        <input type="text" name="email" id="email" class="px-0.5 border rounded"/>
        <br>
        <label for="password">Password:</label>
        <br>
        <input type="password" name="password" id="password" class="px-0.5 border rounded"/>
        <br>
        <button style="font-family: 'Fusion Pixel 8px Proportional TC', sans-serif;" type="submit" class="border rounded px-2 py-0.5 mt-2 bg-blue-500 text-white">Login</button>
    </form>
</div>
