<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import DettaglioImmobile from './components/DettaglioImmobile.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
    DettaglioImmobile
  }
}
</script>

<template>
  <AppHeader />
  <router-view></router-view>
  <AppFooter />
</template>

<style lang="scss">
@import './styles/generals.scss';
</style>
