import { useState, RefObject } from 'react';
import { useRecoilState } from 'recoil';
import { Draggable, DraggingStyle, NotDraggingStyle } from 'react-beautiful-dnd';

import { ReactComponent as DropdownArrow } from '../../assets/images/icon-chevron-down.svg';
import { ReactComponent as DragIcon } from '../../assets/images/icon-drag-and-drop.svg';
import { ReactComponent as LinkIcon } from '../../assets/images/icon-link.svg';
import TextInput from '../text-input/text-input.component';

import useClickOutside from '../../hooks/useClickOutside';

import { LINK_SITES } from '../../constants';
import { PlatformType } from '../../types';
import { MockupDataState } from '../../recoil/store';

import {
  DropdownContainer,
  DropdownItem,
  DropdownMenuContainer,
  LinkDropdownButton,
  LinkDropdownButtonTitle,
  LinkHeaderDragArea,
  LinkItemContainer,
  LinkItemElementContainer,
  LinkItemHeader,
  RemoveButton,
} from './link-item.styles';

import { LinkItemElementLabelText } from '../text-input/text-input.styles';

function DropdownMenu({ handleSetPlatform }: { handleSetPlatform: (platform: PlatformType) => void }) {
  const platformsList = Object.values(LINK_SITES) as PlatformType[];

  return (
    <DropdownMenuContainer>
      {
        platformsList.map((platform: PlatformType) => (
           <DropdownItem
            key={platform.name}
            onClick={() => handleSetPlatform(platform)}
           >
              <platform.logo />
              <span>{platform.name}</span>
           </DropdownItem>
        ))
      }
    </DropdownMenuContainer>
  );
}


interface LinkItemProps {
  index: number,
  platform: PlatformType,
  handleRemove: (index: number) => void,
}

export default function LinkItem({ index, platform, handleRemove }: LinkItemProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [mockupData, setMockupData] = useRecoilState(MockupDataState);
  const linkList = mockupData.links;

  // Close dropdown when clicking outside the dropdown container area
  const clickOutsideRef = useClickOutside(() => setDropdownOpen(false)) as RefObject<HTMLDivElement>;

  // Change the platform to the one selected from the dropdown
  const setSite = (platform: PlatformType) => {
    const updatedList = linkList.map((item, _index) => (
      index === _index + 1 ? {...platform, link: ''} : item
    ));
    
    setMockupData({ ...mockupData, links: updatedList });
  }

  const handleChangeLinkText = (text: string) => {
    const updatedList = linkList.map((item, _index) => (
      index === _index + 1 ? { ...item, link: text } : item
    ));

    setMockupData({ ...mockupData, links: updatedList });
  }

  const setErrorMsg = () => {
    if (linkList[index - 1].link) {
      return linkList[index - 1].link.length
        ? "Please check the URL"
        : "Can't be empty"
    }
  }

  // Set transform syle to lock x-axis while dragging
  const styleOnDrag = (isDragging: boolean, style: DraggingStyle | NotDraggingStyle | undefined) => {
    if (isDragging && style && style.transform) {
      return {
        ...style,
        transform: `translate(0,${style.transform.split(',').pop()}`,
      }
    }
    return style;
  };

  return (
    <Draggable draggableId={index.toString()} index={index}>
      {
        (provided, snapshot) => (
          <LinkItemContainer
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={styleOnDrag(snapshot.isDragging, provided.draggableProps.style)}
          >
            <LinkItemHeader>
              <LinkHeaderDragArea>
                <DragIcon />
                <h2>{`Link #${index}`}</h2>
              </LinkHeaderDragArea>

              <RemoveButton
                type='button'
                onClick={() => handleRemove(index)}
              >
                Remove
              </RemoveButton>
            </LinkItemHeader>

            <LinkItemElementContainer>
              <label>
                <LinkItemElementLabelText>Platform</LinkItemElementLabelText>

                <DropdownContainer ref={clickOutsideRef}>   
                  <LinkDropdownButton
                    className={dropdownOpen ? 'selected' : ''}
                    type='button'
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <LinkDropdownButtonTitle>
                      <platform.logo />
                      {platform.name}
                    </LinkDropdownButtonTitle>

                    <DropdownArrow />
                  </LinkDropdownButton>

                  {
                    dropdownOpen
                      ? <DropdownMenu handleSetPlatform={setSite} />
                      : null 
                  }
                </DropdownContainer>
              </label>
            </LinkItemElementContainer>

            <TextInput
              inputLabel='Link'
              Icon={LinkIcon}
              errorMsg={setErrorMsg()}
              value={linkList[index - 1].link}
              onChange={({ target }) => handleChangeLinkText(target.value)}
              placeholder={platform.placeholderUrl}
              pattern={RegExp(platform.validation).toString().slice(1,-1)}
              required
            />
          </LinkItemContainer>
        )
      }
    </Draggable>
  );
}