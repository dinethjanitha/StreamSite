import 'jsonwebtoken';

declare module 'jsonwebtoken' {
  export interface JwtPayload {
    name: string; // Add the 'name' property
  }
}