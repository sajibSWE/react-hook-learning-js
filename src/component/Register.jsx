import { useContext } from 'react'
import { GlobalContext } from  './GlobalContext'
export default function Register() {
  const { theme } = useContext(GlobalContext)
  return (
    <h1 style={theme === 'light' ? { color: 'black' } : { color: 'yellow' }}>
      Register
    </h1>
  );
}
