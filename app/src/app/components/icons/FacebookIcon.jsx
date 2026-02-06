export default function FacebookIcon({ size = 24, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="white"
      className={className}
    >
      <path d="M23.998 12c0-6.628-5.372-12-11.998-12C5.372 0-.001 5.372-.001 12c0 5.988 4.387 10.952 10.125 11.852v-8.384H7.078v-3.469h3.047V9.42c0-3.007 1.792-4.669 4.533-4.669 1.313 0 2.679.234 2.679.234v2.953h-1.513c-1.491 0-1.956.924-1.956 1.873v2.25h3.328l-.532 3.47h-2.796v8.384C19.611 22.952 24 17.988 24 12z" />
    </svg>
  );
}
