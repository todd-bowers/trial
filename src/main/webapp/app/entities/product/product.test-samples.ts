import { IProduct, NewProduct } from './product.model';

export const sampleWithRequiredData: IProduct = {
  id: 77672,
  title: 'Customer-focused',
  price: 96307,
  reviews: 78560,
  imageURL: 'Brand Programmable',
  productURL: 'Bedfordshire',
};

export const sampleWithPartialData: IProduct = {
  id: 54568,
  title: 'recontextualize',
  price: 71472,
  reviews: 304,
  imageURL: 'synthesizing SAS',
  productURL: 'Automotive Assurance',
};

export const sampleWithFullData: IProduct = {
  id: 33131,
  title: 'Customer-focused Island',
  price: 13074,
  reviews: 35902,
  imageURL: 'Incredible',
  productURL: 'Dynamic encompassing vertical',
};

export const sampleWithNewData: NewProduct = {
  title: 'circuit',
  price: 80012,
  reviews: 81908,
  imageURL: 'intuitive SDR',
  productURL: 'Intelligent structure lime',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
