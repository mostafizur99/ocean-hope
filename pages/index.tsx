import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="text-center text-orange-700">
        <Link href={'/'}>Home</Link>
        <Link href={'/location'} className="ml-2">Location</Link>
      </div>
      <h2 className="text-center text-orange-500">Hello Ocean Dream</h2>
    </div>
  )
}
