import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { LoginInput } from './login/login.input';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { username } });

    if (user && bcrypt.compareSync(password, user.password)) {
      return user;
    }

    return null;
  }

  async login(loginInput: LoginInput) {
    const { username, password } = loginInput;

    // validate user using the credsd!

    const user = await this.validateUser(username, password);

    if (!user) {
      throw new HttpException('Invalid Credintials', 404);
    }

    // creating jwt_token

    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
