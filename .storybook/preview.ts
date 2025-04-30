import type { Preview } from "@storybook/react";
import { withThemeByDataAttribute } from "@storybook/addon-themes";


import "../src/output.css";

import { withThemeByClassName } from "@storybook/addon-themes";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

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
    withThemeByDataAttribute({
      defaultTheme: "light",
      themes: {
        light: "light",
        dark: "dark",
      },
      attributeName: "data-mode",
    }),
    withThemeByClassName({
      themes: {
        // nameOfTheme: 'classNameForTheme',
        light: "",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;

export const Modal = ({ children }) => {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let portal = document.getElementById('portal');
    if (!portal) {
      portal = document.createElement('div');
      portal.id = 'portal';
      document.body.appendChild(portal);
    }
    setPortalElement(portal);
  }, []);

  if (!portalElement) return null;

  return createPortal(children, portalElement);
};
