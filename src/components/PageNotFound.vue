<template>
    <div class="page page-not-found">
        <div class="content container">
			 <p>{{ $t("page_not_found") }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PageNotFound',
  components: {},
  created: function () {
    this.$nextTick(function () {
      document.title = this.$root.$t('page_not_found')
    })
  }
}
</script>

<style scoped>
div.container {
    height: 10em;
    position: relative;
    min-height: 460px;
}
div.container p {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
}
</style>
