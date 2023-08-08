import { useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import Portal from '../../components/portal/portal.component';
import Toast from '../../components/toast/toast.component';
import HeaderPreview from '../../components/headers/header-preview.component';
import LinksPreview from '../../components/links-preview/links-preview.component';
import { ReactComponent as LinkIcon } from '../../assets/images/icon-link-copied-to-clipboard.svg';

import getUserData from '../../utils/getUserData';

import { AuthContext } from '../../context/auth-context';
import { MockupDataType } from '../../types';
import { MockupDataState } from '../../recoil/store';

import {
  PagePreviewBackground,
  PagePreviewContainer,
} from './page-preview.styles';

export default function PagePreview() {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [previewData, setPreviewData] = useState<MockupDataType>();

  const mockupState = useRecoilValue(MockupDataState);

  const portalRef = useRef<{ flash: () => void }>(null);

  const hasHeader = (id === user.id);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);

    if (portalRef.current){
      portalRef.current.flash();
    }
  }

  // Retrieve data from Firebase if user is logged in.
  // Otherwise, retrieve the values from mockupState
  useEffect(() => {
    const getData = async () => {
      if (id) {
        const userData = await getUserData(id);

        if (userData) {
          setPreviewData(userData);
        } else {
          setPreviewData(mockupState);
        }
        
        return;
      }
    }

    try {
      getData();
    } catch (err) {
      console.log('Something went wrong!');
    }
  }, [id, mockupState])

  // Warn anonymous users that information will be lost when
  // navigating away from the papge
  if (user.isAnon) {
    window.onbeforeunload = () => {
      return confirm("Refreshing the page will remove any changes you've made. Are you sure you want to refresh?")
    }
  }

  return (
    <PagePreviewContainer className={!hasHeader ? 'no-header' : ''}>
      <PagePreviewBackground />
      {
        hasHeader
          ? <HeaderPreview handleShareLink={copyLink} />
          : null
      }

      {
        previewData
          ? <LinksPreview data={previewData} />
          : null
      }

      <Portal ref={portalRef}>
        <Toast
          Icon={LinkIcon}
          text='The link has been copied to your clipboard!'
        />
      </Portal>
    </PagePreviewContainer>
  );
}