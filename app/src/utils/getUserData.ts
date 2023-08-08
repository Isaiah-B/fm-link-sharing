import { doc, getDoc } from "firebase/firestore";
import { LINK_SITES } from "../constants";
import { auth, store } from "../firebase";
import { UserDataType, MockupDataType } from "../types";

/**
 * Retrieves data from Firestore for the user with the provided id
 * @param id
 * @returns 
 */
export default async function getUserData(id: string) {
  if (!id) throw new Error("Id not provided.");

  const userDocRef = doc(store, 'userLinks', id);
  const dataDoc = await getDoc(userDocRef);

  if (!dataDoc.exists()) return null;
  
  const retrievedData = dataDoc.data();

  if (retrievedData) {
    const dataLinks: UserDataType['links'] = retrievedData.links;
    const dataProfile: UserDataType['profile'] = retrievedData.profile;

    // Get full link object using the "name" field of the dataLink object
    const convertedLinks = dataLinks.map((item) => {
      return { ...LINK_SITES[item.name.toLowerCase()], link: item.link };
    });

    let pictureUrl = dataProfile.profilePictureUrl;

    if (auth.currentUser && auth.currentUser.photoURL) {
      pictureUrl = auth.currentUser.photoURL;  
    }

    const data: MockupDataType = {
      links: convertedLinks,
      profile: { ...dataProfile, profilePictureUrl: pictureUrl}
    }

    return data;
  }
  
  else throw new Error("Data could not be retrieved.");
}
