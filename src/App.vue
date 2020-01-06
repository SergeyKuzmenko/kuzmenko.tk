<template>
    <div id="app">
        <div class="wrapper">
            <div class="profile-card js-profile-card">
                <vue-page-transition name="fade-in-right">
                    <router-view>
                        <Main></Main>
                    </router-view>
                </vue-page-transition>
            </div>
        </div>
    </div>
</template>

<script>
import Main from './components/Main'

export default {
  name: 'App',
  components: {
    Main
  }
}
</script>

<style>
    @import "assets/css/normalize.css";
    @import "assets/css/styles.css";
    .content {
        margin: 10px;
    }
</style>
