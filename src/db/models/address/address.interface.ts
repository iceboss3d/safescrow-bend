// eslint-disable-next-line
// @ts-ignore
// eslint-disable-next-line
import * as SequelizeTypes from '@types/sequelize';
import { UserAttributes } from '../user/user.interface';

export interface AddressAttributes {
  id?: number;
  addressType: 'Delivery' | 'Home';
  city: string;
  state: string;
  line1: string;
  line2?: string;
  landMark?: string;
  userId?: string | number;
  createdAt?: Date;
  updatedAt?: Date;
  User?: UserAttributes | UserAttributes['id'];
}

export interface AddressInstance
  extends SequelizeTypes.Instance<AddressAttributes>,
    AddressAttributes {
  // At the moment, there's nothing more to add apart
  // from the methods and attributes that the types
  // `Sequelize.Instance<AddressAttributes>` and
  // `AddressAttributes` give us. We'll add more here when
  //  we get on to adding associations.
}
