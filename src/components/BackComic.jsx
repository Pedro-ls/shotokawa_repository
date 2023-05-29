"use client"

import { useLayoutEffect } from "react";

export default ({ children }) => {
   useLayoutEffect(() => {
      document.body.style.backgroundImage = "url(/background_quad.png)";
  }, [])
   return (
      <>
         {children}
      </>
   );
}