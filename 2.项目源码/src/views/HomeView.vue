<template>
  <div>
    <VueButton></VueButton>
    <div id="contain" v-if="this.selectedCategory === '' || this.selectedCategory === 'all'">
      <div class="items" v-for="artwork in this.artworks" :key="artwork.id">
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
        <span class="like" @click="incrementLikes(artwork)"><img src="../assets/爱心.svg" alt="">{{ artwork.likes }}</span>
        <div class="hover-info" @mouseover="showInfo(artwork.author, artwork.date)">
          <!-- 鼠标悬停时显示的信息 -->
          <span class="author-info">{{ artwork.author }}</span>
          <span class="date-info">{{ artwork.date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import VueButton from '@/components/VueButton.vue';

export default {
  name: 'HomeView',
  props: ['option'],
  components: {
    VueButton,
  },
  data() {
    return {
      artworks: [],
      selectedCategory: '',
      hoverAuthor: '',
      hoverDate: ''
    };
  },
  methods: {
    showInfo(author, date) {
      this.hoverAuthor = author;
      this.hoverDate = date;
    },
    incrementLikes(artwork) {
      artwork.likes += 1;
    }
  },
  created() {
    const selectedOption = this.$store.getters.getSelectedOption;
    console.log(selectedOption)
    axios.get(`/data/all.json`) // 替换为不同的画作类型
      .then(response => {
        this.artworks = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  },
  computed: {
    filteredArtworks() {
      if (this.selectedCategory === '' || this.selectedCategory === 'all') {
        return this.artworks;
      } else {
        console.log(111)
        return this.artworks.filter(artwork => artwork.tags.includes(this.selectedCategory));
      }
    }
  },
  watch: {
    '$store.getters.selectedOption'(newValue) {
      this.selectedCategory = newValue;
    }
  },
  mounted() {
    this.likes = parseInt(this.$route.query.likes);
  }
}
</script>

<style scoped>
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