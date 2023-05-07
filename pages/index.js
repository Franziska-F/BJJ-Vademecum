import Image from 'next/image';

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
        <div className="flex flex-row">
          <div className="w-1/2 m-4">
            <img src="/img/technique_background.jpg" alt="two bjj fighters" />
          </div>
          <div className="bg-sky-950 w-1/2 m-4">Deine Techniken</div>
        </div>
        <div>
          <h2>Kategorien</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-sky-950">Armbars</div>
            <div className="bg-sky-950">Chokes</div>
            <div className="bg-sky-950">Takedowns</div>
            <div className="bg-sky-950">Sweeps</div>
            <div className="bg-sky-950">Passes</div>
            <div className="bg-sky-950">Legbars</div>
          </div>
        </div>
      </main>
    </>
  );
}
