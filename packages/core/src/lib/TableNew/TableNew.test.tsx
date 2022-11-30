// importing boilerplate stuff

import { composeStories } from '@storybook/testing-react';
import { render, screen, fireEvent } from '@testing-library/react';
import * as stories from './TableNew.stories';
import { test, expect, describe } from 'vitest';

// setting my test IDs to match my tsx
export const testCompId = 'test-new-comp';
const testTitle = 'test-new-comp-title';
const testHeading = 'test-new-comp-heading';
const testText = 'test-new-comp-text';
// NOTE: the main test ID is exported incase
// it is needed for another components test

// /////////////////////////////////////////////////////
// examples of basic tests of props, values and styles
// /////////////////////////////////////////////////////
