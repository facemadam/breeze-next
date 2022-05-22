import AuthCard from '@/components/AuthCard'
import AuthSessionStatus from '@/components/AuthSessionStatus'
import AuthValidationErrors from '@/components/AuthValidationErrors'
import Button from '@/components/Button'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Input from '@/components/Input'
import Label from '@/components/Label'
import RelativeInput from '@/components/RelativeInput'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Login = () => {
    const router = useRouter()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    useEffect(() => {
        if (router.query.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.query.reset))
        } else {
            setStatus(null)
        }
    })

    const submitForm = async event => {
        event.preventDefault()

        login({ email, password, setErrors, setStatus })
    }

    return (
        <GuestLayout>
            <AuthCard>

                <form onSubmit={submitForm}>
                    
                    {/* Email Address */}
                    <div className="mb-4">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            value={email}
                            className="block mt-1 w-full"
                            onChange={event => setEmail(event.target.value)}
                            placeholder=" "
                            required
                            autoFocus
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <Label htmlFor="password">비밀번호</Label>
                        <Input
                            id="password"
                            type="password"
                            value={password}
                            className="block mt-1 w-full"
                            onChange={event => setPassword(event.target.value)}
                            placeholder=" "
                            required
                            autoComplete="current-password"
                        />
                    </div>

                    {/* Remember Me */}
                    <div className="block mb-4">
                        <label
                            htmlFor="remember_me"
                            className="inline-flex items-center">
                            <input
                                id="remember_me"
                                type="checkbox"
                                name="remember"
                                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                            <span className="ml-2 text-xs text-gray-500">
                                로그인 유지
                            </span>
                        </label>
                    </div>

                    {/* Session Status */}
                    <AuthSessionStatus className="mb-4" status={status} />

                    {/* Validation Errors */}
                    <AuthValidationErrors className="mb-4" errors={errors} />

                    {/* Login */}
                    <div className="block mb-4">
                        <Button className="w-full text-white font-semibold bg-gray-800 hover:bg-gray-900 rounded-md">로그인</Button>
                    </div>
                    
                    {/* Forgot / Register */}
                    <div className="flex justify-between mb-4">
                        <Link href="/forgot-password">
                            <a className="underline text-xs text-gray-500 hover:text-gray-900">
                                비밀번호 찾기
                            </a>
                        </Link>
                        <Link href="/register">
                            <a className="underline text-xs text-gray-500 hover:text-gray-900">
                                계정 등록
                            </a>
                        </Link>
                    </div>
                </form>
            </AuthCard>
        </GuestLayout>
    )
}

export default Login
