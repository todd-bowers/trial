import { IUser } from 'app/entities/user/user.model';

export interface ICart {
  id: number;
  name?: string | null;
  handle?: string | null;
  user?: Pick<IUser, 'id' | 'login'> | null;
}

export type NewCart = Omit<ICart, 'id'> & { id: null };
