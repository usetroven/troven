import { Suspense } from "react";
import SignInForm from "./_components/sign-in-form";

// Suspense is required because SignInForm calls useSearchParams().
// Next.js 14 cannot statically render a page that reads search params
// without a Suspense boundary.
export default function SignInPage() {
  return (
    <Suspense>
      <SignInForm />
    </Suspense>
  );
}
