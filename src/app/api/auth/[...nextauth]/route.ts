import { login } from "@/app/lib/service";
import { compare } from "bcrypt";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    secret: "afzaal",
    providers: [
        CredentialsProvider({
            type: 'credentials',
            name: 'Credentials',
            credentials: {
                username: {label: 'Username', type: 'username'},
                password: {label: 'Password', type: 'password'},

            },
            async authorize(credentials) {
                const {username, password} = credentials as {
                    username: string;
                    password: string;
                };
                const user: any = await login({ username });
                if (user) {
                    const passwordConfirm  = await compare(password, user.password);
                    if (passwordConfirm) {
                        return user;
                    }
                    return null;
                } else {
                    return null;
                }
            }
        })
    ],
    callbacks: {
        async jwt({token, account, profile, user}: any) {
            if(account?.provider === "credentials") {
                token.email = user.email;
                token.username = user.username;
                token.role = user.role;
            }
            return token;
        },
        async session({session, token}: any) {
            if ('email' in token) {
                session.user.email = token.email;
            }
            if ('username' in token) {
                session.user.username = token.username;
            }
            if ('role' in token) {
                session.user.role = token.role;
            }
            return session;
        }
    },
    pages: {
        signIn: "/sign-in",
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };