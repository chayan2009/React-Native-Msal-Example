import { MSALResult } from 'react-native-msal';

interface IAuthInterface {
login():Promise<any>;
resetPassword(): Promise<MSALResult | undefined>;
logout():Promise<void>;
getAccessToken():Promise<any>;
}
export default IAuthInterface;
