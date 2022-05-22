import ApplicationLogo from '@/components/ApplicationLogo'
import AuthCard from '@/components/AuthCard'
import AuthSessionStatus from '@/components/AuthSessionStatus'
import AuthValidationErrors from '@/components/AuthValidationErrors'
import Button from '@/components/Button'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Input from '@/components/Input'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'

const ForgotPassword = () => {
    const { forgotPassword } = useAuth({ middleware: 'guest' })

    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const submitForm = event => {
        event.preventDefault()

        forgotPassword({ email, setErrors, setStatus })
    }

    return (
        <GuestLayout>
            <AuthCard>

                <div className="mb-4 text-lg text-gray-600">
                    입력하신 이메일로 비밀번호 재설정 링크를 보내드립니다.
                </div>

                {/* Session Status */}
                <AuthSessionStatus className="mb-4" status={status} />

                {/* Validation Errors */}
                <AuthValidationErrors className="mb-4" errors={errors} />

                <form onSubmit={submitForm}>

                    {/* Email Address */}
                    <div className="block mb-4">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            className="block mt-1 w-full"
                            onChange={event => setEmail(event.target.value)}
                            required
                            autoFocus
                        />
                    </div>

                    <div className="block mb-4">
                        <Button className="w-full text-white font-semibold bg-gray-800 hover:bg-gray-900 rounded-md">이메일 보내기</Button>
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

export default ForgotPassword
