export interface CartItem {
  id: string
  count: number
}
export interface User {
  id: number
  email: string
  password: string
  activationToken: string
  refreshToken: string
  cart: string
}

export interface NormalizedUser {
  id: number
  email: string
}
