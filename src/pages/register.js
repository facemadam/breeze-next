import ApplicationLogo from '@/components/ApplicationLogo'
import AuthCard from '@/components/AuthCard'
import AuthValidationErrors from '@/components/AuthValidationErrors'
import Button from '@/components/Button'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Input from '@/components/Input'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'

const Register = () => {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    const submitForm = event => {
        event.preventDefault()

        register({ name, email, password, password_confirmation: passwordConfirmation, setErrors })
    }

    return (
        <GuestLayout>
            <AuthCard>

                <form onSubmit={submitForm}>

                    {/* Name */}
                    <div className="mb-4">
                        <Label htmlFor="name">Name</Label>

                        <Input
                            id="name"
                            type="text"
                            value={name}
                            className="block mt-1 w-full"
                            onChange={event => setName(event.target.value)}
                            required
                            autoFocus
                        />
                    </div>

                    {/* Email Address */}
                    <div className="mb-4">
                        <Label htmlFor="email">Email</Label>

                        <Input
                            id="email"
                            type="email"
                            value={email}
                            className="block mt-1 w-full"
                            onChange={event => setEmail(event.target.value)}
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <Label htmlFor="password">Password</Label>

                        <Input
                            id="password"
                            type="password"
                            value={password}
                            className="block mt-1 w-full"
                            onChange={event => setPassword(event.target.value)}
                            required
                            autoComplete="new-password"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className="mb-6">
                        <Label htmlFor="passwordConfirmation">
                            Confirm Password
                        </Label>

                        <Input
                            id="passwordConfirmation"
                            type="password"
                            value={passwordConfirmation}
                            className="block mt-1 w-full"
                            onChange={event => setPasswordConfirmation(event.target.value)}
                            required
                        />
                    </div>

                    {/* Validation Errors */}
                    <AuthValidationErrors className="mb-4" errors={errors} />

                    {/* Register */}
                    <div className="block mb-4">
                        <Button className="w-full text-white font-semibold bg-gray-800 hover:bg-gray-900 rounded-md">계정 등록</Button>
                    </div>

                    {/* Forgot / Register */}
                    <div className="flex justify-between mb-4">
                        <Link href="/login">
                            <a className="underline text-xs text-gray-500 hover:text-gray-900">
                                로그인 페이지로 가기
                            </a>
                        </Link>
                    </div>

                </form>
            </AuthCard>
        </GuestLayout>
    )
}

export default Register
