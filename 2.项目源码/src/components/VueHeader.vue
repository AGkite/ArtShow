<template>
    <nav class="navbar">
        <div class="logo">
            <img src="../assets/ArtShow.png" alt="Logo" />
        </div>
        <div class="home">
            <router-link :to="{ name: 'home' }">首页</router-link>
        </div>
        <div class="category">
            <select class="categories" v-model="selectedOption" @change="selectCategory">
                <option value="all" selected>全部</option>
                <option value="油画">油画</option>
                <option value="风景">风景</option>
                <option value="素描">素描</option>
                <option value="物品">物品</option>
                <option value="人物">人物</option>
                <option value="动漫">动漫</option>
            </select>
        </div>
        <div class="about"><router-link :to="{ name: 'linkwe' }">联系我们</router-link></div>
        <div class="search">
            <input type="text" v-model="searchKeyword" placeholder="油画/风景/素描/物品/人物/动漫" required />
            <button @click="search">搜索</button>
        </div>
        <div class="user" v-if="isLoggedIn">
            <img src="/images/user.jpg" alt="" />
            <span>在线：{{ $store.getters.getUsername }}</span>
        </div>
        <div class="auth">
            <transition name="fade" mode="out-in">
                <button v-if="!isLoggedIn" @click="gotoPage('login')" key="login">登录</button>
                <button v-else @click="logout" key="logout">注销</button>
            </transition>
            <transition name="fade" mode="out-in">
                <button v-if="!isLoggedIn" @click="gotoPage('register')" key="reg">注册</button>
            </transition>
        </div>
    </nav>
</template>
  
<script>
export default {
    data() {
        return {
            selectedCategories: [],
            searchKeyword: '',
            selectedOption: 'all'
        };
    },
    methods: {
        gotoPage(page) {
            let path = '';
            if (page === 'home') {
                path = '/';
            } else if (page === 'login') {
                path = '/login';
            } else if (page === 'register') {
                path = '/register';
            }
            // 检查当前路由路径是否与目标路径相同
            if (this.$route.path !== path) {
                this.$router.push(path);
            }
        },
        search() {
            // 处理搜索逻辑
            console.log('Search:', this.searchKeyword);
        },
        logout() {
            // 处理登出逻辑
            //将登录标识设置为false
            this.$store.dispatch('setLoggedIn', false)
        },
        selectCategory() {
            this.$store.dispatch('setSelectedOption', this.selectedOption)
            console.log(this.$store.getters.getSelectedOption)
            let path1 = '';
            if (this.selectedOption === '油画') {
                path1 = "/oil";
            } else if (this.selectedOption === 'all') {
                path1 = "/";
            } else if (this.selectedOption === '风景') {
                path1 = "/landscape";
            } else if (this.selectedOption === '素描') {
                path1 = "/sketch";
            } else if (this.selectedOption === '物品') {
                path1 = "/object";
            } else if (this.selectedOption === '人物') {
                path1 = "/character";
            } else if (this.selectedOption === '动漫') {
                path1 = "/cartoon";
            }
            // 检查当前路由路径是否与目标路径相同
            if (this.$route.path !== path1) {
                this.$router.push(path1);
            }
        },
    },
    mounted() {
        console.log(this.$store);
    },
    computed: {
        isLoggedIn() {
            return this.$store.getters.getIsLoggedIn;
        }
    },

};
</script>
  
<style scoped>
.navbar {
    display: block;
    padding: 10px;
    background-color: #f2f2f2;
    position: relative;
}

.logo img {
    height: 50px;
    width: 180px;
}

.navbar div {
    display: inline;
}

.home {
    position: absolute;
    left: 235px;
    top: 28px;
}

.home a {
    text-decoration: none;
}

.category {
    position: absolute;
    left: 315px;
    top: 22px;
}

.categories {
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    color: #333;
    width: 90px;
    cursor: pointer;
}

.categories:hover {
    border-color: #999;
}

.categories:focus {
    outline: none;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
}

.categories option {
    padding: 8px;
    text-align: center;
}

.about {
    position: absolute;
    left: 445px;
    top: 28px;
}

.about a {
    text-decoration: none;
}

.search {
    position: absolute;
    left: 600px;
    top: 20px;
}

.search input {
    padding: 5px;
    margin-right: 10px;
    width: 400px;
    height: 20px;
}

.search button {
    width: 65px;
    height: 33px;
}

.user {
    position: absolute;
    right: 150px;
    top: 21px;
}

.user img {
    width: 40px;
    height: 40px;
}

.user span {
    color: #36af10;
    position: relative;
    top: -14px;
    left: 10px;
}

.auth {
    position: absolute;
    right: 15px;
    top: 25px;
}

.auth button {
    margin-left: 10px;
    height: 30px;
    width: 65px;
}

.navbar button {
    width: 60px;
    padding: 5px;
    background-color: #2daeee;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
}

/* 动画 */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
  