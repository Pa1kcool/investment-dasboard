// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Union8Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 9"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#UjQeEEoDDa)"}>
        <path
          fillRule={"evenodd"}
          clipRule={"evenodd"}
          d={
            "M3.724 7.345c.445-.15.873-.349 1.277-.59l-.01-.008a8.724 8.724 0 01-1.706-1.339A9 9 0 012.29 4.23l-.002-.003-.008-.012a7.07 7.07 0 01-.945-1.855C1.048 1.462 1.036.627 1.34 0l-.022.003L1.32 0C.963.054.66.192.428.424.19.664.05.982 0 1.356c0 .054.002.11.004.165-.036.623.158 1.38.55 2.176a8.78 8.78 0 00.813 1.322 9.468 9.468 0 00.763.939l.004.004a10.238 10.238 0 001.28 1.17l.004.003c.095.073.19.143.286.21l.01-.003.006.005.004-.002zm4.45.841c.208-.209.342-.478.405-.79-.628.269-1.445.24-2.32-.05l-.004-.001c-.403.286-.83.536-1.277.748l-.023.01.023.012c.576.277 1.13.448 1.624.502.653.071 1.205-.063 1.572-.43z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <filter
          id={"UjQeEEoDDa"}
          x={"0"}
          y={"0"}
          width={"8.579"}
          height={"9.331"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feBlend
            in={"SourceGraphic"}
            in2={"BackgroundImageFix"}
            result={"shape"}
          ></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset dy={".696"}></feOffset>

          <feGaussianBlur stdDeviation={"1.739"}></feGaussianBlur>

          <feComposite
            in2={"hardAlpha"}
            operator={"arithmetic"}
            k2={"-1"}
            k3={"1"}
          ></feComposite>

          <feColorMatrix
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"}
          ></feColorMatrix>

          <feBlend
            in2={"shape"}
            result={"effect1_innerShadow_28304_509"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Union8Icon;
/* prettier-ignore-end */
