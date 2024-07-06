import { CSSProperties } from 'react'

type ColorId = '100' | '300' | '500' | '700' | '900'
export type PalletItem = { color: CSSProperties['color']; id: ColorId }
export type PalletCategory = 'accent' | 'danger' | 'dark' | 'info' | 'light' | 'success' | 'warning'

export type ColorPallet = Record<PalletCategory, PalletItem[]>

export const colors: ColorPallet = {
  accent: [
    { color: '#bea6ff', id: '100' },
    { color: '#a280ff', id: '300' },
    { color: '#8c61ff', id: '500' },
    { color: '#704ecc', id: '700' },
    { color: '#382766', id: '900' },
  ],

  danger: [
    { color: '#ff8099', id: '100' },
    { color: '#f23d61', id: '300' },
    { color: '#cc1439', id: '500' },
    { color: '#990f2b', id: '700' },
    { color: '#660a1d', id: '900' },
  ],

  dark: [
    { color: '#808080', id: '100' },
    { color: '#4c4c4c', id: '300' },
    { color: '#333', id: '500' },
    { color: '#171717', id: '700' },
    { color: '#000', id: '900' },
  ],

  info: [
    { color: '#73a5ff', id: '100' },
    { color: '#4c8dff', id: '300' },
    { color: '#397df6', id: '500' },
    { color: '#2f68cc', id: '700' },
    { color: '#234e99', id: '900' },
  ],

  light: [
    { color: '#fff', id: '100' },
    { color: '#f9f7ff', id: '300' },
    { color: '#f4f2fa', id: '500' },
    { color: '#dcdae0', id: '700' },
    { color: '#c3c1c7', id: '900' },
  ],

  success: [
    { color: '#80ffbf', id: '100' },
    { color: '#22e584', id: '300' },
    { color: '#14cc70', id: '500' },
    { color: '#0f9954', id: '700' },
    { color: '#0a6638', id: '900' },
  ],
  warning: [
    { color: '#ffd073', id: '100' },
    { color: '#e5ac39', id: '300' },
    { color: '#d99000', id: '500' },
    { color: '#960', id: '700' },
    { color: '#640', id: '900' },
  ],
}
