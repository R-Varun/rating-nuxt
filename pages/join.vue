<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6" lg="4">
        <v-card class="card-shadow">
          <v-card-text>
            <v-card-title>
              Join Room
            </v-card-title>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="userName"
                  label="Name"
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-alert
                v-if="alert"
                v-model="alert"
                border="left"
                close-text="Close Alert"
                color="red accent-4"
                red
                dismissible
              >
                {{ errorMessage }}
              </v-alert>
            </v-row>
            <v-row>
              <v-col align="center">
                <v-btn color="green" dark x-large @click="onJoin">
                  Join Room
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import { addRoom, addUser, getRooms } from "../server-middleware/database.js";
import axios from "axios";

const base_url = window.location.origin;
// this.$router.push('/')
export default defineComponent({
  setup() {},
  data: () => ({
    roomName: "",
    userName: "",
    placeholderName: "",
    alert: null,
    errorMessage: "",
  }),
  watch: {
    userName: function(newUserName, oldUserName) {
      this.placeholderName = newUserName + "'s Room";
    },
  },
  methods: {
    onJoin: async function() {
      const roomName = this.$route.params.roomName;
      const params = { userName: this.userName };

      try {
        const resp = await axios.get(
          base_url + "/api/room/" + roomName + "/join",
          {
            params: params,
          }
        );

        if (!("error" in resp.data)) {
          this.$router.push("/lobby/" + roomName);
        } else {
          console.log(resp.data);
          this.errorMessage = resp.data["error"];
          this.alert = true;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
});
</script>
