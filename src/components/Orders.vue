<template>
  <div class="order-container" @click="handleOpenOrder">
    <div class="img-container">
      <img
        alt="picture"
        src="https://www.dominos.co.in/files/items/Pepper_Barbeque.jpg"
      />
    </div>

    <div class="second-container">
      <div class="order-list">
        <div v-for="item in orderedItem.orderedItems" :key="item._id">
          {{ item.pizza.name }} | {{ item.varient }} |
          {{ item.quantity }}
        </div>
      </div>
      <div class="info-container">
        <div class="date-container">
          <b-icon
            icon="
calendar2-check-fill"
          ></b-icon>
          {{ new Date(orderedItem.createdAt).toLocaleDateString("de-DE") }}
          <b-icon
            icon="
clock-fill"
          ></b-icon>
          {{ new Date(orderedItem.createdAt).toLocaleTimeString("de-DE") }}
        </div>
        <div class="total-container">
          <b-icon icon="cash-stack"></b-icon>{{ "  " }}
          {{ orderedItem.totalPrice }} {{ " KM" }}
        </div>
      </div>
    </div>

    <div class="status-container">
      <div v-if="orderedItem.status === 'Delivered'">
        <b-icon icon="check-circle-fill" variant="success"></b-icon
        >{{ orderedItem.status }}
      </div>
      <div v-else-if="orderedItem.status === 'Rejected'">
        <b-icon icon="x-circle-fill" variant="danger"></b-icon
        >{{ orderedItem.status }}
      </div>
      <div v-else>
        <b-icon icon="dash-circle-fill" variant="warning"></b-icon
        >{{ orderedItem.status }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Orders",
  props: ["id"],
  data() {
    return {
      orderedItem: [],
    };
  },
  methods: {
    async handleOpenOrder() {
      this.$router.push(`/order/${this.orderedItem._id}`);
    },
  },
  async beforeMount() {
    try {
      let response = await axios.get(`/api/orders/order/admin/${this.id}`, {
        headers: { authorization: localStorage.getItem("token") },
      });
      return (this.orderedItem = response.data.data);
    } catch (error) {
      return console.log(error.data);
    }
  },
};
</script>

<style scoped>
.order-container {
  width: 90%;
  margin-left: 5%;
  height: 10rem;
  display: flex;
  flex-direction: row;
  box-shadow: 1px 0px 5px 0px #888;
  cursor: pointer;
  margin-bottom: 1.5rem;
}
.img-container {
  width: 100px;
  margin-left: 1rem;
  height: 100%;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
img {
  object-fit: cover;
  max-width: 100%;
  height: auto;
}
.second-container {
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
}
.order-list {
  min-height: 60%;
  max-height: 60%;
  overflow: auto;
  display: flex;
  flex-direction: column;
}
.info-container {
  margin-top: 0.8rem;
}
.total-container {
  margin-top: 0.4rem;
}
.status-container {
  margin-top: auto;
}
</style>
