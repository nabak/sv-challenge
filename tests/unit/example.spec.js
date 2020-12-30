import { mount } from "@vue/test-utils";
import Button from "../../src/components/Button.vue";
import iconButton from "../../src/components/IconButton.vue";

describe('Button.vue', () => {

    it('Verifica se contem a classe do botão default primary', () => {
        const wrapper = mount(Button);
        expect(wrapper.classes('button-theme--primary')).toBe(true)
        expect(wrapper.props('theme')).toBe('primary')
    });

    it('Verifica a props default primary', () => {
        const wrapper = mount(Button);
        expect(wrapper.props('theme')).toBe('primary')
    });

    it('Verifica se contem a classe secundary do botão', () => {
        const wrapper = mount(Button, {
            propsData: {
              theme: 'secundary'
            }
        });
        expect(wrapper.classes('button-theme--secundary')).toBe(true)
    });

    it('Verifica a props passada e não requerida do botão', () => {
        const wrapper = mount(Button, {
            propsData: {
              theme: 'secundary'
            }
        });
        expect(wrapper.props('theme')).toBe('secundary')
    });
});

describe('IconButton.vue', () => {

    it('Verifica a renderização sem a props requerida', () => {
        const wrapper = mount(iconButton);
        expect(wrapper);
    });

    it('Verifica a props requerida', () => {
        const wrapper = mount(iconButton, {
            propsData: {
              icon: 'mdi-video-outline'
            }
        });
        expect(wrapper.props('icon')).toBe('mdi-video-outline')
    });

    it('Verifica o click no botão', async () => {
        const wrapper = mount(iconButton);
        await wrapper.trigger('click')
    });

});
