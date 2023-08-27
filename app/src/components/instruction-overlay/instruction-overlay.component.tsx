import { InstructionOverlayContainer, InstructionTextBox } from './instruction-overlay.styles';

export default function InstructionOverlay() {
  return (
    <InstructionOverlayContainer>
      <InstructionTextBox>
        <p>Click here to sign up and save your data!</p>
      </InstructionTextBox>
    </InstructionOverlayContainer>
  );
}