import { screen } from '@testing-library/react';

export function getByTextContent(textMatch: string | RegExp): HTMLElement {
  return screen.getByText((_content, node) => {
    const hasText = (node: Element) => node.textContent === textMatch;
    const nodeHasText = hasText(node as Element);
    const childrenDontHaveText = Array.from(node?.children || []).every(
      (child) => !hasText(child)
    );
    return nodeHasText && childrenDontHaveText;
  });
}

export async function findByTextContent(
  textMatch: string | RegExp
): Promise<HTMLElement> {
  return screen.findByText((_content, node) => {
    const hasText = (node: Element) => node.textContent === textMatch;
    const nodeHasText = hasText(node as Element);
    const childrenDontHaveText = Array.from(node?.children || []).every(
      (child) => !hasText(child)
    );
    return nodeHasText && childrenDontHaveText;
  });
}
