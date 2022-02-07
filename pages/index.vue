<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6" lg="4">
        <v-card class="card-shadow">
          <v-card-text>
            <v-card-title>
              New Room
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
              <v-col>
                <v-text-field
                  v-model="roomName"
                  v-bind="roomName"
                  :placeholder="placeholderName"
                  label="Room Name"
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col align="center">
                <v-btn color="green" dark x-large @click="onCreate">
                  Create Room
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
  }),
  watch: {
    userName: function(newUserName, oldUserName) {
      this.placeholderName = newUserName + "'s Room";
    },
  },
  methods: {
    onCreate: async function() {
      const params = { roomName: this.roomName, owner: this.userName };
      console.log(params);

      try {
        const resp = await axios.get(base_url + "/api/room/create", {
          params: params,
        });

        this.$router.push("/setup/" + this.roomName);
      } catch (error) {
        console.log(error);
        alert("Something went wrong");
      }

      // if (roomAddedSuccessfully) {
      //   this.$router.push("/lobby");
      // } else {
      //   alert("Please enter a different Room name/ User");
      // }
    },
  },
});
</script>
