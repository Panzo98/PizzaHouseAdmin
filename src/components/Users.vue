<template>
  <div>
    <form class="filter-container" @submit.prevent="handleFilter">
      <input type="text" placeholder="Username" v-model="username" />
      <input type="text" placeholder="Name" v-model="name" />
      <input type="text" placeholder="Email" v-model="email" />
      <input type="text" placeholder="Phone Number" v-model="phoneNumber" />
      <label>
        User Type:
        <select v-model="isAdmin">
          <option :value="null">All</option>
          <option :value="false">Users</option>
          <option :value="true">Admins</option>
        </select>
      </label>
      <label>
        Active Status:
        <select v-model="active">
          <option :value="null">All</option>
          <option :value="true">Active</option>
          <option :value="false">Inactive</option>
        </select>
      </label>
      <button>FILTER</button>
    </form>
    <div class="table-container">
      <b-table
        striped
        hover
        :items="items"
        :fields="fields"
        @row-clicked="handleRowClick"
        table-variant="light"
        style="cursor: pointer"
      ></b-table>
    </div>
    <div class="pagination-container">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        @change="handlePaginationChange"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Users",
  data() {
    return {
      username: "",
      name: "",
      email: "",
      phoneNumber: "",
      isAdmin: null,
      active: null,
      currentPage: 1,
      perPage: 10,
      rows: 0,
      isFiltered: false,
      items: [],
      fields: ["username", "name", "email", "phoneNumber", "isAdmin", "active"],
    };
  },
  methods: {
    handleRowClick(record) {
      this.$router.push(`users/${record.username}`);
    },
    async handlePaginationChange(page) {
      if (!this.isFiltered) {
        try {
          let users = await axios.post(
            "/api/users/getUsersPaginated",
            { page },
            { headers: { authorization: localStorage.getItem("token") } }
          );
          this.rows = users.data.count;
          this.items = users.data.users;
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          let users = await axios.post(
            "/api/users/getFilteredUsers",
            {
              page,
              username: this.username,
              name: this.name,
              email: this.email,
              phoneNumber: this.phoneNumber,
              isAdmin: this.isAdmin,
              active: this.active,
            },
            { headers: { authorization: localStorage.getItem("token") } }
          );
          this.rows = users.data.count;
          this.items = users.data.users;
        } catch (error) {
          console.log(error);
        }
      }
    },
    async handleFilter() {
      try {
        let users = await axios.post(
          "/api/users/getFilteredUsers",
          {
            page: 1,
            username: this.username,
            name: this.name,
            email: this.email,
            phoneNumber: this.phoneNumber,
            isAdmin: this.isAdmin,
            active: this.active,
          },
          { headers: { authorization: localStorage.getItem("token") } }
        );
        this.rows = users.data.count;
        this.items = users.data.users;
        this.currentPage = 1;
        this.isFiltered = true;
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    try {
      let users = await axios.post(
        "/api/users/getUsersPaginated",
        { page: 1 },
        { headers: { authorization: localStorage.getItem("token") } }
      );
      this.rows = users.data.count;
      this.items = users.data.users;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
.table-container {
  width: 90%;
  margin-left: 5%;
}
.pagination-container {
  display: flex;
  justify-content: center;
}
.filter-container {
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f8f9fa;
  height: 3rem;
  margin-left: 5%;
  margin-top: 3rem;
}
</style>
