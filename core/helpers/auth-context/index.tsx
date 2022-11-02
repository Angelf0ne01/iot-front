import React, { PropsWithChildren, FunctionComponent } from 'react'
import { ApiResponse, auth, AuthProps } from '../../../api'
import Cookie from 'js-cookie'
import { useRouter } from 'next/router'
import { User } from '../../../common/entities/user'

export interface AuthProviderValue {
  login: (params: AuthProps) => Promise<ApiResponse<User>> | undefined
  loading: boolean
  logout: () => void
  user?: User
}

const TOKEN_KEY = 'token'
const USER_KEY = 'user'

//@ts-ignore
const AuthContext = React.createContext<AuthProviderValue>(undefined)


interface AuthContextProviderProps extends PropsWithChildren {

}
export const AuthContextProvider: FunctionComponent<AuthContextProviderProps> = ({ children }) => {
  const [loading, setLoading] = React.useState<boolean>(false)
  const parseUser = JSON.parse(Cookie.get(USER_KEY) || '{}')
  const [user, setUser] = React.useState<User>(parseUser || null)
  const router = useRouter()
  const login = async (params: AuthProps) => {
    try {
      setLoading(true)
      const { data } = await auth(params)
      if (data?.status === 200) {
        const user = data?.data
        const { password, token, _id, ...allValueUser } = user
        Cookie.set(TOKEN_KEY, user?.token)
        Cookie.set(USER_KEY, JSON.stringify(allValueUser))
        setUser(user)
      }
      setLoading(false)
      return data
    } catch (error) {
      setLoading(false)
      throw error
    }
  }

  const logout = () => {
    Cookie.remove(TOKEN_KEY)
    Cookie.remove(USER_KEY)
    router.push('/')
  }
  return (
    <AuthContext.Provider value={{ login, loading, logout, user }}>
      {children}
    </AuthContext.Provider>
  )
}



const AuthComponent: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => {
  const router = useRouter()
  if (typeof window !== 'undefined') {
    const hastToken = Cookie.get(TOKEN_KEY)

    if (!hastToken) {
      router.replace('/login')
      return null
    }

    return <>{children}</>

  }
  return null;
}

export function ProtectRouter(Component: any): any {

  return <AuthComponent>
    <Component />
  </AuthComponent>
}

export function useAuth() {
  const context = React.useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useContext must be used within a AuthContextProvider')
  }
  return context
}