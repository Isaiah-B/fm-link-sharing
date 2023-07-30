import { useContext, useEffect } from 'react';
import { useRecoilState } from 'recoil'
import { store } from '../../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

import LinkItem from '../link-item/link-item.component';
import ListEmpty from '../list-empty/list-empty.component';

import useValidateForm from '../../hooks/useValidateForm';

import { LINK_SITES } from '../../constants';
import { LinksDataType, PlatformType } from '../../types';
import { LinksState } from '../../recoil/store';
import { AuthContext } from '../../context/auth-context';

import {
  AddLinkButton,
  ContentHeader,
  LinkItemList,
  LinkItemListWrapper,
} from './main-content.styles';


export default function MainContentLinks() {
  const { user } = useContext(AuthContext);

  const [linkItems, setLinkItems] = useRecoilState(LinksState);

  const formRef = useValidateForm();

  // Add link to list on click "Add new link" button
  const addLink = () => {
    const newLinkItem: PlatformType = {
      ...LINK_SITES.github,
      link: '',
    }

    setLinkItems(linkItems.concat(newLinkItem))
  }

  // Remove link from list on click "Remove"
  const removeLink = (itemIndex: number) => {
    setLinkItems(linkItems.filter((item) => item != linkItems[itemIndex - 1]));
  }
  

  // Save links to Firestore
  const saveLinks = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!user) return;

    try {
      const data = linkItems.map((item) => ({
        link: item.link,
        name: item.name,
      }));

      const linkDocRef = doc(store, 'userLinks', user.id);
      await updateDoc(linkDocRef, { links: data });
    } catch (err: unknown) {
      console.error(err)
    }
  };

  // Fetch user's links from Firestore
  useEffect(() => {
    const getUserData = async () => {
      if (user.id) {
        const linkDocRef = doc(store, 'userLinks', user.id);
        const dataDoc = await getDoc(linkDocRef);
        const data = dataDoc.data();

        if (data && data.links) {
          const dataLinks: LinksDataType['links'] = data.links;

          // Get full link object using the "name" field of the dataLink object
          const convertedLinks = dataLinks.map((item) => {
            return { ...LINK_SITES[item.name.toLowerCase()], link: item.link };
          });

          setLinkItems(convertedLinks);
        }
      } 
    }

    getUserData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <form ref={formRef} onSubmit={saveLinks}>
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
