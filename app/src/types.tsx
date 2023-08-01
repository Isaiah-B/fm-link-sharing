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

export interface UserDataType {
  links: { name: string, link: string }[],
  profile: {
    profilePictureUrl: string,
    firstName: string,
    lastName: string,
    email: string,
  }
}

export interface MockupDataType {
  links: PlatformType[],
  profile: {
    profilePictureUrl: string,
    firstName: string,
    lastName: string,
    email: string,
  }
}
export type StringIndex = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [index: string]: any,
}