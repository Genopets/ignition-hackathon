import React from 'react';

export type DynamicLogoProps = { color?: string };

const DynamicLogo = ({ color }: DynamicLogoProps) => (
  <svg height="80%" x="0px" y="0px" viewBox="0 0 105.95 122.31">
    <path
      fill={color || `#00ffc8`}
      d="M53,121.7l-1.4-0.8L0.5,91.4V30.9l1.4-0.8L53,0.6l52.5,30.3v12h-5.6v-8.8L72.3,18.1l0,1.7c0,3.3,0,6.7,0,7.1
c0.1,3.2,0.1,5-0.8,6.8v0l-0.1,0.1c-1,1.8-2.5,2.6-5.5,4.2l-0.6,0.3c-0.9,0.5-1.9,1-2.7,1.5l-4,2.3l4,2.3c1,0.6,2.1,1.2,3.1,1.7
l0.2,0.1c3,1.7,4.5,2.5,5.5,4.2c1,1.8,1,3.6,0.9,6.9c0,0.8,0,1.8,0,3.8c0,1.9,0,2.9,0,3.8c0.1,3.2,0.1,5-0.8,6.8v0l-0.1,0.1
c-1,1.8-2.5,2.6-5.5,4.2l-0.6,0.3c-0.9,0.5-1.9,1-2.7,1.5l-2.8,1.6c-0.4,0.2-0.9,0.2-1.3,0l-3.2-1.8c-0.4-0.2-0.6-0.6-0.6-1.1
c0-0.5,0.2-0.9,0.6-1.1l4.5-2.6c1.5-0.9,2.4-1.4,3.2-1.8l0.1-0.1c1.8-1,3-1.7,3.2-2c0.2-0.4,0.2-1.8,0.1-3.8l0-0.7
c0-0.2-0.2-0.4-0.4-0.4H39.8c-0.2,0-0.4,0.2-0.4,0.4l0,0.6c0,2-0.1,3.5,0.1,3.9l0.1,0.1c0.2,0.2,0.8,0.6,3.2,1.9l0.3,0.1
c0.8,0.4,1.7,0.9,3.1,1.7h0l1.2,0.7l0,0l15.4,8.9c0.6,0.3,1.2,0.7,1.8,1l1.5,0.8c3,1.7,4.5,2.5,5.5,4.2c1,1.8,1,3.6,0.9,6.9
c0,0.4,0,3.6,0,6.8l0,2l27.6-15.9V64.2L77.4,64v-5.7h28.1v33.1L53,121.7z M27.1,105.7l0.1,0.1L53,120.6l51.5-29.7V59.3H78.4V63
l22.5,0.2v25.6l-0.2,0.1l-29.3,16.9l0-3.8c0-3.2,0-6.4,0-6.8c0.1-3.2,0.1-4.8-0.8-6.3c-0.8-1.5-2.2-2.2-4.8-3.7l0,0l-0.5-0.2
L64,84.3c-0.6-0.3-1.3-0.7-1.8-1l-3.8-2.2l-12.5-7.2l0,0l-0.1,0c-1.4-0.8-2.4-1.4-3.2-1.8l-0.3-0.1c-3.2-1.7-3.6-2.2-3.7-2.5
c-0.3-0.6-0.3-1.8-0.2-4.3l0-0.6c0-0.8,0.7-1.4,1.4-1.4h26.4c0.8,0,1.4,0.6,1.4,1.4l0,0.6c0.1,2.6,0.1,3.8-0.3,4.4
c-0.4,0.6-1.4,1.2-3.6,2.4l-0.1,0.1c-0.8,0.5-1.8,1-3.4,1.9l-4.4,2.5c-0.1,0.1-0.1,0.1-0.1,0.2c0,0.1,0,0.2,0.1,0.2l3.2,1.8
c0.1,0.1,0.2,0.1,0.3,0l2.8-1.6c0.8-0.5,1.8-1,2.7-1.5l0.6-0.3c2.8-1.5,4.2-2.3,5.1-3.8l0.1-0.1c0.9-1.5,0.8-3.1,0.8-6.3
c0-0.9,0-1.8,0-3.8c0-1.9,0-2.9,0-3.8c0.1-3.2,0.1-4.8-0.8-6.4c-0.9-1.5-2.3-2.3-5.1-3.8L65.2,47c-1-0.5-2.1-1.2-3.1-1.7l-5.5-3.2
l5.5-3.2c0.8-0.5,1.8-1,2.7-1.5l0.6-0.3c2.8-1.5,4.2-2.3,5.1-3.8l0.1-0.1c0.9-1.5,0.8-3.1,0.8-6.3c0-0.4,0-3.8,0-7.1l0-3.4
l29.6,17.1v8.4h3.6V31.4l-0.9-0.5L53,1.7L1.5,31.4v59.4l0.9,0.5L27.1,105.7z M39.5,69L39.5,69L39.5,69z M53,116.4l-13.6-7.8
c-0.6-0.4-1-1-1-1.7c0-3.6,0-10.9,0-11.6l0-0.1c-0.1-2.5-0.1-3.7,0.3-4.3c0.4-0.6,1.4-1.2,3.6-2.4l0.3-0.2c0.8-0.4,1.7-0.9,3.2-1.8
l7.3-4.2l7.3,4.2c1.6,0.9,2.5,1.4,3.4,1.9c2.3,1.3,3.3,1.8,3.7,2.4l0.1,0.1c0.3,0.6,0.3,1.8,0.2,4.2l0,0.1c0,0.6,0,5,0,8.5l0,3.1
c0,0.7-0.4,1.4-1,1.8L53,116.4z M46.1,87.4c-1.4,0.8-2.3,1.3-3.1,1.7l-0.3,0.2c-1.8,1-3,1.7-3.2,2c-0.2,0.4-0.2,1.7-0.1,3.8l0,0.1
c0,0.7,0,8,0,11.6c0,0.4,0.2,0.7,0.5,0.9l13.1,7.6l13.1-7.6c0.3-0.2,0.5-0.5,0.5-0.9l0-3.1c0-3.7,0-8,0-8.6l0-0.1
c0-2.1,0.1-3.4-0.1-3.8l0-0.1c-0.3-0.4-1.6-1.1-3.3-2c-0.8-0.4-1.8-1-3.4-1.9l0,0L53,83.4L46.1,87.4z M34.7,105.9L5.1,88.8V33.5
l29.6-17.1l0,3.7c0,3.2,0,6.5,0,6.9c-0.1,3.2-0.1,4.8,0.8,6.4c0.9,1.5,2.3,2.3,5.1,3.8l0.8,0.4c0.9,0.5,1.8,1,2.6,1.4
c5,2.9,10,5.8,15,8.6l1.6,0.9c1.5,0.8,2.4,1.4,3.2,1.8c2.3,1.3,3.4,1.8,3.7,2.4l0.1,0.2c0.3,0.6,0.3,1.8,0.2,4.2l0,0.7
c0,0.8-0.7,1.4-1.4,1.4H39.8c-0.8,0-1.4-0.6-1.4-1.4l0-0.6c-0.1-4.1,0.1-4.4,0.4-4.6c0.4-0.6,1.5-1.1,3.5-2.2l0.1-0.1
c0.9-0.5,1.8-1,3.4-1.9L50,46c0.1-0.1,0.1-0.1,0.1-0.2c0-0.1,0-0.2-0.1-0.2l-3.2-1.8c-0.1-0.1-0.2-0.1-0.3,0l-2.8,1.6
c-0.9,0.5-1.9,1.1-2.8,1.6l-0.5,0.3c-2.8,1.5-4.2,2.3-5.1,3.8L35.4,51c-0.9,1.5-0.8,3.1-0.8,6.3c0,0.8,0,1.8,0,3.8
c0,1.9,0,2.9,0,3.8c-0.1,3.2-0.1,4.8,0.8,6.4c0.9,1.5,2.3,2.3,5.1,3.8l0.9,0.5c0.8,0.4,1.7,0.9,2.4,1.4l5.5,3.2l-5.5,3.2
c-0.9,0.5-1.9,1-2.8,1.5l-0.5,0.3c-2.8,1.5-4.2,2.3-5.1,3.8L35.4,89c-0.9,1.5-0.8,3.1-0.8,6.3c0,0.4,0,3.4,0,6.6L34.7,105.9z
M6.1,88.2l27.6,15.9l0-2.2c0-3.1,0-6.2,0-6.5c-0.1-3.2-0.1-5,0.8-6.8v0l0.1-0.1c1-1.8,2.6-2.6,5.5-4.2l0.5-0.3
c0.9-0.5,1.9-1,2.7-1.5l4-2.3l-4-2.3c-0.8-0.4-1.6-0.9-2.4-1.3L40,76c-3-1.7-4.5-2.5-5.5-4.2c-1-1.8-1-3.6-0.9-6.9
c0-0.8,0-1.8,0-3.8c0-1.9,0-2.9,0-3.8c-0.1-3.2-0.1-5,0.8-6.8v0l0.1-0.1c1-1.8,2.5-2.6,5.5-4.2l0.5-0.3c0.9-0.5,1.9-1.1,2.8-1.6
l2.8-1.6c0.4-0.2,0.9-0.2,1.3,0l3.2,1.8c0.4,0.2,0.6,0.6,0.6,1.1c0,0.5-0.2,0.9-0.6,1.1L46,49.4c-1.5,0.9-2.4,1.4-3.2,1.8l-0.2,0.1
c-1.8,1-3,1.7-3.2,2l-0.1,0.1c-0.1,0.4-0.1,1.4-0.1,3.7l0,0.7c0,0.2,0.2,0.4,0.4,0.4h26.4c0.2,0,0.4-0.2,0.4-0.4l0-0.7
c0-2.1,0.1-3.4-0.1-3.8l0-0.1c-0.3-0.4-1.7-1.2-3.3-2c-0.8-0.4-1.7-1-3.2-1.8l-1.6-0.9c-5-2.9-10-5.8-15-8.6c-0.8-0.5-1.7-1-2.6-1.4
L40,38.1c-3-1.7-4.5-2.5-5.5-4.2c-1-1.8-1-3.6-0.9-6.9c0-0.4,0-3.6,0-6.8l0-1.9L6.1,34.1V88.2z M53,40l-7.3-4.2
c-1.5-0.8-2.4-1.4-3.2-1.8l-0.2-0.1c-2.4-1.3-3.4-1.8-3.7-2.5l-0.1-0.1c-0.3-0.6-0.3-1.8-0.2-4.3c0-0.4,0-3.1,0-5.9
c0-2.1,0-4.2,0-5.7c0-0.7,0.4-1.4,1-1.8L53,5.9l13.6,7.8c0.6,0.4,1,1,1,1.7l0,0.4c0,3.6,0,10.4,0,11.1l0,0.1
c0.1,2.5,0.1,3.7-0.3,4.3c-0.4,0.6-1.4,1.2-3.6,2.4l-0.1,0.1c-0.9,0.5-1.8,1-3.4,1.9L53,40z M46,34.9l0.1,0.1l6.8,3.9l6.9-4
c1.5-0.9,2.4-1.4,3.2-1.8l0.2-0.1c1.8-1,3-1.7,3.2-2c0.2-0.4,0.2-1.7,0.1-3.8l0-0.1c0-0.7,0-7.6,0-11.2l0-0.4c0-0.4-0.2-0.7-0.5-0.9
L53,7l-13.1,7.6c-0.3,0.2-0.5,0.5-0.5,0.9c0,1.5,0,3.6,0,5.7c0,2.8,0,5.5,0,5.9c0,2-0.1,3.5,0.1,3.9l0,0.1c0.3,0.4,1.5,1,3.2,2
l0.2,0.1C43.7,33.6,44.6,34.1,46,34.9z"
    />
  </svg>
);

export default DynamicLogo;