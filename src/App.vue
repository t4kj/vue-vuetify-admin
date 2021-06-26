<template>
  <v-app>
    <v-fade-transition>
      <router-view></router-view>
    </v-fade-transition>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
::-webkit-scrollbar {
  width: 0;
}
</style>
