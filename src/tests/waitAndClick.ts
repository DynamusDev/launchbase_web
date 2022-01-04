import { RenderResult, fireEvent, Matcher, act } from '@testing-library/react';

const waitAndClick = async (
  screen: RenderResult,
  text: Matcher
): Promise<void> => {
  await screen.findByText(text);
  act(() => {
    fireEvent.click(screen.getByText(text));
  });
};

export default waitAndClick;
