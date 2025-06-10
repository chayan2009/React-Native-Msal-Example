import * as Keychain from 'react-native-keychain';

export default class TokenStorage {
    async saveToken(token: string): Promise<void> {
        try {
            await Keychain.setGenericPassword('accessToken', token);
        } catch (error) {
            console.error('Error saving token:', error);
        }
    }

    async getToken(): Promise<string | null> {
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

    async clearToken(): Promise<void> {
        try {
            await Keychain.resetGenericPassword();
        } catch (error) {
            console.error('Error clearing token:', error);
        }
    }
}
