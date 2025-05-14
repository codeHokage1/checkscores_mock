import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Injectable, Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class ProfileService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async getProfile(username: string) {
    const cacheKey = `profile-${username}`;
    const cachedProfile = await this.cacheManager.get<string>(cacheKey);

    if (cachedProfile) {
      return JSON.parse(cachedProfile);
    }

    const profile = {
      username,
      password: 'dummy-password',
      profilePicture: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 10)}.jpg`,
    };

    await this.cacheManager.set(cacheKey, JSON.stringify(profile), 5000); // 5 seconds TTL
    return profile;
  }
}
