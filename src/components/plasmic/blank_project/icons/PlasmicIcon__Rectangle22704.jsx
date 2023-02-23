// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Rectangle22704Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 111 26"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#89gM0wgmza)"}>
        <path
          d={"M5 5h101v16H5V5z"}
          fill={"currentColor"}
          fillOpacity={".25"}
        ></path>

        <path d={"M5.5 5.5h100v15H5.5v-15z"} stroke={"currentColor"}></path>
      </g>

      <defs>
        <filter
          id={"89gM0wgmza"}
          x={"0"}
          y={"0"}
          width={"111"}
          height={"26"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feBlend
            in={"SourceGraphic"}
            in2={"BackgroundImageFix"}
            result={"shape"}
          ></feBlend>

          <feGaussianBlur
            stdDeviation={"2.5"}
            result={"effect1_foregroundBlur_28304_436"}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Rectangle22704Icon;
/* prettier-ignore-end */
