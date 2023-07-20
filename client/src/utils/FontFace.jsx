import React from "react";
import { Helmet } from "react-helmet";

const FontFace = ({ fontFamily, fontFormat, fontUrl }) => {
  const fontFaceStyle = `
        @font-face {
            font-family: '${fontFamily}';
            src: url(${fontUrl}) format('${fontFormat}')
        }
        `;
  return (
    <Helmet>
      <style>{fontFaceStyle}</style>
    </Helmet>
  );
};

export default FontFace;
