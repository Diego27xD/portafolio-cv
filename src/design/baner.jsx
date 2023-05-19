const Banner = ({ ...props }) => {
    return (
        <svg
            {...props}
            viewBox="0 0 300 150"
            preserveAspectRatio="none"
            width="100%"
            height="100%"
            fill="#374151"
            stroke="none"
        >
            <path d="M258.17,-17.25 C152.69,70.06 270.03,70.06 221.50,165.30 L500.00,150.00 L500.00,0.00 Z" />
        </svg>
    );
};

export default Banner;
