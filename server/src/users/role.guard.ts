import { CanActivate, ExecutionContext, mixin, Type } from '@nestjs/common';
import RequestWithUser from '../auth/requestWithUser.interface';
import { JwtAuthenticationGuard } from '../auth/guards/jwt-auth.guard';
import Permission from '.././utils/types/permission.type';

const PermissionGuard = (permission: Permission): Type<CanActivate> => {
  class PermissionGuardMixin extends JwtAuthenticationGuard {
    async canActivate(context: ExecutionContext) {
      await super.canActivate(context);
 
      const request = context.switchToHttp().getRequest<RequestWithUser>();
      const user = request.user;
 
      return user?.permissions.includes(permission);
    }
  }
 
  return mixin(PermissionGuardMixin);
}
 
export default PermissionGuard;