import { createFileRoute } from '@tanstack/react-router';
import { AuthForm } from '@/components/auth/auth-form';

export const Route = createFileRoute('/register')({
  component: RegisterPage,
});

function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-primary/5 to-primary/10">
      <AuthForm type="register" />
    </div>
  );
}