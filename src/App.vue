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
    <v-toolbar fixed flat class="primary" dark>
      <v-toolbar-side-icon class="hidden-sm-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link id="logo" to="/"> <span>MP</span>hoto<span>V</span>ideo</router-link>
      </v-toolbar-title>
      <v-divider 
      class="mx-3 hidden-xs-only"
      inset
      vertical
    ></v-divider>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn class="toolbar" flat to="/about">about</v-btn>
        <v-btn class="toolbar" flat to="/offer">offer</v-btn>
        <v-btn class="toolbar" flat to="/gallery">Gallery</v-btn>
        <v-btn class="toolbar" flat to="/testimonials">testimonials</v-btn>
        <v-btn class="toolbar" flat to="/contact">contact</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
    <v-footer id="footer" fixed dark height="auto" color="primary" >
      <v-card flat tile class="footer primary secondary--text text-xs-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-3 secondary--text" icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="footer secondary--text">Coded with <span>❤ </span>by Agata Magier. &copy; 2018 All rights reserved.</v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        drawer: null,
        icons: [
          'fab fa-facebook',
          'fab fa-twitter',
          'fab fa-google-plus',
          'fab fa-linkedin',
          'fab fa-instagram'
        ],
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
    background-color: #e8edf3;
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
  .footer {
    margin: 0 auto;
  }
</style>
