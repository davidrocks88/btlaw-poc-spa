import { useAuthenticator } from '@aws-amplify/ui-react';

export function useIsAdmin() {
  const { user } = useAuthenticator((context) => [context.user]);
  const isAdmin = user?.getSignInUserSession()?.getAccessToken()?.payload['cognito:groups'].includes('Admin')

  return isAdmin
}