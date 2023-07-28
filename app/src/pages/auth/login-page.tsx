import LoginForm from '../../components/auth-forms/login-form.component';
import AuthLayout from '../../layouts/layout-auth/layout-auth.layout';
import { AuthPageContainer } from './auth.styles';

export default function LoginPage() {
  return (
    <AuthPageContainer>
      <AuthLayout>
        <LoginForm />
      </AuthLayout>
    </AuthPageContainer>
  )
}