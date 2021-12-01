import { DeepPartial, Theme } from "@chakra-ui/react"

const Button: DeepPartial<Theme["components"]["Button"]> = {
  baseStyle: {
    fontWeight: 400,
    borderRadius: 0,
  },
}

export default Button
