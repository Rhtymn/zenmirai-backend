export class AuthToken {
  token: string;

  constructor(token: string) {
    this.token = token;
  }
}

export class JWTPayload {
  id: number;
}
