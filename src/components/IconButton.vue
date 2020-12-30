<template>
  <v-btn elevation=0 class='icon-button'
  active-class='' @click='clickButton'>
    <v-icon>{{icon}}</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'IconButton',
  props: {
    icon: { type: String, required: true },
  },
  methods: {
    clickButton() {
      this.icon = (this.icon.includes('-outline')) ? this.icon.replace('-outline', '') : `${this.icon}-outline`;
      console.log('button clicked', this.icon);
    },
  },
};
</script>

<style scoped>
.icon-button{
background: transparent !important;
border-radius: 20px;
width: 34px !important;
min-width: 34px !important;
height: 34px !important;
color: #FFFFFF !important;
}

.icon-button-hover{
background: #39363E !important;
}

.icon-button:hover{
background: #39363E !important;
}
</style>
