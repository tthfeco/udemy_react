export default function Tabs({ children, buttons, ButtonContainer }) {
  // const ButtonsContainer = buttonContainer;
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}
