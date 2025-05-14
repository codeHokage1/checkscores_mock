import { Body, Controller, Post, Res, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(
    @Body() body: { username: string; password: string },
    @Res() res: Response,
  ) {
    if (!body || !body.username || !body.password) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Username and password are required',
        data: null,
      });
    }

    const { username, password } = body;
    const result = this.authService.login(username, password);

    return res.json({
      message: result.message,
      data: {
        token: result.token,
      },
    });
  }
}
