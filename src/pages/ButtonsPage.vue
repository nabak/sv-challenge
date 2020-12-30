<template>
  <v-container>
    <v-row>
      <v-col cols='12'> </v-col>
      <v-col>
        <p class='title'>Buttons</p>
        <p class='sub-title'>Button texts must be on UPPERCASE</p>
      </v-col>
      <v-col cols='12'>
        <h2 class='main-guide' style='#FFFFFF'>
          MAIN BUTTONS
          <v-banner style='margin: -10px 0 20px 0'  dark single-line> </v-banner>
        </h2>
      </v-col>
      <!-- dark mode -->
      <v-col cols='2'>
        <h2 class='main-guide'>DARK MODE</h2>
      </v-col>
      <v-col cols='2'>
        <h2 class='col-button sub-title'>MAIN</h2>
      </v-col>
      <v-col cols='2'>
        <h2 class='col-button sub-title'>HOVER</h2>
      </v-col>
      <v-col cols='2'>
        <h2 class='col-button sub-title'>CLICK</h2>
      </v-col>
      <v-col cols='12'></v-col>
      <v-col cols='2'>
        <h2 class='main-guide sub-title'>PRIMARY ACTION</h2>
      </v-col>
      <v-col class='' cols='2' style='text-align-last: center !important'>
        <h2 class='main-guide'>
          <Button :onClick='Click'> LABEL </Button>
        </h2>
      </v-col>
      <v-col cols='2' style='text-align-last: center !important'>
        <h2 class='main-guide'>
          <Button :onClick='Click' class='primary-hover'> LABEL</Button>
        </h2>
      </v-col>
      <v-col cols='2' style='text-align-last: center !important'>
        <h2 class='main-guide'>
          <Button :onClick='Click' class='primary-active'> LABEL</Button>
        </h2>
      </v-col>
      <v-col cols='12'></v-col>
      <v-col cols='2'>
        <h2 class='main-guide sub-title'>SECUNDARY BUTTON</h2>
      </v-col>
      <v-col class='' cols='2' style='text-align-last: center !important'>
        <h2 class='main-guide'>
          <Button :onClick='Click' theme='secundary'> secundary </Button>
        </h2>
      </v-col>
      <v-col cols='2' style='text-align-last: center !important'>
        <h2 class='main-guide'>
          <Button :onClick='Click' theme='secundary' class='secundary-hover'> secundary</Button>
        </h2>
      </v-col>
      <v-col cols='2' style='text-align-last: center !important'>
        <h2 class='main-guide'>
          <Button :onClick='Click' theme='secundary'> secundary</Button>
        </h2>
      </v-col>
      <v-col cols='12'></v-col>
      <v-col cols='2'>
        <h2 class='sub-title'>DISABLED</h2>
      </v-col>
      <v-col class='' cols='2' style='text-align-last: center !important'>
        <h2 class='main-guide'>
          <Button :onClick='Click' disabled> disabled </Button>
        </h2>
      </v-col>
      <v-col cols='2' style='text-align-last: center !important'>
        <h2 class='main-guide'>
          <Button :onClick='Click' disabled> disabled</Button>
        </h2>
      </v-col>
      <v-col cols='2' style='text-align-last: center !important'>
        <h2 class='main-guide'>
          <Button :onClick='Click' disabled> disabled</Button>
        </h2>
      </v-col>
      <v-col cols='12' style='padding: 12px'> </v-col>
      <v-col cols='12'>
        <h2 class='main-guide'>
          ICON BUTTONS
          <v-banner style='margin: -10px 0 10px 0' dark single-line> </v-banner>
        </h2>
      </v-col>
      <v-col cols='2'> </v-col>
      <v-col cols='1'>
        <h2 class='col-button sub-title'>On</h2>
      </v-col>
      <v-col cols='1'>
        <h2 class='col-button sub-title'>Hover</h2>
      </v-col>
      <v-col cols='12'></v-col>
      <v-col cols='2'>
        <h2 class='sub-title'>SECUNDARY ICON</h2>
      </v-col>
      <v-col cols='1' style='text-align-last: center !important'>
      <icon-button @resetIcon='icon = $event' icon='mdi-video-outline'></icon-button>
      </v-col>
       <v-col cols='1' style='text-align-last: center !important'>
      <icon-button class='icon-button-hover' icon='mdi-video-outline'></icon-button>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.primary-hover{
background: #FFF68D 0% 0% no-repeat padding-box;
}

.primary-active{
background: #F4CE00 0% 0% no-repeat padding-box;
}

.secundary-hover{
background: #AEA9B8 0% 0% no-repeat padding-box !important;
color: #E9E5EF !important;
}

.secundary-hover:active{
background: #56525E 0% 0% no-repeat padding-box !important;
color: #AEA9B8 !important;
}
</style>

<script>
import Button from '../components/Button.vue';
import IconButton from '../components/IconButton.vue';

export default {
  components: { Button, IconButton },
  methods: {
    Click() {
      console.log('ok');
    },
  },
  data: () => ({}),
};
</script>
