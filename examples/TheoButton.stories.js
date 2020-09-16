import React from 'react';

import { TheoButton } from './TheoButton';

export default {
  component: TheoButton,
  title: 'Theo Button',
};

export const Size = () => (
  <>
    <TheoButton size="large">Large</TheoButton>
    <TheoButton size="medium">Medium</TheoButton>
    <TheoButton size="small">Small</TheoButton>
  </>
);

export const Variant = () => (
  <>
    <TheoButton variant="primary">Primary</TheoButton>
    <TheoButton size="secondary">Secondary</TheoButton>
  </>
);
