const CustomButton = ({ text, onClick, variant = 'outlined', color = 'blue' }) => {
    const baseStyles = `font-semibold py-2 px-4 rounded-full transition duration-300`;

    const colorStyles = {
        blue: {
            outlined: `border border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white`,
            filled: `bg-blue-800 text-white hover:opacity-90`,
        },
        sky: {
            outlined: `border border-sky-950 text-sky-950 hover:bg-sky-950 hover:text-white`,
            filled: `bg-sky-950 text-white hover:opacity-90`,
        },
    };

    const variantStyles = colorStyles[color]?.[variant] || colorStyles.blue.outlined;

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variantStyles}`}
        >
            {text}
        </button>
    );
};

export default CustomButton;
