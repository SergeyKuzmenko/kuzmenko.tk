<template>
    <div class="profile-image">
        <div class="profile-card__img" v-on:click="showPhoto">
            <img alt="Me" src="https://www.gravatar.com/avatar/8d10d187365a9aceb2b2d0965ba7dd97?s=200">
        </div>
        <modal 
          name="profile-big-photo"
          classes = "profile-big-photo"
          transition="scale"
          :adaptive="true"
          :height="400"
          :width="400"
        >
        <div 
          slot="top-right"
          class="ct-top-right"
          @click="$modal.hide('profile')"
        >
          ×
        </div>
        <img src="https://www.gravatar.com/avatar/8d10d187365a9aceb2b2d0965ba7dd97?s=400" />
      </modal>
    </div>
</template>

<script>
export default {
  name: 'ProfileImage',
  methods: {
    showPhoto: function() {
      this.$modal.show('profile-big-photo')
    }
  }
}
</script>

<style scoped>
.profile-big-photo {
    background-color: transparent;
    border-radius: 100%;
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.65);
    height: auto;
    img {
      height: 400px;
      width: 100%;
    }
  }
  .ct-top-right {
    cursor: pointer;
    padding-top: 10px;
    padding-right: 30px;
    font-weight: 600;
    font-size: 30px;
    color: white;
    text-shadow: 0 0px 20px black;
  }
  .scale-enter-active,
  .scale-leave-active {
    transition: all 0.5s;
  }
  .scale-enter,
  .scale-leave-active {
    opacity: 0;
    transform: scale(0.3) translateY(24px);
  }
</style>
