import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { Payload } from '../dto/jwt-payload.dto';

export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): Payload => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
