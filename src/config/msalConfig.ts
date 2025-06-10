// src/config/msalConfig.ts

const msalConfig = {
  auth: {
    clientId: 'YOUR_CLIENT_ID_HERE',
    authorityBase: 'https://your-tenant-name.b2clogin.com/your-tenant-name.onmicrosoft.com',
    knownAuthorities: ['your-tenant-name.b2clogin.com'],
    redirectUri: 'msauth.com.blueprint.qa://auth', // Ensure this matches your Azure AD B2C config
    policies: {
      signUpSignIn: 'B2C_1A_SIGNUP_SIGNIN',
      passwordReset: 'B2C_1A_PASSWORD_RESET',
    },
  },
};

export { msalConfig };
