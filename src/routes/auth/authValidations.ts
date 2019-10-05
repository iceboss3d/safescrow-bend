/* eslint-disable @typescript-eslint/ban-ts-ignore */
import * as Express from 'express';

// Route Schemas
import AuthSchema from './AuthSchema';

// Utils | Helpers
import formatJoiErrors from '../../utils/formatJoiErrors';
import { AppResponse } from '../../helpers/AppResponse';

const { createUserSchema } = AuthSchema;

const validateCreateUser = async (
  req: Express.Request,
  res: Express.Response,
  next: Express.NextFunction,
): Promise<Express.NextFunction | void> => {
  try {
    // @ts-ignore
    await createUserSchema.validateAsync(req.body, {
      abortEarly: false,
    });

    return next();
  } catch (errors) {
    return AppResponse.badRequest(res, {
      errors: formatJoiErrors(errors),
    });
  }
};

export { validateCreateUser };
