import React from "react";
import type { Preview } from "@storybook/nextjs";
import fonts from "../src/fonts/index";
import "../src/styles/index.scss";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={fonts.variable}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
