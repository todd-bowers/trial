import { ICart, NewCart } from './cart.model';

export const sampleWithRequiredData: ICart = {
  id: 50053,
  name: 'Forward Music input',
  handle: 'Data Designer',
};

export const sampleWithPartialData: ICart = {
  id: 46460,
  name: 'empower Specialist Wooden',
  handle: 'copying',
};

export const sampleWithFullData: ICart = {
  id: 67480,
  name: 'Small',
  handle: 'Cotton',
};

export const sampleWithNewData: NewCart = {
  name: 'Buckinghamshire Customer',
  handle: 'Account',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
