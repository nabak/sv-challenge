<template>
  <v-btn elevation=0 class='icon-button'
  active-class='' @click='clickButton'>
    <v-icon>{{iconName}}</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'IconButton',
  props: {
    icon: { type: String, required: true, default: '' },
  },
  data: () => ({
    iconName: '',
  }),
  created() {
    this.iconName = this.icon;
  },
  methods: {
    clickButton() {
      this.iconName = (this.iconName.includes('-outline')) ? this.iconName.replace('-outline', '') : `${this.iconName}-outline`;
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
