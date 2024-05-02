"use client";
import GaugeComponent from "react-gauge-component";

//Component with default values

export default function Gauge({ value, ...rest }) {
  return <GaugeComponent {...rest} value={value} />;
}
