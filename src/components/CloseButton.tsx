import { useNavigate } from 'react-router-dom';

interface CloseButtonProps {
  onClick?: () => void;
}

export default function CloseButton({ onClick }: CloseButtonProps) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    onClick ? onClick() : navigate(-1);
  };
  return (
    <button onClick={handleBackClick} className="flex items-center">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 1L15 15M15 1L1 15" stroke="black" strokeWidth="1.3" />
      </svg>
    </button>
  );
}
