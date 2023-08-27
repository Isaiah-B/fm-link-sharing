import { useContext, useRef } from 'react';
import { useRecoilState } from 'recoil'
import { store } from '../../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';

import Portal from '../portal/portal.component';
import Toast from '../toast/toast.component';
import LinkItem from '../link-item/link-item.component';
import ListEmpty from '../list-empty/list-empty.component';
import { ReactComponent as SaveIcon } from '../../assets/images/icon-changes-saved.svg';

import useValidateForm from '../../hooks/useValidateForm';

import { LINK_SITES } from '../../constants';
import { PlatformType } from '../../types';
import { MockupDataState } from '../../recoil/store';
import { AuthContext } from '../../context/auth-context';

import {
  AddLinkButton,
  ContentHeader,
  LinkItemList,
  LinkItemListWrapper,
} from './main-content.styles';


export default function MainContentLinks() {
  const { user } = useContext(AuthContext);

  const [mockupState, setMockupState] = useRecoilState(MockupDataState);

  const linkList = mockupState.links;

  const formRef = useValidateForm();
  const portalRef = useRef<{ flash: () => void }>(null);

  // Add link to list on click "Add new link" button
  const addLink = () => {
    const newLinkItem: PlatformType = {
      ...LINK_SITES.github,
      link: '',
    }

    setMockupState({ ...mockupState, links: linkList.concat(newLinkItem) });
  }

  // Remove link from list on click "Remove"
  const removeLink = (itemIndex: number) => {
    setMockupState({ ...mockupState, links: linkList.filter((item) => item != linkList[itemIndex - 1]) });
  }

  // Save links to Firestore
  const saveLinks = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!user) return;

    try {
      const data = linkList.map((item) => ({
        link: item.link,
        name: item.name,
      }));

      const linkDocRef = doc(store, 'userLinks', user.id);
      await updateDoc(linkDocRef, { links: data });

      // Flash toast notification
      if (portalRef.current) {
        portalRef.current.flash();
      }

    } catch (err: unknown) {
      console.error(err)
    }
  };

  // Move link to position in the array it was dragged to
  const handleDragEnd = (result: DropResult) => {
    const source = result.source;
    let destination = result.destination;
    
    if (destination === null) {
      destination = source;
    }
    
    const linksCopy = [...mockupState.links];

    const draggedLink = linksCopy.splice(source.index - 1, 1)[0];

    if (destination) {
      linksCopy.splice(destination.index - 1, 0, draggedLink);
    }

    setMockupState({...mockupState, links: linksCopy});
  }

  return (
    <>
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
            linkList.length < 1
              ? <ListEmpty />
              : null
          }
        
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId={'0'}>
            {
              (provided) => (
                <LinkItemList ref={provided.innerRef} {...provided.droppableProps}>
                  {
                    linkList.map((linkItem, index) => (
                      <LinkItem
                        key={index}
                        index={index + 1}
                        platform={linkItem}
                        handleRemove={removeLink}
                      />
                    ))
                  }
                  {provided.placeholder}

                </LinkItemList>
              )
            }
          </Droppable>
        </DragDropContext>
        </LinkItemListWrapper>
      </form>

      <Portal ref={portalRef}>
        <Toast
          Icon={SaveIcon}
          text='Your changes have been successfully saved!'
        />
      </Portal>
    </>
  );
}
