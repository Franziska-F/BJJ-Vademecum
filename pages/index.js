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
          <div className="h-36 w-24 m-4">
            <img
              src="/img/technique_background.jpg"
              className="h-36 w-24 rounded-md"
              alt="two bjj fighters"
            />
          </div>
          <div className="bg-sky-950 w-24 h-36 m-4 rounded-md text-white">
            Deine Techniken
          </div>
        </div>
        <div>
          <h2>Kategorien</h2>
          <div className="grid grid-cols-3 gap-4 p-8 text-white">
            <Link className="bg-sky-950 w-18 h-12 rounded-md" href={`/categories/armlocks`}
            >
              Armlocks
            </Link>
            <div className="bg-sky-950 w-18 h-12 rounded-md ">Chokes</div>
            <div className="bg-sky-950 w-18 h-12 rounded-md">Takedowns</div>
            <div className="bg-sky-950 w-18 h-12 rounded-md">Sweeps</div>
            <div className="bg-sky-950 w-18 h-12 rounded-md">Passes</div>
            <div className="bg-sky-950 w-18 h-12 rounded-md">Legbars</div>
          </div>
        </div>
      </main>
    </>
  );
}
