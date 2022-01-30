<template>
  <div>
    <div v-if="isError" class="error-modal animate__bounceIn">
      {{ this.errorMessage }}
    </div>
    <div class="login-container">
      <div class="log-lbl">ADMIN LOGIN</div>
      <form>
        <div class="log-input-container">
          <input
            v-model="username"
            class="log-input"
            type="text"
            placeholder="Username"
          />
          <input
            v-model="password"
            class="log-input"
            type="password"
            placeholder="Password"
          />
        </div>
        <div class="log-btn-container">
          <button class="login-btn" @click.prevent="handleClick">LOGIN</button>
          <button class="back-btn" @click.prevent>BACK</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      isError: false,
      errorMessage: "",
    };
  },
  methods: {
    ...mapActions(["setUser"]),
    async handleClick() {
      try {
        let response = await axios.post("/api/users/adminLogin", {
          username: this.username,
          password: this.password,
        });
        this.setUser(response.data.user);
        localStorage.setItem("token", response.data.jwt);
      } catch (error) {
        this.isError = true;
        this.errorMessage = error.response.data.message;
        setTimeout(() => {
          this.isError = false;
        }, 4000);
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 500px;
  background-color: white;
  margin: auto;
  margin-top: 100px;
  box-shadow: 0px 0 20px 1px #888;
}

.log-lbl {
  display: flex;
  height: 100px;
  font-size: 2.125rem;
  justify-content: center;
  align-items: center;
}
.log-input-container {
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-left: 15%;
  min-height: 200px;
  justify-content: center;
  align-items: center;
}
.log-input {
  margin-bottom: 40px;
  width: 70%;
  height: 45px;
}
.log-btn-container {
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-left: 30%;
}
.login-btn {
  margin-bottom: 10px;
  height: 45px;
  border: none;
  background-color: lightseagreen;
  color: white;
  border-radius: 5px;
}
.login-btn:hover {
  background-color: blueviolet;
}
.back-btn {
  margin-bottom: 10px;
  height: 45px;
  border: none;
  background-color: brown;
  color: white;
  border-radius: 5px;
}
.error-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(190, 73, 73);
  color: white;
  width: 14rem;
  height: 3rem;
  border-radius: 15px;
  margin: auto;
  margin-top: 2.5rem;
}
@media screen and (max-width: 525px) {
  .login-container {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 500px;
    background-color: white;
    margin: auto;
    margin-top: 100px;
    box-shadow: 0px 0 20px 1px #888;
  }
  .log-input {
    margin-bottom: 40px;
    width: 90%;
    height: 45px;
  }
  .log-btn-container {
    display: flex;
    flex-direction: column;
    width: 70%;
    margin-left: 15%;
  }
}
</style>
