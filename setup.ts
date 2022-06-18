import '@testing-library/jest-dom';
import { setGlobalConfig } from '@storybook/testing-react';
import { getWorker } from 'msw-storybook-addon';
import * as globalStorybookConfig from './.storybook/preview';

setGlobalConfig(globalStorybookConfig);

afterAll(() => getWorker().resetHandlers());
