import { useContext } from 'react'
import { GlobalContext } from './GlobalContext'

export default function Login() {
  const { theme } = useContext(GlobalContext)
  return (
    <h1 style={theme === 'light' ? { color: 'yellow' } : { color: 'black' }}>
      LogIn
    </h1>
  );
}
