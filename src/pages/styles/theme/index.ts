import { extendTheme } from "@chakra-ui/react"

import { Button } from "./components/Button"

export const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
  },
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, serif",
  },
  components: {
    Button,
  },
})