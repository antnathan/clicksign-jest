import '@testing-library/dom';
import { render } from "@testing-library/vue";

import { Container } from '.';

const createContainer = (config) => render(Container, config);

describe('Container.vue', () => {
  it("", () => {
    expect(true).toBe(true);
  });
})