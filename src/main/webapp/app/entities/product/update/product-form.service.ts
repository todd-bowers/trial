import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { IProduct, NewProduct } from '../product.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts IProduct for edit and NewProductFormGroupInput for create.
 */
type ProductFormGroupInput = IProduct | PartialWithRequiredKeyOf<NewProduct>;

type ProductFormDefaults = Pick<NewProduct, 'id' | 'tags'>;

type ProductFormGroupContent = {
  id: FormControl<IProduct['id'] | NewProduct['id']>;
  title: FormControl<IProduct['title']>;
  price: FormControl<IProduct['price']>;
  reviews: FormControl<IProduct['reviews']>;
  imageURL: FormControl<IProduct['imageURL']>;
  productURL: FormControl<IProduct['productURL']>;
  cart: FormControl<IProduct['cart']>;
  tags: FormControl<IProduct['tags']>;
};

export type ProductFormGroup = FormGroup<ProductFormGroupContent>;

@Injectable({ providedIn: 'root' })
export class ProductFormService {
  createProductFormGroup(product: ProductFormGroupInput = { id: null }): ProductFormGroup {
    const productRawValue = {
      ...this.getFormDefaults(),
      ...product,
    };
    return new FormGroup<ProductFormGroupContent>({
      id: new FormControl(
        { value: productRawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        }
      ),
      title: new FormControl(productRawValue.title, {
        validators: [Validators.required],
      }),
      price: new FormControl(productRawValue.price, {
        validators: [Validators.required],
      }),
      reviews: new FormControl(productRawValue.reviews, {
        validators: [Validators.required],
      }),
      imageURL: new FormControl(productRawValue.imageURL, {
        validators: [Validators.required],
      }),
      productURL: new FormControl(productRawValue.productURL, {
        validators: [Validators.required],
      }),
      cart: new FormControl(productRawValue.cart),
      tags: new FormControl(productRawValue.tags ?? []),
    });
  }

  getProduct(form: ProductFormGroup): IProduct | NewProduct {
    return form.getRawValue() as IProduct | NewProduct;
  }

  resetForm(form: ProductFormGroup, product: ProductFormGroupInput): void {
    const productRawValue = { ...this.getFormDefaults(), ...product };
    form.reset(
      {
        ...productRawValue,
        id: { value: productRawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */
    );
  }

  private getFormDefaults(): ProductFormDefaults {
    return {
      id: null,
      tags: [],
    };
  }
}
