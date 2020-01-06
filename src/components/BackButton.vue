<template>
    <div class="back-button">
        <div class="profile-card__back">
            <a @click="$router.go(-1)" class="link-back" >&#8249; {{$t("to_back")}}</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BackButton"
    };
</script>

<style scoped>
a {
	color: #0033CCFF;
}
.link-back {
	cursor: pointer;
	color: #0033CCFF;
}
</style>