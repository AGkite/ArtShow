<template>
    <div class="author">
        <div class="author-header">
            <img :src="author.path" alt="Author Image" class="author-image" />
            <div class="author-details">
                <h2>{{ author.name }}</h2>
                <p>{{ author.description }}</p>
            </div>
        </div>
        <div class="author-artworks">
            <div id="contain">
                <div class="items" v-for="artwork in this.authorArtworks" :key="artwork.id">
                    <router-link :to="{
                        name: 'detail',
                        query: {
                            name: artwork.name,
                            path: artwork.path,
                            desc: artwork.description,
                            likes: artwork.likes,
                            author: artwork.author,
                            comment: JSON.stringify(artwork.comments)
                        }
                    }">
                        <img class="item-img" :src="artwork.path" :alt="artwork.name" />
                    </router-link>
                    <span class="name">{{ artwork.name }}</span>
                    <span class="like"><img src="../assets/爱心.svg" alt="">{{ artwork.likes }}</span>
                    <div class="hover-info" @mouseover="showInfo(artwork.author, artwork.date)">
                        <!-- 鼠标悬停时显示的信息 -->
                        <span class="author-info">{{ artwork.author }}</span>
                        <span class="date-info">{{ artwork.date }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            author: null,
            authorArtworks: []
        };
    },
    mounted() {
        this.loadAuthorData();
    },
    methods: {
        loadAuthorData() {
            // 使用axios导入作者数据
            axios.get(`/data/作者.json`)
                .then(response => {
                    const authorsData = response.data;
                    this.author = authorsData.authors.find(author => author.name === this.$route.params.author);
                    this.loadArtworksData();
                })
                .catch(error => {
                    console.log(error);
                });
        },
        loadArtworksData() {
            // 使用axios导入作品数据
            axios.get(`/data/all.json`)
                .then(response => {
                    const artworksData = response.data;
                    this.authorArtworks = artworksData.filter(artwork => artwork.author === this.$route.params.author);
                    console.log(artworksData);
                    console.log(this.$route.params.author)
                    console.log(this.authorArtworks)
                })
                .catch(error => {
                    console.log(error);
                });
        },
        showInfo(author, date) {
            this.hoverAuthor = author;
            this.hoverDate = date;
        }
    },
    computed: {
        // filteredArtworks() {
        //     return this.authorArtworks.filter(artwork => this.author.artworks.includes(artwork.id));
        // }
    }

};
</script>
  
<style scoped>
.author-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    margin-left: 141px;
    width: 1100px;
}

.author-image {
    width: 220px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
}

.author-details {
    display: flex;
    flex-direction: column;
}

.author-details span {
    margin-bottom: 5px;
}

/* 作者列表 */
#contain {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.items {
    width: 250px;
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.name {
    font-size: 18px;
    font-weight: 800;
}

.item-img {
    width: 240px;
    height: 360px;
}

.like {
    width: 25px;
    position: relative;
    left: 60px;
}

.like img {
    width: 25px;
    position: relative;
    top: 7px;
}

.items:hover {
    transform: scale(1.05);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* 悬停显示作者信息 */
.hover-info {
    display: none;
    width: 120px;
    height: 36px;
    position: absolute;
    top: 315px;
    left: 65px;
    background-color: rgba(255, 255, 255, 0.6);
    padding: 8px;
    border: 1px solid #ccc;
}

.hover-info span {
    display: block;
}

.items:hover .hover-info {
    display: block;
    /* 鼠标悬停时显示 */
    /* 可根据需要自定义位置、样式等 */
}
</style>
  