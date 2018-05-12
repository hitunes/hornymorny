<template>
  <!-- <h1>{{msg}}</h1> -->
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <img src="/static/logo.png">
      </router-link>
      <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbarExampleTransparentExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/Why" active-class="is-active" class="navbar-item">Why it Works</router-link>
        <router-link to="/Testimonials" class="navbar-item">❤️ Testimonials</router-link>
        <router-link to="/Compare" class="navbar-item"> Compare</router-link>
        <router-link to="/Story" class="navbar-item">Story</router-link>
        <router-link to="/Docs" class="navbar-item">How-Tos</router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped" style="flex-wrap: wrap;">
            <p class="control">
              <a href="#" class="button is-info is-rounded"> Demo</a>
            </p>
            <p class="control">
              <a href="#" class="button is-rounded">Login</a>
            </p>
            <p class="control">
              <a href="#" class="button is-success is-rounded"> Get Started</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Navigation',
    data() {
      return {
        msg: 'Header Page!!!'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar {
    position: fixed!important;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    border-bottom: 2px solid #ffdd57;
    height: 5rem;
  }

  .navbar img {
    max-height: 3.5rem;
  }

  .navbar-item {
    padding: .5rem 1rem!important;
  }

  .navbar-item:hover {
    background-color: grey;
    color: #ce7004;
  }

  .navbar-brand {
    align-items: stretch;
    display: flex;
    flex-shrink: 0;
    min-height: 3.25rem;
  }
  .field{
    display: flex;
    justify-content: flex-start;
  }
</style>