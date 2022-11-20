import { UserRole } from "./models/roles.interface";
import { CanActivate, ExecutionContext, mixin, Type } from '@nestjs/common';
import RequestWithUser from "../auth/requestWithUser.interface";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";


const RoleGuard = (role: UserRole): Type<CanActivate> => {
    class RoleGuardMixin extends JwtAuthGuard {
        async canActivate(context: ExecutionContext) {
            await super.canActivate(context);

            const request = context.switchToHttp().getRequest<RequestWithUser>();
            const user = request.user;

            return user?.roles.includes(role);
        }
    }


    return mixin(RoleGuardMixin);
}

export default RoleGuard;
// $ nest g module casl
// $ nest g class casl/casl-ability.factory