import { IProduct } from 'app/entities/product/product.model';

export interface ITag {
  id: number;
  name?: string | null;
  entries?: Pick<IProduct, 'id'>[] | null;
}

export type NewTag = Omit<ITag, 'id'> & { id: null };
