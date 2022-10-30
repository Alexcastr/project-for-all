import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

import { database } from '../../../database'
import { doc, getDoc, setDoc } from 'firebase/firestore'

export default NextAuth({
  pages: {
    signIn: '/login',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async jwt({ token, account }) {
      // console.log('JWT', token)

      if (account?.providerAccountId) {
        //console.log('Account', account.providerAccountId)
        // enviamos al token un id sacado del account porque alli si hay id
        token.id = account.providerAccountId
        const snapshot = await getDoc(
          doc(database, 'usersproject', account.providerAccountId)
        )
        if (snapshot.exists()) {
          const user = snapshot.data()
          if (user.role) {
            //enviamos al token un role de la bd
            token.role = user.role
          }
        } else {
          const snapshot = await setDoc(
            doc(database, 'usersproject', account.providerAccountId),
            {
              role: 'empleado',
              id: account.providerAccountId,
              email: token.email,
              name: token.name,
              picture: token.picture,
            }
          )
          token.role = 'empleado'
        }
      }
      return token
    },
    async session({ session, token, user }) {
      if (token?.id && token?.role) {
        session.user.id = token.id
        session.user.role = token.role
      }
      //console.log('Session', session)
      return session
    },
  },
})
