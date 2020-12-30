<template>
  <v-app>
    <v-app-bar app dark elevation='1' dense class='dark'>
      <v-app-bar-nav-icon @click='drawer = !drawer'></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main class='bg-content'>
      <v-navigation-drawer
        v-model='drawer'
        absolute
        floating
        dark
        class='dark menuDraw'
      >
        <v-list nav dense style='padding: 40px 0 0 0; text-align: -webkit-center;'>
          <v-list-item-group
            v-model='group'
          >
            <v-img
              lazy-src='https://picsum.photos/id/11/10/6'
              max-height='50'
              max-width='100'
              src='./assets/images/icon.png'
            ></v-img>
            <v-list-item class='menu-item' to='/'>
              <v-list-item-title style='font-size: 12px;' >DESIGN GUIDE
              </v-list-item-title>
            </v-list-item>
            <v-list-item class='menu-item' to='/buttons'>
              <v-list-item-title style='font-size: 12px;'>BUTTONS</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-container style='margin: 0 0 0 216px'>
        <transition name='slide'>
         <router-view></router-view>
        </transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },
  data: () => ({
    drawer: true,
    group: null,
  }),
};
</script>
