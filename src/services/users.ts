import { User } from '../types/User.js';

export const normalize = ({ id, email }: User) => ({ id, email });
