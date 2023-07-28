export interface PlatformType {
  name: string,
  placeholderUrl: string,
  link: string,
  logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
  color: string,
  validation: RegExp,
}

export interface LinkItemType {
  site: PlatformType,
  link: string,
}

export interface AuthCredentials {
  email: string,
  password: string,
  passwordConfirm?: string,
}