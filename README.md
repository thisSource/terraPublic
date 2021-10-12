## Prequisites

Create a `.env.local` file with the following keys.

```bash
NEXT_PUBLIC_TINK_CLIENT_ID=
TINK_CLIENT_SECRET=
SECRET_COOKIE_PASSWORD=
```

Go to `https://console.tink.com/` and login or signup.
Create an app and go to "App settings > Api client"
Copy the client-id and paste into `NEXT_PUBLIC_TINK_CLIENT_ID`
Next create a client-secret and paste that into `TINK_CLIENT_SECRET`
Last step is to go to `https://1password.com/password-generator/`
and generate unique password with a min-length of 32 characters.
Paste that into `SECRET_COOKIE_PASSWORD`

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
