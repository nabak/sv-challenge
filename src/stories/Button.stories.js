/*eslint no-multiple-empty-lines: [2, {max: 2}]*/
import Button from '../components/Button.vue';

export default {
  title: 'Button',
};
export const primaryButton = () => ({
  components: {
    Button
  },
  template: '<Button>Label</Button>',
});
export const secundaryButton = () => ({
  components: {
    Button
  },
  template: '<Button theme="secundary">Label</Button>',
});
