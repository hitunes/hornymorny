<template>
  <div class="compare">
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1">HornyMorny
            <br>vs
            <br>YNAB / Mint / Quicken / Excel / others</h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
      
        <h2 class="title is-1 has-text-centered">HornyMorny vs YNAB</h2>
        <div class="subtitle is-3 has-text-centered">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, excepturi.</div>
        <div class="columns content">
          <div class="column">
            <div class="box">
              <div class="subtitle is-4 has-text-centered">Overview</div>
              <p>
                <b>You can be totally fine without a budget</b>. There's no need to set a budget for each and every category.</p>
              <p>With HoneyMoney:</p>
              <ol>
                <li>Plan all your recurring transactions in a calendar.</li>
                <li>Check out cashflow forecast based on your planned expenses and incomes.</li>
                <li>See how much money you should have reserved for your planned expenses.</li>
                <li>Reserve it.</li>
                <li>Use the rest for unplanned expenses/savings/investments.</li>
              </ol>
              <p>You can set a strict limit for a certain category in HoneyMoney too, but it's not necessary if you don't want
                to.</p>
              <p>HoneyMoney is an easier and more relaxed approach to money than YNAB.</p>
            </div>
          </div>
          <div class="column">
            <div class="box">
              <div class="subtitle is-4 has-text-centered">HornyMorny Cons</div>
              <p>
                <i class="fa fa-minus has-text-danger fa-lg"></i> HoneyMoney doesn't sync with your banking accounts. You track everything manually. (Because you regularly
                pay attention to your finances, you are in control of your money. Nobody can do it for you or better than
                you.)</p>
              <p>
                <i class="fa fa-minus has-text-danger fa-lg"></i> YNAB has a lot of learning resources to explain the method. HoneyMoney is simpler and more flexible,
                so different people use it in different ways.</p>
              <p>
                <i class="fa fa-minus has-text-danger fa-lg"></i> YNAB-method is much stricter, so if you have a really tight financial situation and no understanding
                of how to control your money, then YNAB might work better for you.</p>
              <p>
                <i class="fa fa-minus has-text-danger fa-lg"></i> YNAB has a friendly gigantic community. HoneyMoney is just starting out.</p>
              <p>
                <i class="fa fa-minus has-text-danger fa-lg"></i> Bees are stupid!</p>
              <div class="has-text-centered">
                <img src="/static/stupid.c3dd82dc78dc315eeb1689740058134d.png" style="height: 120px;">
              </div>
            </div>
          </div>
          <div class="column">
            <div class="box">
              <div class="subtitle is-4 has-text-centered">HornyMorny Pros</div>
              <p>
                <span class="icon has-text-success">
                  <i class="fa fa-bank fa-lg"></i>
                </span> HornyMorny doesn't have access to your banking accounts. So no worries about breaching your bank policies
                or losing your real money because of the bug/hack/rogue employee.</p>
              <p>
                <span class="icon has-text-success">
                  <i class="fa fa-refresh fa-lg"></i>
                </span> No problems with syncing transactions either. No syncing — no problems :)</p>
              <p>
                <span class="icon has-text-success">
                  <i class="fa fa-bolt fa-lg"></i>
                </span> HornyMorny  is easier to start. You don't have to setup everything before using it, you just go with the flow.</p>
              <p>
                <span class="icon has-text-success">
                  <i class="fa fa-line-chart fa-lg"></i>
                </span> HornyMorny  is more flexible (accounts/envelopes separation, cashflow-based planning vs monthly budgets).</p>
              <p>
                <span class="icon has-text-success">
                  <i class="fa fa-dollar fa-lg"></i>
                </span> HornyMorny is less expensive. $5/mo or $50/year for HoneyMoney. $84/year for YNAB (no monthly option).</p>
              <p>
                <span class="icon has-text-success">
                  <i class="fa fa-calendar fa-lg"></i>
                </span> Calendar is almost as cool as bees.</p>
              <p>
                <span class="icon has-text-success">
                  <i class="fa fa-exclamation fa-lg"></i>
                </span> And bees are super cool!</p>
              <div class="has-text-centered">
                <img src="/static/vacation.b3dae93edf349533194a088116e88662.png" style="height: 120px;">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Compare',
    data() {
      return {
        msg: 'About Page'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.compare {
    margin-top: 5rem;


  }

</style>