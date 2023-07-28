import { useRecoilState } from 'recoil'

import LinkItem from '../link-item/link-item.component';
import ListEmpty from '../list-empty/list-empty.component';

import useValidateForm from '../../hooks/useValidateForm';

import { LINK_SITES } from '../../constants';
import { PlatformType } from '../../types';
import { LinksState } from '../../recoil/store';

import {
  AddLinkButton,
  ContentHeader,
  LinkItemList,
  LinkItemListWrapper,
} from './main-content.styles';


export default function MainContentLinks() {
  const [linkItems, setLinkItems] = useRecoilState(LinksState);

  const addLink = () => {
    const newLinkItem: PlatformType = {
      ...LINK_SITES.github,
      link: '',
    }

    setLinkItems(linkItems.concat(newLinkItem))
  }

  const removeLink = (itemIndex: number) => {
    setLinkItems(linkItems.filter((item) => item != linkItems[itemIndex - 1]));
  }
  
  const formRef = useValidateForm();

  return (
    <form ref={formRef}>
      <ContentHeader>
        <h1>Customize your links</h1>
        <p>Add/edit/remove links below and then share all your profiles with the world!</p>
      </ContentHeader>
      
      <AddLinkButton
        type='button'
        onClick={addLink}
      >
        + Add new link
      </AddLinkButton>
      
      <LinkItemListWrapper>      
        {
          linkItems.length < 1
            ? <ListEmpty />
            : null
        }
      
        <LinkItemList>
          {
            linkItems.map((linkItem, index) => (
              // CHANGE KEY TO ITEM ID
              <LinkItem
                key={index}
                index={index + 1}
                platform={linkItem}
                handleRemove={removeLink}
              />
            ))
          }
        </LinkItemList>
      </LinkItemListWrapper>

    </form>

  );
}
