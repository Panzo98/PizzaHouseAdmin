<template>
  <div class="card-container">
    <b-card
      @click="() => changeRoute('users')"
      title="Users"
      img-src="https://cdni.iconscout.com/illustration/premium/thumb/user-profile-2839460-2371086.png"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2 card"
    >
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </b-card-text>

      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
    <b-card
      @click="() => changeRoute('pizzas')"
      title="Pizzas"
      img-src="https://us.123rf.com/450wm/spinchuk/spinchuk1711/spinchuk171100040/89266938-pizza-di-sketch-fast-food-illustrazione-disegnata-a-mano-su-sfondo-bianco.jpg?ver=6"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2 card"
    >
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </b-card-text>

      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
    <b-card
      @click="() => changeRoute('orders')"
      title="Orders"
      img-src="https://cdni.iconscout.com/illustration/premium/thumb/delivery-in-covid-19-season-2709576-2252782.png"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2 card"
    >
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </b-card-text>

      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
    <b-card
      @click="() => changeRoute('categories')"
      title="Categories"
      img-src="https://us.123rf.com/450wm/sabelskaya/sabelskaya1607/sabelskaya160700071/60096119-set-of-various-pizza-pieces-sketch-style-vector-illustration-isolated-on-white-background-slices-of-.jpg?ver=6"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2 card"
    >
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </b-card-text>

      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  methods: {
    changeRoute(route) {
      console.log(route);
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
.card {
  cursor: pointer;
}
.card-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 5rem;
}

@media screen and (max-width: 525px) {
  .card-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 5rem;
  }
}
</style>
