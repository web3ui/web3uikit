import * as React from "react";

interface MultiPropsComponentProps {
  /** Button color. */
  color: "blue" | "green";

  /** Button size. */
  size: "small" | "large";
}

/**
 * This is a component with multiple props.
 */
export const MultiPropsComponent: React.FC<MultiPropsComponentProps> = (
  props
) => <button style={{ backgroundColor: props.color }}>{props.children}</button>;
