import { atom } from "recoil";
import { MockupDataType } from "../types";

type PageType = {
  page: 'links' | 'profile',
}

export const PageState = atom<PageType['page']>({
  key: "Page",
  default: 'links'
});

export const MockupDataState = atom<MockupDataType>({
  key: "MockupData",
  default: {
    links: [],
    profile: {
      profilePictureUrl: '',
      firstName: '',
      lastName: '',
      email: '',
    }
  }
});

