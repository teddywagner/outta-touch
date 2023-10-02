import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center min-h-screen bg-boat bg-cover">
      <div className="flex flex-col gap-5 ml-auto">
        <h3 className="text-2xl text-gold">404</h3>
        <h1 className="text-4xl text-white">Page Not Found</h1>
        <p className="text-white">
          Sorry, we couldn’t find the page you were looking for.
        </p>
        <Link href="/" className="text-gold">
          Back to home
        </Link>
      </div>
    </div>
  );
}
