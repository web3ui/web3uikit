declare module 'react-qr-code' {
  import * as React from 'react'

  export interface QRCodeProps extends React.HTMLProps<SVGElement> {
    value: string
    size?: number // defaults to 128
    bgColor?: string // defaults to '#FFFFFF'
    fgColor?: string // defaults to '#000000'
    level?: 'L' | 'M' | 'Q' | 'H' // defaults to 'L'
  }

  class QRCode extends React.Component<QRCodeProps, any> {}

  export default QRCode
}
