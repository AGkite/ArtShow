<template>
    <footer class="footer">
        <div class="links">
            <span>&copy;版权所有</span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </footer>
</template>
  
<script>
export default {
    // 组件逻辑或数据可以添加在这里
};
</script>
  
<!-- <style scoped>
.footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: #f2f2f2;
}

.links a {
    margin-right: 10px;
    text-decoration: none;
    color: #333;
}

</style> -->
<style scoped>
.footer {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    padding: 20px;
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .links {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .links span {
    margin: 0 10px;
    color: #333;
    font-size: 14px;
  }
  
  .links span:first-child::before {
    content: '|';
    margin-right: 10px;
  }
  
  .links span:last-child::after {
    content: '|';
    margin-left: 10px;
  }
  
  .links span:hover {
    color: #007bff;
  }
  
  .links span:first-child:hover::before,
  .links span:last-child:hover::after {
    color: #007bff;
  }
</style>