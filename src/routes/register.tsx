import { SignUpPage } from "@/components/auth/signup";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/register')({
    component: SignUp,
});

function SignUp() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-primary/5 to-primary/10">
            <SignUpPage />
        </div>
    );
} 