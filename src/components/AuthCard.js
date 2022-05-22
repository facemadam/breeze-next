import Link from 'next/link'
import ApplicationLogo from '@/components/ApplicationLogo'

const AuthCard = ({ children }) => (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
        <div className="w-full sm:max-w-sm mt-6 px-8 py-6 bg-white shadow-md overflow-hidden sm:rounded-lg">
            <div className="flex justify-center mt-5 mb-10 text-gray-800">
                <Link href="/">
                    <a>
                        <ApplicationLogo />
                    </a>
                </Link>
            </div>
            {children}
        </div>
    </div>
)

export default AuthCard
