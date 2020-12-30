<template>
  <button class='button' :class="`button-theme--${theme}`">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    theme: { type: String, default: 'primary' },
  },
  methods: {
  },
};
</script>

<style scoped>
.button {
width: 130px;
height: 40px;
border-radius: 2px;
opacity: 1;
text-transform: uppercase;
font-size: 12px;
font-weight: 700;
border: none !important;
}

.button:disabled {
background:#39363E 0% 0% no-repeat padding-box;
color: #57535F;
border: 1px solid #57535F;
border-radius: 2px;
}

.button-theme--primary {
background: #FFEF33 0% 0% no-repeat padding-box;
color: #39363E;
}

.button-theme--primary:hover {
background: #FFF68D 0% 0% no-repeat padding-box;
}

.button-theme--primary:active {
background: #F4CE00 0% 0% no-repeat padding-box;
}

.button-theme--secundary {
background: #56525E 0% 0% no-repeat padding-box !important;
color: #AEA9B8 !important;
}

.button-theme--secundary:hover {
background: #AEA9B8 0% 0% no-repeat padding-box !important;
color: #E9E5EF !important;
}

.button-theme--secundary:active {
background: #56525E 0% 0% no-repeat padding-box !important;
color: #AEA9B8 !important;
}
</style>
