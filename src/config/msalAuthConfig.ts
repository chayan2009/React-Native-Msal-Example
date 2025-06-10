import { msalConfig } from './msalConfig';

export const loginConfig = {
  auth: {
    clientId: msalConfig.auth.clientId,
    redirectUri: msalConfig.auth.redirectUri,
    authority: `${msalConfig.auth.authorityBase}/${msalConfig.auth.policies.signUpSignIn}`,
  },
};

export const resetPasswordConfig = {
  auth: {
    clientId: msalConfig.auth.clientId,
    redirectUri: msalConfig.auth.redirectUri,
    authority: `${msalConfig.auth.authorityBase}/${msalConfig.auth.policies.passwordReset}`,
  },
};
