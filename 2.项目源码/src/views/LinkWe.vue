<template>
    <div class="contact-container">
        <h1>联系我们</h1>
        <div class="contact-info">
            <p>如果您有任何问题或疑问，请随时与我们联系：</p>
            <ul>
                <li><strong>电子邮件:</strong> contact@artshow.com</li>
                <li><strong>电话:</strong> 123-456-7890</li>
                <li><strong>地址:</strong> 广东省广州市广州软件学院</li>
            </ul>
        </div>
        <form id="contact-form">
            <label for="name">姓名:</label>
            <input type="text" id="name" name="name" placeholder="您的姓名">

            <label for="email">电子邮件:</label>
            <input type="email" id="email" name="email" placeholder="您的电子邮件l">

            <label for="message">留言:</label>
            <textarea id="message" name="message" placeholder="您的留言或建议"></textarea>
            <button type="submit" class="but1">发送</button>
        </form>
        <div id="success-message" style="display: none;">
            发送成功!
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    margin: 0;
    padding: 0;
}

.contact-container {
    max-width: 600px;
    margin: 50px auto;
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
    color: #333;
}

form {
    margin-top: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
    color: #333;
}

input,
textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    resize: none;
}

.but1[type="submit"] {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #337ab7;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}
</style>