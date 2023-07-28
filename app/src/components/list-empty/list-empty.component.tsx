import { ReactComponent as ListEmptyIllustration } from '../../assets/images/illustration-empty.svg';

import { ListEmptyContainer } from './list-empty.styles';

export default function ListEmpty() {
  return (
    <ListEmptyContainer>
      <ListEmptyIllustration />

      <h1>Let’s get you started</h1>

      <p>
        Use the “Add new link” button to get started. Once you have more than one link, 
        you can reorder and edit them. We’re here to help you share your profiles with everyone!
      </p>
    </ListEmptyContainer>
  )
}