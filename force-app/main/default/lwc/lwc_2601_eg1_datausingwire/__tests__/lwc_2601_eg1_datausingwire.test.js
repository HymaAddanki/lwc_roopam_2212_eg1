import { createElement } from 'lwc';
import Lwc_2601_eg1_datausingwire from 'c/lwc_2601_eg1_datausingwire';

describe('c-lwc-2601-eg1-datausingwire', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-lwc-2601-eg1-datausingwire', {
            is: Lwc_2601_eg1_datausingwire
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});