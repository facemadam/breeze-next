const Label = ({ className, children, ...props }) => (
    <label
        className={`${className} block font-medium text-xs`}
        {...props}>
        {children}
    </label>
)

export default Label
