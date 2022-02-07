<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6" lg="4">
        <v-card class="card-shadow">
          <v-card-text>
            <v-row>
              <v-col>
                <span>1. Install TamperMonkey for Chrome</span>
              </v-col>
            </v-row>
            <v-row>
              <v-col align="center">
                <v-btn color="green" dark large @click="onClickTamperMonkey">
                  Open Chrome Webstore
                </v-btn>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <span>4. Go to Tinder.com</span>
              </v-col>
            </v-row>
            <v-row>
              <v-col align="center">
                <v-btn color="green" dark large @click="onClickTinder">
                  Open Tinder
                </v-btn>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <span>5. Create new UserScript </span>
              </v-col>
            </v-row>
            <v-row>
              <v-col align="center">
                <v-btn color="green" dark large @click="onCopyScript">
                  Copy Script to Clipboard
                </v-btn>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <span>6. Share Join link with friends </span>
              </v-col>
            </v-row>

            <v-row>
              <v-col align="center">
                <v-btn color="green" dark large @click="onCopyLink">
                  Copy link to Clipboard
                </v-btn>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <span>7. Start swiping, using left and right arrow keys </span>
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
import axios from "axios";

// await navigator.clipboard.writeText(mytext);
const base_url = window.location.origin;

export default defineComponent({
  beforeMount: async function() {
    const roomName = this.$route.params.roomName;
    try {
      const resp = await axios.get(base_url + "/api/setup/" + roomName);
      this.setupScript = resp.data.outputScript;
    } catch (error) {
      alert("Something went wrong");
    }
  },
  setup(props) {},
  data: () => ({
    setupScript: "",
  }),
  methods: {
    onClickTamperMonkey: async function() {
      const url =
        "https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en";
      window.open(url, "_blank");
    },
    onCopyScript: async function() {
      await navigator.clipboard.writeText(this.setupScript);
    },
    onCopyLink: async function() {
      const roomName = this.$route.params.roomName;

      await navigator.clipboard.writeText(base_url + "/join/" + roomName);
    },
    onClickTinder: async function() {
      const url = "https://tinder.com/app/recs";
      window.open(url, "_blank");
    },
  },
});
</script>
