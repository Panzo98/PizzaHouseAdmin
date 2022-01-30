<template>
  <b-container class="bv-example-row" style="width: 100%">
    <b-row>
      <b-col>Street: {{ street }}</b-col>
      <b-col>Intercom: {{ intercom }}</b-col>
      <b-col>Floor: {{ floor }}</b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "UserAddress",
  props: ["street", "intercom", "floor"],
};
</script>

<style scoped>
.address-container {
  display: flex;
  width: 100%;
  justify-content: center;
}
</style>
