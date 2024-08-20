import { ErrorDescription, ErrorTitle, ErrorWrapper } from './ErrorPage.styled';

const ErrorPage = () => {
  return (
    <ErrorWrapper>
      <ErrorTitle>404</ErrorTitle>
      <ErrorDescription>Страница не найдена</ErrorDescription>
    </ErrorWrapper>
  );
};
export default ErrorPage;
