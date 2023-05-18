import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header>
        <div>Navigation</div>
      </header>
      <main className="p-4">
        <div>
          <h1>BJJ</h1>
        </div>
        <div className="flex flex-row justify-center rounded-md">
          <div className="bg-sky-950 w-2/3 h-36 m-4 rounded-md text-white">
            Deine Techniken
          </div>
        </div>
        <div>
          <h2>Kategorien</h2>
          <div className="grid grid-cols-2 gap-4 p-8 h-5/6 text-white">
            <Link
              className="bg-sky-950 w-28 h-28 rounded-md"
              href={`/categories/armlocks`}
            >
              Armlocks
            </Link>
            <div className="bg-sky-950 w-28 h-28 rounded-md ">Chokes</div>
            <div className="bg-sky-950 w-28 h-28 rounded-md">Takedowns</div>
            <div className="bg-sky-950 w-28 h-28 rounded-md">Sweeps</div>
            <div className="bg-sky-950 w-28 h-28 rounded-md">Passes</div>
            <div className="bg-sky-950 w-28 h-28 rounded-md">Legbars</div>
          </div>
        </div>
      </main>
    </>
  );
}
