"use server"
import { SvgIcon, SvgIconProps } from "@mui/material"
import { ComponentType } from "react"

export const createSvgIcon = async (SvgComponent: ComponentType<any>) => {

  return (props: SvgIconProps) => (
    <>
      <SvgIcon component={SvgComponent} inheritViewBox {...props} />
    </>
  )
}

