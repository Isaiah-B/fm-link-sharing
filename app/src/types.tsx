export interface PlatformType {
  name: string,
  placeholderUrl: string,
  link: string,
  logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
  color: string,
  validation: RegExp,
}

export interface AuthCredentials {
  email: string,
  password: string,
  passwordConfirm?: string,
}

export interface LinksDataType {
  links: { name: string, link: string }[],
  profile: {
    image: string | null,
    firstName: string,
    lastName: string,
    email: string,
  }
}

export type StringIndex = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [index: string]: any,
}