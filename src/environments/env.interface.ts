
export interface Environment {
  production: boolean,
  formSpreeUrl: string,
  reCaptchaKey: string,
  links: {
    email: string,
    github: string,
    linkedin: string
  }
}