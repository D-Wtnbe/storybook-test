import MyButton from './Button.vue';

export default {
  title: 'MyButton',
  component: MyButton,
};

export const Basic = (args, { argTypes }) => ({
  components: { MyButton },
  template: '<my-button @click="onClick" :label="label" />',
  props: Object.keys(argTypes),
});