import { View } from 'backbone.marionette';

import { storiesOf } from '@storybook/marionette';

storiesOf('Demo', module).add(
  'button',
  () =>
    new View({
      template: () => '<button id="my_button">some button</button>',
      ui: {
        button: '#my_button',
      },
      triggers: {
        'click @ui.button': 'click',
      },
      onClick() {
        console.log('button clicked');
      },
    })
);
