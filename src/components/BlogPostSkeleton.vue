<template>
    <div class="blog-post-skeleton">
        <div class="card radius shadowDepth1">
            <div class="post">
                <div class="media"></div>
                <div class="avatar"></div>
                <div class="line"></div>
                <p></p>
                    <div class="line"></div>
                    <div class="line"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'BlogPostSkeleton'
}
</script>

<style scoped>
    .radius {
        border-radius: 2px;
    }
    .shadowDepth1 {
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
        0 1px 2px rgba(0, 0, 0, 0.24);
    }
    .card {
        background-color: #fff;
        margin-bottom: 1.6rem;
    }
    .post {
        width: 100%;
        height: 400px; /* 80 */
    }
    .post .media {
        float: left;
        width: 95%;
        height: 250px;
        background-color: #ccc;
        border-radius: 1%;
        margin: 10px;
        background-image: linear-gradient(90deg, #F4F4F4 0px, rgba(229, 229, 229, 0.8) 40px, #F4F4F4 100%);
        background-size: 90%;
        animation: shine-media 2s infinite ease-out;
    }
    .post .avatar {
        float: left;
        width: 50px;
        height: 50px;
        background-color: #ccc;
        border-radius: 50%;
        margin: 8px;
        background-image: linear-gradient(90deg, #F4F4F4 0px, rgba(229, 229, 229, 0.8) 40px, #F4F4F4 80px);
        background-size: 600px;
        animation: shine-avatar 2s infinite ease-out;
    }
    .post .line {
        float: left;
        width: 70%;
        height: 16px;
        margin-top: 12px;
        margin-right: 12px;
        border-radius: 7px;
        background-image: linear-gradient(90deg, #F4F4F4 0px, rgba(229, 229, 229, 0.8) 40px, #F4F4F4 80px);
        background-size: 600px;
        animation: shine-lines 2s infinite ease-out;
    }
    .post .avatar + .line {
        margin-top: 11px;
        width: 100px;
    }
    .post .line ~ .line {
        background-color: #ddd;
    }
    @keyframes shine-media {
        0% {
            background-position: -100px;
        }
        100% {
            background-position: 1500px;
        }
    }

    @keyframes shine-lines {
        0% {
            background-position: -100px;
        }
        100% {
            background-position: 1000px;
        }
    }
    @keyframes shine-avatar {
        0% {
            background-position: -32px;
        }
        100% {
            background-position: 208px;
        }
    }

</style>
