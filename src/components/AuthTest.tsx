import { withAuthenticator, WithAuthenticatorProps } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

function AuthTest({ signOut, user }: WithAuthenticatorProps) {
  console.log(user)
  return (
    <>
      <h1>Hello {user?.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  )
}

export default withAuthenticator(AuthTest)
