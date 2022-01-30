<template>
  <div class="profile-container" v-if="user">
    <h1 class="heading">{{ user.username }}</h1>
    <UserDetails
      :name="user.name"
      :email="user.email"
      :phoneNumber="user.phoneNumber"
      :createdAt="user.createdAt"
      :isAdmin="user.isAdmin"
      :active="user.active"
    />
    <div class="button-container">
      <button class="btn-admin" @click="handleAdminRights">
        {{ user.isAdmin ? "REMOVE ADMIN RIGHTS" : "GIVE ADMIN RIGHTS" }}
      </button>
      <button class="btn-admin" @click="handleAccountStatus">
        {{ user.active ? "DEACTIVATE ACCOUNT" : "ACTIVATE ACCOUNT" }}
      </button>
    </div>
    <h2 class="heading">ADDRESSES</h2>
    <div v-for="address in user.addresses" :key="address._id">
      <UserAddress
        :street="address.street"
        :intercom="address.intercom"
        :floor="address.floor"
      />
    </div>
    <h2 class="heading">ORDER HISTORY</h2>
    <div v-if="user.orderHistory.length > 0">
      <div v-for="order in user.orderHistory" :key="order._id">
        <Orders :id="order" />
      </div>
    </div>
    <div
      v-else
      style="display: flex; justify-content: center; align-items: center"
    >
      EMPTY
    </div>
  </div>
  <div v-else-if="loading"></div>
  <div v-else class="empty-container">
    <h1>No users with this username</h1>
  </div>
</template>

<script>
import axios from "axios";
import UserDetails from "./UserDetails.vue";
import UserAddress from "./UserAddress.vue";
import Orders from "./Orders.vue";
export default {
  name: "UserProfile",
  components: { UserDetails, UserAddress, Orders },
  data() {
    return {
      user: undefined,
      loading: true,
    };
  },
  methods: {
    async handleAdminRights() {
      this.loading = true;
      try {
        let response = await axios.post(
          `/api/users/handleAdminRights/${this.$route.params.username}`,
          {},
          { headers: { authorization: localStorage.getItem("token") } }
        );
        this.loading = false;
        return (this.user = response.data.user);
      } catch (error) {
        this.loading = false;
        return console.log(error);
      }
    },
    async handleAccountStatus() {
      this.loading = true;
      try {
        let response = await axios.post(
          `/api/users/handleActiveStatus/${this.$route.params.username}`,
          {},
          { headers: { authorization: localStorage.getItem("token") } }
        );
        this.loading = false;
        return (this.user = response.data.user);
      } catch (error) {
        this.loading = false;
        return console.log(error);
      }
    },
    async getUserDetails() {
      try {
        let response = await axios.get(
          `/api/users/getUserByUsername/${this.$route.params.username}`,
          { headers: { authorization: localStorage.getItem("token") } }
        );
        this.loading = false;
        return (this.user = response.data.user);
      } catch (error) {
        this.loading = false;
        return console.log(error);
      }
    },
  },
  async created() {
    this.getUserDetails();
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
.empty-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
}
.heading {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}
.button-container {
  width: 70%;
  margin-left: 15%;
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
}
.btn-admin {
  margin-left: 10px;
  height: 2rem;
  border-radius: 5px;
  border: none;
  color: white;
  background-color: rgb(201, 30, 30);
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
