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
                <v-text-field label="Room Name" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col align="center">
                <v-btn  color="green" dark x-large>
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
