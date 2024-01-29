import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="center">
        <Link className="btn btn-mango" href="/home">
          JOIN THE MOVEMENT
        </Link>
      </div>
    </>
  );
}
