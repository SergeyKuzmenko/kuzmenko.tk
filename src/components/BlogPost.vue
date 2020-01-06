<template>
  <div class="blog-post" :id="'id'">
    <div class="card radius shadowDepth1">
      <div class="card__image border-tlr-radius">
        <a :href="url" target="_blank">
          <img alt="Cover" class="border-tlr-radius" :src="cover" />
        </a>
      </div>

      <div class="card__content card__padding">
        <div class="card__action">
          <div class="card__author">
            <img :alt="authorName" :src="authorImg" :title="authorName" />
            <div class="card__author-content">
              <span>{{authorName}}</span>
            </div>
            <time>{{time}}</time>
          </div>
        </div>

        <article class="card__article">
          <h2>
            <a :href="url" target="_blank">{{title}}</a>
          </h2>
          <p v-html="content"></p>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  props: [
    'id',
    'cover',
    'authorName',
    'authorImg',
    'time',
    'url',
    'title',
    'content'
  ]
}
</script>

<style scoped>
*,
*:after,
*:before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.blog-post {
  margin: 10px;
  padding-left: 0.5em;
  padding-right: 0.5em;
}

/**
     * Helpers
     */
.border-tlr-radius {
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

.text-center {
  text-align: center;
}

.radius {
  border-radius: 2px;
}

.shadowDepth1 {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

/**
     * Card Styles
     */

.card {
  background-color: #fff;
  margin-bottom: 1.6rem;
}
@media screen and (max-width: 768px) {
  .card {
    margin-left: 0;
    margin-right: 0;
  }
  .blog-post {
    margin-left: -10px;
    margin-right: -10px;
  }
}

.card__padding {
  padding: 1rem;
}

.card__image {
  min-height: 100px;
  background-color: #eee;
}

.card__image img {
  width: 100%;
  max-width: 100%;
  display: block;
}

.card__content {
  position: relative;
}

/* card meta */
.card__meta {
  margin-top: -0.7rem;
  margin-bottom: 1rem;
}

.card__meta time {
  font-size: 1rem;
  color: #bbb;
  margin-left: 0.5rem;
}

/* card article */
.card__article a {
  text-decoration: none;
  color: #444;
  transition: all 0.5s ease;
}

.card__article a:hover {
  color: #2980b9;
}

/* card action */
.card__action {
  overflow: hidden;
  padding-right: 1rem;
  /*padding-left: 1rem;*/
  padding-bottom: 1rem;
}

.card__author img,
.card__author-content {
  display: inline-block;
  vertical-align: middle;
}

.card__author img {
  width: 40px;
  height: 40px;
  background-color: #eee;
  border-radius: 50%;
  margin-right: 0.6em;
}
.card__author time {
  font-size: 1rem;
  color: #bbb;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
}
</style>
