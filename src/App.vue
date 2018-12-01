<template>
  <v-app id="app">
    <v-navigation-drawer v-model="drawer" class="secondary" temporary fixed>
      <v-list>
        <v-list-tile v-for="menuItem in menuItems" style="cursor: pointer">
          <v-list-tile-title :to="menuItem.link" class="drawer_item"> {{menuItem.title}} </v-list-tile-title>
        </v-list-tile>
        <v-divider></v-divider>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar   flat class="primary" dark>
      <v-toolbar-side-icon class="hidden-sm-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title >
        <router-link id="logo" to="/"> <span>MP</span>hoto<span>V</span>ideo</router-link>
       </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn class="toolbar" flat to="/about">about</v-btn>
        <v-btn class="toolbar" flat to="/offer">offer</v-btn>
        <v-btn class="toolbar" flat to="/gallery">Gallery</v-btn>
        <v-btn class="toolbar" flat to="/testimonials">testimonials</v-btn>
        <v-btn class="toolbar" flat to="/contact">contact</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        drawer: null,
        menuItems: [{
            title: 'About',
            link: '/about'
          },
          {
            title: 'Offer',
            link: '/offer'
          },
          {
            title: 'Gallery',
            link: 'gallery'
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
    font-size: 1.7em;
   cursor: pointer;
   color: #e8edf3;
   text-decoration: none;
  }
  span {
    color: #e6cf8b;
  }
  .drawer_item {
  font-size: 1.7em;  
  }
</style>
