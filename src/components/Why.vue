<template>
  <section class="why">
    <section class="hero is-success has-text-centered">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-size-1">
            Expense Tracker and Planner
          </h1>
          <h2 class="subtitle is-size-3">
            designed to help you save more money each month
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container content">
        <div class="has-text-centered">
          <br>
          <div class="subtitle is-5">
            Simple plan for more money and less worry in 3 steps:
          </div>
          <br>
        </div>
        <div class="title is-2 has-text-centered">
          <small style="color: grey;">
            Step 1:
          </small>
          Track ALL your income and expenses
        </div>
        <div class="subtitle is-4 has-text-centered">
          Recording a number is the only commitment you need to make
        </div>
        <div class="columns is-vcentered">
          <div class="column is-narrow is-offset-2">
            <div class="has-text-centered">
              <img src="/static/with_incomes_expenses_eng.a6f549220d8f700a0f180a88a1b8e91c.png" style="width: 100px;">
            </div>
          </div>
          <div class="column is-6">
            <div class="box">
              <p>Changing your money habits sounds like a big task.</p>
              <p>On the other hand, recording a number in HoneyMoney is easy.</p>
              <p>You don't need to restrict yourself in any way.
                <br>
                <b>You can buy anything you want as long as you track it.</b>
              </p>
            </div>
          </div>
        </div>
        <br>
        <div class="title is-2 has-text-centered">
          <small style="color: grey;">
            Step 2:
          </small>
          Notice inefficiencies in your spending
        </div>
        <div class="subtitle is-4 has-text-centered">
          You will see where you're getting value and where you're not
        </div>
        <div class="columns is-vcentered">
          <div class="column is-narrow is-offset-2">
            <div class="has-text-centered">
              <img src="static/with_income_expenses_eng2.ee8a2b1788e80ce5b9312aa5e8be544d.png" style="width: 100px;">
            </div>
          </div>
          <div class="column is-6">
            <div class="box">
              <p>A natural aversion to wastefulness emerges in your daily behaviors, with no self-scolding necessary.</p>
              <p>In other words, the things that tempt you towards trouble become considerably less tempting, and that’s the
                vital point here — tracking your behavior, without striving to change it, gently reduces the amount of willpower
                and self-scolding required to do the right thing.</p>
              <p>Being fully aware of your money naturally changes how you spend it.</p>
            </div>
          </div>
        </div>
        <br>
        <div class="title is-2 has-text-centered">
          <small style="color: grey;">Step 3:</small>
          Optimize for maximum happiness
        </div>
        <div class="subtitle is-4 has-text-centered">
          With the least amount of money spent
        </div>
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <div class="tile is-child box">
              <div class="title is-4 has-text-danger">
                Eliminate money waste
              </div>
              <div class="has-text-centered">
                <img src="/static/warrior.944b1ac7f009d4b35f820d20e8f6af35.png" style="height: 120px;">
              </div>
              <p>Some expenses can be cut or just reduced without losing any happiness.</p>
              <p>You must make those changes.</p>
            </div>
          </div>
          <div class="tile is-parent">
            <div class="tile is-child box">
              <div class="title is-4 has-text-primary">
                Some changes are worth it
              </div>
              <div class="has-text-centered">
                <img src="/static/worker.0607a0ca8414bccb33610133113caddb.png" style="height: 120px;">
              </div>
              <p>You will find places where you have to experience some temporary difficulties adjusting to the new norm. You
                do those gradually, checking if they're worth it for you.
              </p>
            </div>
          </div>
          <div class="tile is-parent">
            <div class="tile is-child box">
              <div class="title is-4 has-text-success">True-happiness zone</div>
              <div class="has-text-centered">
                <img src="/static/love2.e04be060d00f8a72a2074cafb2aab339.png" style="height: 120px;">
              </div>
              <p>Some things just make you truly happy, where you will never cut costs.</p>
              <p>You cherish those things, and optimize all the other places except them.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-light is-bold">
      <div class="hero-body">
        <div class="container content has-text-centered">
          <div class="title is-2">Try HornyMorny Method for Your Finances</div>
          <div class="subtitle is-4">You won't find anything easier and effective at the same time</div>
          <a href="#" class="button is-info is-rounded">👀 See How It Works in Demo</a>
          <span class="is-size-4">&nbsp;&nbsp;&nbsp;&nbsp;or&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <a href="#" class="button is-success is-rounded">✔ Try HornyMorny</a>
           </div>
      </div>
    </section>
  </section>
</template>

<script>
  export default {
    name: "Why",
    data() {
      return {
        msg: "About Page"
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .why {
    margin-top: 5rem;
  }

  .content {
    margin-bottom: 24px;
  }
</style>