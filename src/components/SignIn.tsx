"use client";

import { signIn } from "next-auth/react"

export default function SignIn() {
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault()
        await signIn("google")
      }}
    >
      <button type="submit">Signin with Google</button>
    </form>
  )
}
