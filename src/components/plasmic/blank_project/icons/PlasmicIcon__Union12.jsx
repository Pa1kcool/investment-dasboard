// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Union12Icon(props) {
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

      <g filter={"url(#evgK6TGWEa)"}>
        <path
          fillRule={"evenodd"}
          clipRule={"evenodd"}
          d={
            "M8.008 3.659l.027.059c.435-.875.631-1.705.545-2.362-.05-.374-.19-.693-.43-.932C7.921.192 7.617.054 7.26 0c.306.632.292 1.474-.002 2.379a8.5 8.5 0 01.75 1.28zM6.45 5.956c.164-.176.32-.353.466-.533l-.003-.007a7.545 7.545 0 00-.604-1.187c-.297.421-.63.816-.993 1.18A8.724 8.724 0 013.61 6.747l-.01.006c-.4.24-.825.437-1.266.587l-.01.004H2.32c-.875.291-1.693.32-2.32.05.063.313.196.582.405.791.367.368.918.502 1.572.431.495-.054 1.048-.225 1.623-.502l.024-.011a8.574 8.574 0 001.539-.97l.004-.003a9.926 9.926 0 001.279-1.17l.004-.004z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <filter
          id={"evgK6TGWEa"}
          x={"0"}
          y={"0"}
          width={"8.6"}
          height={"9.33"}
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
            result={"effect1_innerShadow_28304_533"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Union12Icon;
/* prettier-ignore-end */
