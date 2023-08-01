import { useContext, useState } from 'react';
import { useRecoilState } from 'recoil';
import { updateProfile } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

import TextInput from '../text-input/text-input.component';
import Toast from '../toast/toast.component';
import { ReactComponent as UploadIcon } from '../../assets/images/icon-upload-image.svg';
import { ReactComponent as SaveIcon } from '../../assets/images/icon-changes-saved.svg';

import useValidateForm from '../../hooks/useValidateForm';
import useFlashComponent from '../../hooks/useflashComponent';

import { auth, storage, store } from '../../firebase';
import { MockupDataState } from '../../recoil/store';
import { AuthContext } from '../../context/auth-context';

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
  TextInputWidthWrapper,
} from './main-content.styles';

export default function MainContentProfile() {
  const { user } = useContext(AuthContext);

  const [mockupState, setMockupState] = useRecoilState(MockupDataState);

  const [selectedFile, setSelectedFile] = useState<File>();
  const [imageUrl, setImageUrl] = useState(auth.currentUser?.photoURL || '');
  
  const formRef = useValidateForm();
  const { showComponent, componentOpacity, flash } = useFlashComponent();

  const { firstName, lastName, email } = mockupState.profile;

  // Store the selected file in state and create a temporary url for displaying
  // on the mockup
  const handleSetFile = (file: File) => {
    const image = URL.createObjectURL(file);
    setSelectedFile(file);
    setImageUrl(image);
    
    // Change the mockup profile picture
    setMockupState({ ...mockupState, profile: { ...mockupState.profile, profilePictureUrl: image }});
  }

  // Ensure file is a valid width and height, then upload it to client state
  const validateFile = (event: React.FormEvent<HTMLInputElement>) => {
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
    const updatedProfileFields = { ...mockupState.profile, [field]: value }
    setMockupState({...mockupState, profile: updatedProfileFields });
  }

  const saveProfile = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!user.id) return;

    try {
      // If an image file is provided, upload it to Firebase storage, download the
      // url, and set it as the user's profile picture
      if (selectedFile && auth.currentUser) {
        const storageRef = ref(storage, `images/${selectedFile.name}`);
        await uploadBytes(storageRef, selectedFile as File)
        const downloadUrl = await getDownloadURL(storageRef);
        
        await updateProfile(auth.currentUser, { photoURL: downloadUrl });
        
        const updatedProfile = { ...mockupState.profile, profilePictureUrl: downloadUrl };
        setMockupState((state) => ({ ...state, profile: updatedProfile }));
      }

      const profileDocRef = doc(store, 'userLinks', user.id);
      await updateDoc(profileDocRef, { profile: mockupState.profile });

      flash();
    } catch (err: unknown) {
      console.error(err);
    }
  }

  return (
    <>
      <form ref={formRef} onSubmit={saveProfile}>
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
                  onChange={validateFile}
                />

                <ProfilePictureUploadBox
                  className={selectedFile ? 'image-selected' : ''}
                  image={imageUrl ? imageUrl : ''}
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
              <TextInputWidthWrapper>
                <TextInput
                  value={firstName}
                  onChange={({ target }) => handleChangeText('firstName', target.value)}
                  placeholder='e.g. John'
                  required
                />
              </TextInputWidthWrapper>
            </ProfileInfoInput>

            <ProfileInfoInput>
              <ProfileInfoLabel>Last name*</ProfileInfoLabel>
              <TextInputWidthWrapper>
                <TextInput
                  value={lastName}
                  onChange={({ target }) => handleChangeText('lastName', target.value)}
                  placeholder='e.g. Appleseed'
                  required
                />
              </TextInputWidthWrapper>
            </ProfileInfoInput>
            
            <ProfileInfoInput>
              <ProfileInfoLabel>Email</ProfileInfoLabel>
              <TextInputWidthWrapper>
                <TextInput
                  value={email}
                  onChange={({ target }) => handleChangeText('email', target.value)}
                  type='email'
                  placeholder='e.g. email@example.com'
                  required={false}
                />
              </TextInputWidthWrapper>
            </ProfileInfoInput>
          </ProfileInfoSection>
        </ProfileScrollable>
      </form>

      {
        showComponent
          ? (
            <Toast
              Icon={SaveIcon}
              text='Your changes have been successfully saved!'
              style={{ opacity: componentOpacity }}
            />
          )
          : null
      }
    </>
  );
}