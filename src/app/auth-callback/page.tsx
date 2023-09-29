import { useRouter, useSearchParams } from 'next/navigation';
import { trpc } from '../_trpc/client';

function AuthCBPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = searchParams.get('origin');

  const { data, isLoading } = trpc.authCallback.useQuery(undefined, {
    onSuccess: ({ success }) => {
      if (success) {
        router.push(origin ? `${origin}` : '/dashboard');
      }
    },
  });

  return <div>AuthCBPage</div>;
}

export default AuthCBPage;
