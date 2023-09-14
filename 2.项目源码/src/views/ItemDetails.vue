<template>
  <div class="item-detail">
    <div class="left-section">
      <img :src="path" alt="" />
    </div>
    <div class="right-section">
      <div class="top-section">
        <span class="name">{{ name }}</span>
        <router-link :to="'/author/'+author" style="text-decoration: none;"><span class="author">作者: {{ author }}</span></router-link>
        <span class="desc">{{ description }}</span>
        <span class="like1" style="display:inline;">❤️ {{ likes }}</span>
        <button @click="incrementLikes">点赞</button>
      </div>
      <div style="margin-top: 10px;margin-bottom: 10px;">评论：</div>
      <div class="new-comment-section">
        <input type="text" v-model="newComment" class="custom-input" placeholder="输入评论" require>
        <button @click="addComment">发表评论</button>
      </div>
      <div class="comments-section">
        <div v-for="comment in comments" class="comment" :key="comment.user">
          <div class="user-info">
            <img src="/images/user.jpg" alt="" />
            <span class="user">{{ comment.user }}</span>
          </div>
          <span class="message">{{ comment.message }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      name: '',
      path: '',
      description: '',
      likes: 0,
      author: '',
      comments: [],
      username: '',
      newComment: '',
    };
  },
  created() {
    const comments = JSON.parse(this.$route.query.comment);
    this.comments = comments;
  },
  mounted() {
    this.name = this.$route.query.name;
    this.path = this.$route.query.path;
    this.description = this.$route.query.desc;
    this.likes = parseInt(this.$route.query.likes);
    this.author = this.$route.query.author;
  },
  methods: {
    incrementLikes() {
      this.likes++;
    },
    addComment() {
      this.username = this.$store.getters.getUsername
      if (this.username !== "" && this.newComment !== "") {
        this.comments.push({
          user: this.username,
          message: this.newComment
        });
        this.username = "";
        this.newComment = "";
      }
    },
  }
};
</script>
  
<style scoped>
.item-detail {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.left-section {
  flex: 1;
  margin-right: 20px;
}

.left-section img {
  width: 100%;
  height: 574px;
  border-radius: 5px;
}

.right-section {
  flex: 2;
  margin-left: 50px;
  height: 540px;
}

.right-section span {
  margin: 0;
}

.right-section button {
  padding: 8px 16px;
  margin-left: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.right-section button:hover {
  background-color: #0056b3;
}

.top-section span {
  display: block;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  word-break: break-word;
}

.name {
  text-align: center;
  font-family: cursive;
  font-size: 30px;
  font-weight: 600;
}

.author {
  height: 70px;
  font-size: 18px;
  font-weight: 600;
  line-height: 70px;
}

.desc {
  height: 80px;
  line-height: 30px;
  font-size: 17px;
}

.like1 {
  height: 50px;
  line-height: 50px;
  font-size: 18px;
}


.comments-section > * {
  margin-top: 15px; 
}

.comments-section img {
  width: 20px;
}

.custom-input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    outline: none;
    /* 可根据需要自定义其他样式属性，例如背景色、宽度等 */
  }
</style>
  