<template>
  <section class="story">
    <section id="star_wars" class="section" style="background-color: black;">
      <div class="container has-text-centered">
        <img id="intro_text" src="static/sw_intro_text.4182aa1ca419e4b54ce4d37ca449a56e.png" class="animated fadeIn" style="display: none;">
        <img id="honey_money_text" src="static/sw_logo.1f3384512430477ae70fd0a44253d33c.png" class="zoomIn animated" style="display: inline;">
      </div>
    </section>
    <section class="hero is-light is-bold">
      <div class="hero-body">
        <div class="container content has-text-centered">
          <div class="title is-2">Bee a happy bee!</div>
          <div class="subtitle is-4 has-text-centered">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus sunt, corrupti pariatur veritatis repellat quae?</div>
          <a href="#"
            class="button is-info is-rounded"> See How It Works in Demo</a>
          <span class="is-size-4">&nbsp;&nbsp;&nbsp;&nbsp;or&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <a href="#" class="button is-success is-rounded"> Try</a>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
  export default {
    name: "Story",
    data() {
      return {
        msg: "Welcome to Hitunes!!!",
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .story {
    margin-top: 5rem;
  }
  .zoomIn{
    animation-name: zoomIn;
  }
  .fadeIn{
    animation-name: fadeIn;
  }
  #intro_text{
    animation-duration: 3s;
    animation-fill-mode: both;
  }
  #honey_money_text{
    animation-duration: 3s;
    animation-fill-mode: both;
  }
  @keyframes zoomIn {
0% {
    opacity: 0;
    -webkit-transform: scale3d(.3,.3,.3);
    transform: scale3d(.3,.3,.3);
}
50% {
    opacity: 1;
}
 }
  @keyframes fadeIn {
0% {
    opacity: 0;
}
100% {
    opacity: 1;
}
 }
</style>