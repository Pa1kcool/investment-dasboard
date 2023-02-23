// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Union2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1799 2372"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#vY0DDNL6A2a)"}>
        <path
          fillRule={"evenodd"}
          clipRule={"evenodd"}
          d={
            "M780.543 2017.17c93.323-41.49 183.012-95.91 267.547-162.35l-2.18-1.97c-130.316-102.55-250.386-226.04-357.431-367.59-76.359-99.93-146.042-208.29-208.281-323.87-.138-.26-.278-.52-.418-.79-.6-1.13-1.213-2.28-1.766-3.39-89.608-167.79-155.745-339.64-196.682-503.966a222.529 222.529 0 01-1.274-5.314c-60.36-246.549-62.861-475.722.82-647.93l-4.549.956c.087-.33.193-.649.318-.956-74.734 14.868-138.46 52.845-186.857 116.378C39.664 182.18 10.28 269.598 0 372.302c.06 15.007.364 30.154.91 45.44-7.551 171.014 32.977 378.81 115.262 597.478.682 2.14 1.41 4.06 2.138 5.97 48.085 125.18 104.398 244.62 168.299 356.95a2662.982 2662.982 0 0062.816 109.27c30.506 50.36 62.862 99.9 97.068 148.63l.864 1.25a2631.143 2631.143 0 0059.45 81.21c65.388 86 135.076 166.17 208.601 239.98l.955.95a2104.783 2104.783 0 0059.996 57.74l2.047-.89 1.365 1.25.772-.36zm932.917 231.11c43.71-57.38 71.69-131.19 84.88-217.23-131.64 74.1-302.85 66.28-486.29-13.49l-.78-.36c-84.47 78.56-173.99 147.33-267.55 205.52l-4.87 2.93 4.87 3.1c120.63 76.08 236.62 123.13 340.33 137.88 136.91 19.46 252.49-17.38 329.41-118.35z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <filter
          id={"vY0DDNL6A2a"}
          x={"0"}
          y={"0"}
          width={"1798.34"}
          height={"2388.3"}
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

          <feOffset dy={"16.663"}></feOffset>

          <feGaussianBlur stdDeviation={"41.657"}></feGaussianBlur>

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
            result={"effect1_innerShadow_28304_400"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Union2Icon;
/* prettier-ignore-end */
