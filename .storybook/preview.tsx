import React from "react";
import type { Preview } from "@storybook/nextjs";
import { ImageDecorator } from "./mocks/Image/Decorator";
import fonts from "../src/fonts/index";

import "../src/app/globals.scss";
import "../src/styles/index.scss";

export const decorators = [ImageDecorator];

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
