<template>
  <v-app id="app">
    <v-navigation-drawer v-model="drawer" class="secondary" temporary fixed>
      <v-list>
        <v-list-tile v-for="menuItem in menuItems" style="cursor: pointer">
          <v-list-tile-title :to="menuItem.link"> {{menuItem.title}} </v-list-tile-title>
        </v-list-tile>
        <v-list-group>
          <v-list-tile slot="activator">
            <v-list-tile-title>Galleries</v-list-tile-title>
          </v-list-tile>
          <v-list-tile style="cursor: pointer">
            <v-list-tile-title to="/weddings">
              Weddings
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile style="cursor: pointer">
            <v-list-tile-title to="/engagements">
              Engagements
            </v-list-tile-title>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar   flat class="primary" dark>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title id="logo"><span>MP</span>hoto<span>V</span>ideo</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn class="toolbar" flat>about</v-btn>
        <v-btn class="toolbar" flat>offer</v-btn>
        <v-btn class="toolbar" flat>Gallery</v-btn>
        <v-btn class="toolbar" flat>testimonials</v-btn>
        <v-btn class="toolbar" flat>contact</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        drawer: true,
        menuItems: [{
            title: 'About',
            link: '/about'
          },
          {
            title: 'Offer',
            link: '/offer'
          },
          {
            title: 'Testimonials',
            link: "/testimonials"
          },
          {
            title: 'Contact',
            link: '/contact'
          },
        ],
      }
    }
  }
</script>

<style scoped>
 @import url('https://fonts.googleapis.com/css?family=Nunito:200,400,700|Sacramento');
  #app {
    font-family: 'Nunito', sans-serif;
  }
  .toolbar {
    color: #e8edf3;
  }
  #logo {
    font-family: 'Sacramento', cursive;
    font-size: 2em;
    line-height: 2em;
   
  }
  span {
    color: #e6cf8b;
  }
</style>
