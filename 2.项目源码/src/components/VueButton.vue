<template>
    <div class="button-group">
        <router-link class="but" :to="{ name: 'home' }">全部</router-link>
        <router-link class="but" :to="{ name: 'cartoon' }">动漫</router-link>
        <router-link class="but" :to="{ name: 'oil' }">油画</router-link>
        <router-link class="but" :to="{ name: 'sketch' }">素描</router-link>
        <router-link class="but" :to="{ name: 'object' }">物品</router-link>
        <router-link class="but" :to="{ name: 'character' }">人物</router-link>
    </div>
</template>

<script>
export default {
    name: 'VueButton',
    data() {
        return {
            options: ['全部', '动漫', '油画', '风景', '素描', '物品', '人物'],
            selectedOption: ''
        };
    },
    methods: {
        setSelectedOption(option) {
            this.selectedOption = option;
        },
        clearSelectedOption() {
            this.selectedOption = '';
        }
    }
};
</script>
  
<style scoped>

.button-group {
    display: flex;
    justify-content: center;
    margin: 20px;
}

.but {
    width: 80px;
    height: 35px;
    padding: 8px 16px;
    margin-right: 20px;
    background-color: #f2f2f2;
    border: 1px solid #ccc;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 22px;
    font-weight: 600;
    font-family: cursive;
    text-align: center;
    text-decoration: none;
    line-height: 35px;
}

.but.active {
    background-color: rgb(73, 73, 234);
    color: white;
}

.but:hover {
    background-color: rgb(83, 202, 241);
}

a:visited {
    color: inherit;
}
</style>