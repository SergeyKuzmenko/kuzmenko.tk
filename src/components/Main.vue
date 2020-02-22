<template>
  <div class="page page-main">
    <div class="content">
      <ChangeLang class="change-lang"></ChangeLang>
      <ProfileImage></ProfileImage>
      
      <div class="profile-card__cnt js-profile-cnt">
        <div class="profile-card__name">{{$t("full_name")}}</div>
        <div class="profile-card-loc">
          <span class="profile-card-loc__icon">
            <svg class="icon">
              <use xlink:href="#icon-location" />
            </svg>
          </span>
          <span class="profile-card-loc__txt">{{$t("location")}}</span>
        </div>

        <div class="profile-card-social">
          <a
            v-for="link in this.links"
            :key="link.name"
            :href="link.url"
            :title="link.name"
            :class="'profile-card-social__item ' + link.name"
            target="_blank"
          >
            <span class="icon-font">
              <svg class="icon">
                <use :xlink:href="'#icon-' + link.name" />
              </svg>
            </span>
          </a>
        </div>

        <div class="profile-card-inf">
          <router-link to="/cv">
            <div class="profile-card-inf__item">
              <div class="profile-card-inf__title">{{$t("cv")}}</div>
            </div>
          </router-link>

          <router-link to="/blog">
            <div class="profile-card-inf__item">
              <div class="profile-card-inf__title">{{$t("blog")}}</div>
            </div>
          </router-link>

          <!--<router-link to="/projects">-->
          <!--<div class="profile-card-inf__item">-->
          <!--<div class="profile-card-inf__title">Projects</div>-->
          <!--</div>-->
          <!--</router-link>-->
        </div>
      </div>
    </div>
    <Icons></Icons>
  </div>
</template>
<script>
import Icons from '../components/Icons'
import ProfileImage from './ProfileImage'
import Links from '../assets/data/social'

import ChangeLang from '../components/ChangeLang'

export default {
  name: 'Main',
  data: function () {
    return {
      links: Links
    }
  },
  created: function () {
    this.$nextTick(function () {
      document.title = this.$root.$t('full_name')
    })
  },
  components: {
    Icons,
    ProfileImage,
    ChangeLang
  }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}
.profile-card-inf__title:hover {
  text-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
}
.change-lang {
  position: absolute;
  margin-left: auto;
  margin-right: 20px;
}
</style>
