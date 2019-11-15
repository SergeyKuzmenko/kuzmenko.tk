<template>
    <div class="back-button">
        <div class="profile-card__back">
            <a @click="$router.go(-1)" class="link-back" href="#">&#8249; Back</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BackButton"
    }
</script>

<style scoped>

</style>