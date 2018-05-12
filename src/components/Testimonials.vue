<template>
  <section class="testimonial">
    <section class="hero  purple has-text-centered">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-size-1">
            Expense Tracker and Planner
          </h1>
        </div>
      </div>
    </section>
    <div class="container content">
      <div class="columns">
        <div class="column is-10 is-offset-1">
          <div class="has-text-centered">
            <div class="title is-3">HornyMorny Users Map</div>
            <div class="subtitle is-5">no bees in Africa yet</div>
            <img width="600" src="/static/testimonials_map.bc648d47d08332f2d210d7c4a04442e3.jpg" class="il_frame">
          </div>
        </div>

      </div>
      <div class="testimonial-container">
        <blockquote>
          <p>I like HoneyMoney a lot. Its design and functionality are amazing. I always wanted to start personal budget but
            used to put it off because it is such a routine and boring process. HoneyMoney is literally a life savior.
            <strong>
            It is interesting and useful.</strong> Thank you so much for this website!</p>
        </blockquote>
        <p class="testimonial-author">Gleb
          <span> (2 years with HoneyMoney)</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Testimonials',
    data() {
      return {
        msg: 'About Page'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .testimonial {
    margin-top: 5rem;


  }

  .purple {
    background-color: purple;
  }
  h1 {
    color: white;
  }

  .content {
    margin-bottom: 24px;
  }
</style>