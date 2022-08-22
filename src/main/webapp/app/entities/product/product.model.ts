import { ICart } from 'app/entities/cart/cart.model';
import { ITag } from 'app/entities/tag/tag.model';

export interface IProduct {
  id: number;
  title?: string | null;
  price?: number | null;
  reviews?: number | null;
  imageURL?: string | null;
  productURL?: string | null;
  cart?: Pick<ICart, 'id' | 'name'> | null;
  tags?: Pick<ITag, 'id' | 'name'>[] | null;
}

export type NewProduct = Omit<IProduct, 'id'> & { id: null };
