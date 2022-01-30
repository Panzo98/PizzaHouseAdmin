<template>
  <div class="profile-container">
    <div v-for="(item, index) in order.orderedItems" :key="index">
      <div class="item-container">
        <img v-bind:src="item.pizza.image" alt="image" class="img-container" />
        <div class="article-title">
          <h5>ARTICLE</h5>
          {{ item.pizza.name }}
        </div>
        <div class="article-title">
          <h5>VARIANT</h5>
          {{ item.varient }}
        </div>
        <div class="article-title">
          <h5>QUANTITY</h5>
          {{ item.quantity }}
        </div>
      </div>
    </div>
    <div>ADDITIONAL INFO: {{ order.additionalInfo }}</div>
    <div>STATUS: {{ order.status }}</div>
    <div>TOTAL PRICE: {{ order.totalPrice }} KM</div>
    <div>
      ADDRESS: {{ order.address.street }} || {{ order.address.floor }} ||
      {{ order.address.intercom }}
    </div>
    <b-icon
      icon="
calendar2-check-fill"
    ></b-icon>
    {{ new Date(order.createdAt).toLocaleDateString("de-DE") }}
    <b-icon
      icon="
clock-fill"
    ></b-icon>
    {{ new Date(order.createdAt).toLocaleTimeString("de-DE") }}
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Order",
  data() {
    return {
      order: [],
    };
  },

  async beforeMount() {
    try {
      let response = await axios.get(
        `/api/orders/order/admin/getOrder/${this.$route.params.id}`,
        {
          headers: { authorization: localStorage.getItem("token") },
        }
      );
      return (this.order = response.data.order);
    } catch (error) {
      return console.log(error);
    }
  },
};
</script>

<style scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: auto;
  min-height: 600px;
  margin-top: 3rem;
  box-shadow: 0px 0 20px 1px #888;
  margin-bottom: 100px;
  padding-bottom: 100px;
}
.img-container {
  width: 100px;
  margin-left: 1rem;
  height: 100%;
  margin-right: 1rem;
  display: flex;
  object-fit: cover;
  align-items: center;
  justify-content: center;
}
img {
  object-fit: cover;
  max-width: 100%;
  height: auto;
}
.item-container {
  width: 100%;
  margin: 10px 0px;
  height: 75px;
  display: flex;
  flex-direction: row;
}
h5 {
  font-size: 18px;
}
.article-title {
  display: flex;
  flex-direction: column;
  width: 40%;
}
</style>
