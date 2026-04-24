import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Arrow = ({
    direction,
    onClick,
}: {
    direction: "left" | "right";
    onClick?: () => void;
}) => (
    <div
        onClick={onClick}
        className={`absolute top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur p-2 rounded-full shadow-md cursor-pointer transition hover:scale-110
        ${direction === "left" ? "-left-4" : "-right-4"}`}
    >
        {direction === "left" ? <FaChevronLeft /> : <FaChevronRight />}
    </div>
);

export default Arrow