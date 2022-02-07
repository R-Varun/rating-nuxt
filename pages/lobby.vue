<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6" lg="4">
        <v-card class="card-shadow">
          <v-card-text>
            <v-row>
              <v-col>
                <v-card>
                  <v-img
                    :src="currentImage"
                    height="400"
                    class="grey darken-4"
                  ></v-img>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col align="center">
                <v-btn color="error" dark x-large @click="onDown">
                  <v-icon large color="orange darken-2">
                    mdi-arrow-down-bold-box-outline
                  </v-icon>
                </v-btn>
              </v-col>
              <v-col align="center">
                <v-btn color="success" x-large @click="onUp">
                  <v-icon large color="orange darken-2">
                    mdi-arrow-up-bold-box-outline
                  </v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <pre>
                  <code>
                      {{roomState}}
                  </code>
              </pre>
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
import { io } from "socket.io-client";

const base_url = window.location.origin;
// this.$router.push('/')
export default defineComponent({
  mounted: async function() {
    await this.setupSocket();
  },
  setup() {},
  data: () => ({
    currentImage: "https://picsum.photos/350/165?random",
    roomName: "",
    userName: "",
    placeholderName: "",
    alert: null,
    errorMessage: "",
    socket: null,
    resps: "",
    roomState: {},
  }),
  watch: {
    userName: function(newUserName, oldUserName) {
      this.placeholderName = newUserName + "'s Room";
    },
  },
  methods: {
    setupSocket: async function() {
      const roomName = this.$route.params.roomName;

      await axios.get(base_url + "/api/init").then(async (resp) => {
        this.socket = io();
        this.socket.emit("subscribe", { roomName: roomName });
        this.socket.on("dispatchUpdate", async (req) => {
          console.log("UPDATING CLIENT");
          await this.onUpdate();
        });
      });

      await this.onUpdate();
    },
    onUpdate: async function() {
      const roomName = this.$route.params.roomName;
      const resp = await axios.get(base_url + "/api/room/" + roomName + "/get");
      this.roomState = resp.data;
      if (resp.data.curImg) {
        this.currentImage = resp.data.curImg;
      }
    },
    onDown: async function() {
      this.sendVote("down");
    },
    onUp: async function() {
      this.sendVote("up");
    },
    sendVote: async function(dir) {
      const roomName = this.$route.params.roomName;
      const params = { dir: dir };
      await axios.get(base_url + "/api/game/" + roomName + "/vote", {
        params: params,
      });
      await this.notifyUpdate();
    },
    notifyUpdate: async function() {
      const roomName = this.$route.params.roomName;
      this.socket.emit("notifyUpdate", { roomName: roomName });
    },
    onJoin: async function() {
      //   const roomName = this.$route.params.roomName;
      //   try {
      //     const resp = await axios.get(base_url + "/api/room/me");
      //     alert(JSON.stringify(resp.data));
      //   } catch (error) {
      //     console.log(error);
      //   }
    },
  },
});
</script>
