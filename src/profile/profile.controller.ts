import { Controller, Get, Query, Res } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { Response } from 'express';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}
  @Get()
  async getProfile(@Query('username') username: string, @Res() res: Response) {
    const response = await this.profileService.getProfile(username);
    return res.json({
      message: 'Profile fetched successfully',
      data: response,
    });
  }
}
