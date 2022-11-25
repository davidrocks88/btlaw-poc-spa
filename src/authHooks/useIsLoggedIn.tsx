import { useAuthenticator } from '@aws-amplify/ui-react';

export function useIsLoggedIn() {
  const { user } = useAuthenticator((context) => [context.user]);

  return !!user
}