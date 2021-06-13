// export const clientID: string = process.env.CLIENTID;
// export const clientSecret: any = process.env.CLIENTSECRET;
// export const redirectUri: string = "http://localhost:3000";
// export const callbackUrl: string = "http://localhost:3000/callback";

export interface Config {
  clientID: string;
  clientSecret: string;
}

export function loadConfig(): Config {
  if (process.env.CLIENTID === undefined) {
    throw new Error("Missing CLIENTID from env");
  }
  if (process.env.CLIENTSECRET === undefined) {
    throw new Error("Missing CLIENTSECRET from env");
  }
  return {
    clientID: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
  };
}
