import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import HeaderPreview from '../../components/headers/header-preview.component';
import LinksPreview from '../../components/links-preview/links-preview.component';
import Toast from '../../components/toast/toast.component';
import { ReactComponent as LinkIcon } from '../../assets/images/icon-link-copied-to-clipboard.svg';

import useFlashComponent from '../../hooks/useflashComponent';

import getUserData from '../../utils/getUserData';
import { AuthContext } from '../../context/auth-context';
import { MockupDataType } from '../../types';

import {
  PagePreviewBackground,
  PagePreviewContainer,
} from './page-preview.styles';

export default function PagePreview() {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [previewData, setPreviewData] = useState<MockupDataType>();

  const { showComponent, componentOpacity, flash } = useFlashComponent();

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    flash();
  }

  useEffect(() => {
    const getData = async () => {
      if (id) {
        const data = await getUserData(id);
        if (data) setPreviewData(data);
      }
    }

    getData();
  }, [id])

  return (
    <PagePreviewContainer>
      <PagePreviewBackground />
      {
        id === user.id
          ? <HeaderPreview handleShareLink={copyLink} />
          : null
      }

      {
        previewData
          ? <LinksPreview data={previewData} />
          : null
      }

      {
        showComponent
          ? (
            <Toast
              Icon={LinkIcon}
              text='The link has been copied to your clipboard!'
              style={{ opacity: componentOpacity }}
            />
          )
          : null
      }
    </PagePreviewContainer>
  );
}