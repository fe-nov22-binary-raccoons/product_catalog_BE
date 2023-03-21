export interface User {
  id: number;
  email: string;
  password: string;
  activationToken: string;
}

export interface NormalizedUser {
  id: number;
  email: string;
}
