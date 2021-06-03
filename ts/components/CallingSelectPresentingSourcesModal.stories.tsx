// Copyright 2021 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  CallingSelectPresentingSourcesModal,
  PropsType,
} from './CallingSelectPresentingSourcesModal';

import { setup as setupI18n } from '../../js/modules/i18n';
import enMessages from '../../_locales/en/messages.json';

const i18n = setupI18n('en', enMessages);

const createProps = (): PropsType => ({
  i18n,
  presentingSourcesAvailable: [
    {
      id: 'screen',
      name: 'Entire Screen',
      isScreen: true,
      thumbnail:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P/1PwAF8AL1sEVIPAAAAABJRU5ErkJggg==',
    },
    {
      id: 'window:123',
      name: 'Bozirro Airhorse',
      isScreen: false,
      thumbnail:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z1D4HwAF5wJxzsNOIAAAAABJRU5ErkJggg==',
    },
    {
      id: 'window:456',
      name: 'Discoverer',
      isScreen: false,
      thumbnail:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8HwHwAFHQIIj4yLtgAAAABJRU5ErkJggg==',
    },
    {
      id: 'window:789',
      name: 'Signal Beta',
      isScreen: false,
      thumbnail: '',
    },
    {
      id: 'window:xyz',
      name: 'Window that has a really long name and overflows',
      isScreen: false,
      thumbnail:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+O/wHwAEhgJAyqFnAgAAAABJRU5ErkJggg==',
    },
  ],
  setPresenting: action('set-presenting'),
});

const story = storiesOf(
  'Components/CallingSelectPresentingSourcesModal',
  module
);

story.add('Modal', () => {
  return <CallingSelectPresentingSourcesModal {...createProps()} />;
});
