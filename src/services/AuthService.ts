// src/services/AuthService.ts

import MSALAuthenticationProvider from 'react-native-msal';
import * as Keychain from 'react-native-keychain';
import IAuthInterface from '../core/interfaces/IAuthInterface';
import { loginConfig, resetPasswordConfig } from '../config/msalAuthConfigs';

const scopes = ['openid', 'offline_access', 'profile'];

class AuthService implements IAuthInterface {
  private provider = new MSALAuthenticationProvider(loginConfig);

  async initialize() {
    await this.provider.init();
  }

  async login() {
    try {
      await this.initialize();
      const result = await this.provider.acquireToken({ scopes });

      if (result?.accessToken) {
        await Keychain.setGenericPassword('accessToken', result.accessToken);
      }

      return result;
    } catch (err: any) {
      if (err.message?.includes('AADB2C90118')) {
        return this.resetPassword();
      }
      throw err;
    }
  }

  async resetPassword() {
    const resetProvider = new MSALAuthenticationProvider(resetPasswordConfig);
    await resetProvider.init();

    const result = await resetProvider.acquireToken({ scopes });

    if (result?.accessToken) {
      await Keychain.setGenericPassword('accessToken', result.accessToken);
    }

    return result;
  }

  async logout() {
    await Keychain.resetGenericPassword();
  }

  async getAccessToken(): Promise<string | null> {
    try {
      const credentials = await Keychain.getGenericPassword();
      if (credentials && typeof credentials === 'object') {
        return credentials.password;
      }
      return null;
    } catch (error) {
      console.error('Error retrieving token:', error);
      return null;
    }
  }
}

export default new AuthService();
