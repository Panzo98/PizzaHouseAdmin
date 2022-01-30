<template>
  <b-list-group class="details-container">
    <b-list-group-item class="item"
      ><p>Name:</p>
      <p>{{ name }}</p></b-list-group-item
    >
    <b-list-group-item class="item"
      ><p>E-Mail:</p>
      <p>{{ email }}</p></b-list-group-item
    >
    <b-list-group-item class="item"
      ><p>Phone Number:</p>
      <p>{{ phoneNumber }}</p></b-list-group-item
    >
    <b-list-group-item class="item"
      ><p>Account created at:</p>
      <p>
        {{ new Date(createdAt).toLocaleString("de-DE") }} h
      </p></b-list-group-item
    >
    <b-list-group-item class="item"
      ><p>Active:</p>
      <p>{{ active ? "Active" : "Inactive" }}</p></b-list-group-item
    >
    <b-list-group-item class="item"
      ><p>Admin:</p>
      <p>{{ isAdmin ? "Yes" : "No" }}</p></b-list-group-item
    >
  </b-list-group>
</template>

<script>
export default {
  name: "UserDetails",
  props: ["name", "email", "phoneNumber", "createdAt", "active", "isAdmin"],
};
</script>

<style scoped>
.details-container {
  width: 90%;
  margin-left: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
}
.item {
  width: 80%;
  display: flex;
  justify-content: space-between;
}
p {
  margin: 0;
}
</style>
