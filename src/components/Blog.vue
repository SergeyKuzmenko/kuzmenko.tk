<template>
    <div class="page page-blog">
        <!--<BackButton></BackButton>-->
        <div class="content">
            <h3 class="content-header">{{$t("blog")}}</h3>
            <p v-if="loading">
                <BlogPostSkeleton></BlogPostSkeleton>
            </p>
                <BlogPost
                v-if="!loading"
                v-for="post in posts"
                :key="post.id"

                :id="post.id"
                :cover="post.better_featured_image.source_url"
                authorName="Sergey Kuzmenko"
                authorImg="https://secure.gravatar.com/avatar/8d10d187365a9aceb2b2d0965ba7dd97?s=48&d=mm&r=g"
                :time="formatDate(post.date)"
                :url="post.link"
                :title="post.title.rendered"
                :content="post.excerpt.rendered"
                >
                </BlogPost>
            <div class="profile-card-ctr" v-if="!loading">
                <a href="https://blog.kuzmenko.tk" target="_blank" style="margin-bottom: 20px">
                    <button class="profile-card__button button--orange">{{$t("seeAllPosts")}}</button>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import BackButton from '../components/BackButton'
    import BlogPost from '../components/BlogPost'
    import BlogPostSkeleton from '../components/BlogPostSkeleton'

    export default {
        name: "Blog",
        data: function(){
          return{
              loading: true,
              posts: []
          }
        },
        components: {
            BackButton,
            BlogPost,
            BlogPostSkeleton
        },
        created: function(){
          this.getPosts();
        },
        methods: {
            getPosts: function () {
                let self = this;
                fetch('https://blog.kuzmenko.tk/wp-json/wp/v2/posts/')
                    .then(function(response) {
                        return response.json();
                    })
                    .then(function(data) {
                        self.posts = data.slice(0, 3);
                        self.loading = false;
                    })
                    .catch(error => console.log(error));
            },
            formatDate: function(string){
                let date = new Date(string);
                let year = date.getFullYear();
                let month = date.getMonth()+1;
                let dt = date.getDate();

                if (dt < 10) {
                    dt = '0' + dt;
                }
                if (month < 10) {
                    month = '0' + month;
                }
                return dt + '/' + month + '/' + year;
            }
        }
    }
</script>

<style scoped>
.content-header {
    display: flex;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
@media screen and (max-width: 768px) {
    .content {
        margin-left: 0;
        margin-right: 0;
    }
}
</style>