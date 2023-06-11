import { ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

export class JwtAuthGuard extends AuthGuard('jwt') {
  // RESTのメソッドのオーバーライド
  getRequest(context: ExecutionContext) {
    // GraphQL用実行コンテキスト
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
}
