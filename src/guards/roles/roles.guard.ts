import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { ROLE_KEY } from './roles.decorator';
import { RoleType } from './roles.enum';
import { stringify } from 'querystring';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) { }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<RoleType[]>(ROLE_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    const request = context.switchToHttp().getRequest<{ headers: Record<string, string> }>();
    const adminRole = request.headers['x-admin-role'] as RoleType;
    return requiredRoles.includes(adminRole)

    //const user = request.user;
    //return requiredRoles.includes(user.role);
  }
}
