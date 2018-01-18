import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { setOptions } from '@storybook/addon-options';
import { addDecorator, configure } from '@storybook/react';

import 'milligram/dist/milligram.css';
import 'react-select/dist/react-select.css';

// See https://github.com/storybooks/storybook/tree/master/addons/options
setOptions({
  name: 'Reblocks',
  downPanelInRight: true
});

addDecorator(withKnobs);

addDecorator(story => {
  return <div>{story()}</div>;
});

const req = require.context('../src', true, /story.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
