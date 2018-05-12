<template>
  <div id="app">
    <Navigation/>
    
    <main>
      <router-view/>
    </main>

    <Footer/>
    <!-- router
    which page we are currently on  -->
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default {
  name: "App", //or target with  el: "#app",
  components: {
    Navigation,
    Footer
  }
};
</script>

<style scoped>

/* adding scoped declares as global */
</style>
