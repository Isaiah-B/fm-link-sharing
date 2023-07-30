import { useState } from 'react';
import { useRecoilState } from 'recoil';

import { ReactComponent as UploadIcon } from '../../assets/images/icon-upload-image.svg';
import TextInput from '../text-input/text-input.component';

import { MockupState } from '../../recoil/store';

import {
  ContentHeader,
  ProfileInfoInput,
  ProfileInfoLabel,
  ProfileInfoSection,
  ProfilePictureSection,
  ProfilePictureSectionLeft,
  ProfilePictureSectionRight,
  ProfilePictureUploadBox,
  ProfilePictureUploadText,
  ProfileScrollable,
} from './main-content.styles';
import useValidateForm from '../../hooks/useValidateForm';

export default function MainContentProfile() {
  const [mockupState, setMockupState] = useRecoilState(MockupState);

  const [selectedFile, setSelectedFile] = useState<string>();

  const formRef = useValidateForm();

  const handleSetFile = (file: File) => {
    const imageUrl = URL.createObjectURL(file);
    setSelectedFile(imageUrl);
    setMockupState((state) => ({ ...state, profilePictureUrl: imageUrl }));

    // Release objectUrl with URL.revokeObjectURL for memory management
  }

  const handleUploadFile = (event: React.FormEvent<HTMLInputElement>) => {
    // Read image with FileReader and Image, and validate its width and height
    if (event.currentTarget.files && event.currentTarget.files.length) {
      const file = event.currentTarget.files[0];
      const reader = new FileReader();
      
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        const image = new Image();
    
        if (e.target) {
          image.src = e.target.result as string;
  
          image.onload = () => {
            const { height, width } = image;

            if (!(height <= 1024 && width <= 1024)) {
              alert("Image is too large");
              return;
            }
            
            handleSetFile(file);
            return;
          }
        }
  
        else {
          alert("There was a problem uploading the image.");
          return;
        }
      }
    }
  };

  const handleChangeText = (field: 'firstName' | 'lastName' | 'email', value: string) => {
    setMockupState((state) => ({ ...state, [field]: value}));
  }

  return (
    <form ref={formRef}>
      <ContentHeader>
        <h1>Profile Details</h1>
        <p>Add your details to create a personal touch to your profile</p>
      </ContentHeader>

      <ProfileScrollable>
        <ProfilePictureSection>
          <ProfilePictureSectionLeft>
            <span>Profile Picture</span>
          </ProfilePictureSectionLeft>

          <ProfilePictureSectionRight>
            <label>
              <input
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                onChange={handleUploadFile}
              />

              <ProfilePictureUploadBox
                className={selectedFile ? 'image-selected' : ''}
                image={selectedFile ? selectedFile : ''}
              >
                <UploadIcon />
                {
                  selectedFile
                    ? <h2>Change Image</h2>
                    : <h2>+ Upload Image</h2>
                }
              </ProfilePictureUploadBox>

            </label>

            <ProfilePictureUploadText>
              Image must be below 1024x1024px. Use PNG or JPG format.
            </ProfilePictureUploadText>
          </ProfilePictureSectionRight>
        </ProfilePictureSection>

        <ProfileInfoSection>
          <ProfileInfoInput>
            <ProfileInfoLabel>First name*</ProfileInfoLabel>
            <TextInput
              value={mockupState.firstName}
              onChange={({ target }) => handleChangeText('firstName', target.value)}
              placeholder='e.g. John'
              required
            />
          </ProfileInfoInput>

          <ProfileInfoInput>
            <ProfileInfoLabel>Last name*</ProfileInfoLabel>
            <TextInput
              value={mockupState.lastName}
              onChange={({ target }) => handleChangeText('lastName', target.value)}
              placeholder='e.g. Appleseed'
              required
            />
          </ProfileInfoInput>
          
          <ProfileInfoInput>
            <ProfileInfoLabel>Email</ProfileInfoLabel>
            <TextInput
              value={mockupState.email}
              onChange={({ target }) => handleChangeText('email', target.value)}
              type='email'
              placeholder='e.g. email@example.com'
              required={false}
            />
          </ProfileInfoInput>
        </ProfileInfoSection>
      </ProfileScrollable>
    </form>
  );
}