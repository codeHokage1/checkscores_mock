import { Injectable } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class AuthService {
  login(username: string, password: string) {
    console.log('Login attempt:', { username, password });
    const token = 'dummy-token'; // Static token for simplicity
    return {
      message: 'Login successful',
      token,
    };
  }
}
