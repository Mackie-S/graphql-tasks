import { ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

export class GqlAuthGuard extends AuthGuard('local') {
  constructor() {
    super();
  }

  // RESTのメソッドのオーバーライド
  getRequest(context: ExecutionContext) {
    // GraphQL用実行コンテキスト
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext();
    request.body = ctx.getArgs().signInInput;
    return request;
  }
}
