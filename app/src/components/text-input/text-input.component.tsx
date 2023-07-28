import { useState } from 'react';

import { LinkItemElementLabelText, TextInputContainer, TextInputError, TextInputInput, TextInputWrapper } from './text-input.styles';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputLabel?: string, 
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
  errorMsg?: string,
}

export default function TextInput({
  inputLabel,
  Icon,
  errorMsg = "Can't be empty",
  ...otherProps
}: TextInputProps) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <TextInputContainer>
      <label>
        {
          inputLabel
            ? <LinkItemElementLabelText>{inputLabel}</LinkItemElementLabelText>
            : null
        }
        
        <TextInputWrapper className={isSelected ? 'selected' : ''}>
          {
            Icon
              ? <Icon />
              : null
          }

          <TextInputInput
            {...otherProps}
            onFocus={() => setIsSelected(true)}
            onBlur={() => setIsSelected(false)}
          />
          
          <TextInputError>{errorMsg}</TextInputError>
        </TextInputWrapper>
      </label>
    </TextInputContainer>
  )
}