import { hashSync } from 'bcrypt';

export const hashPasswordTransform = {
  to(password: string): string {
    console.log({ password });
    return hashSync(password, 10);
  },
  from(hash: string): string {
    return hash;
  },
};
