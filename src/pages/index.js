import { useAuth } from '@/hooks/auth'

export default function Home() {
    const { user } = useAuth({ middleware: 'auth' })
    
    if(user) window.location.pathname = '/dashboard'

    return <></>
}
