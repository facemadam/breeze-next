const AuthValidationErrors = ({ errors = [], ...props }) => (
    <>
        {errors.length > 0 && (
            <div class="bg-gradient-to-r bg-white dark:bg-gray-900 dark:border-gray-700 dark:bg-gray-800" {...props}>
                {errors.map(error => (
                <div class="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                    {error}
                </div>
                ))}
            </div>
        )}
    </>
)

export default AuthValidationErrors
