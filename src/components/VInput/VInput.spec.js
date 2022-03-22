import "@testing-library/dom";
import { render } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";

import { VInput } from ".";

const createVInput = (config) => render(VInput, config);
const props = {
  modelValue: '',
  label: 'username'
}

describe("VInput.vue", () => {
  it("emmits event when input is being updating", () => {
    const { getByLabelText, emitted } = createVInput({ props });
    userEvent.type(getByLabelText(props.label), 'johndoe')
    expect(emitted()['update:modelValue']).toHaveLength(7);
  });

  it("update value when props is filled", () => {
    const { getByLabelText } = createVInput({ props: { label: 'username', modelValue: 'john'}});
    const input = getByLabelText(props.label)
    userEvent.type(input, 'doe')
    expect(input).toHaveProperty('value', 'johndoe');
  })

  it("emmits focus event when input is focused", () => {
    const { getByLabelText, emitted } = createVInput({ props });
    getByLabelText(props.label).focus();
    userEvent.keyboard('Johndoe');
    expect(emitted()).toHaveProperty('focusin');
  })

  it("emmits blur when input lost focus", () => {
    const { getByLabelText, emitted } = createVInput({ props });
    getByLabelText(props.label).focus();
    userEvent.keyboard('Johndoe');
    userEvent.click(document.body);
    expect(emitted()).toHaveProperty('focusout');
  })

  it("renders label with prop text", () => {
    const { getByText } = createVInput({ props });
    getByText('username')
  })
});
