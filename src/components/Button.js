const Button = ({ type = 'submit', className, ...props }) => (
    <button
        type={type}
        className={`${className} focus:outline-none focus:ring-0 font-medium text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700"`}
        {...props}
    />
)

export default Button
