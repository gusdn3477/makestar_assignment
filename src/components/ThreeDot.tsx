interface ThreeDotProps {
  onClick?: () => void;
}
export default function ThreeDot({ onClick }: ThreeDotProps) {
  return (
    <button onClick={onClick}>
      <svg width="2" height="10" viewBox="0 0 2 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="1" cy="1" r="1" fill="black" />
        <circle cx="1" cy="5" r="1" fill="black" />
        <circle cx="1" cy="9" r="1" fill="black" />
      </svg>
    </button>
  );
}
