import { SignUp } from '@/components/auth/auth-form';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/login')({
  component: LoginPage,
});

function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-primary/5 to-primary/10">
      <SignUp />
    </div>
  );
}