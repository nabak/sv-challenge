import { mount } from "@vue/test-utils";
import Button from "../../src/components/Button.vue";

describe('Button.vue', () => {
    it('Verifica se contem a classe do botão default primary', () => {
        const wrapper = mount(Button);
        expect(wrapper.classes('button-theme--primary')).toBe(true)
    });
});
