import Link from 'next/link';

export default function Category() {
  return (
    <div>
      <h2>Armblocks/Shoulderlocks</h2>
      <div className="grid grid-cols-3 gap-4 p-8 text-white">
        <div className="bg-sky-950 w-18 h-12 rounded-md">
          <Link href={`/techniques/1`}> Armbar</Link>
        </div>
        <div className="bg-sky-950 w-18 h-12 rounded-md ">
          <Link href={`/categories/2`}>Kimura</Link>
        </div>
        <div className="bg-sky-950 w-18 h-12 rounded-md">
          <Link href={`/categories/3`}> Omoplata</Link>
        </div>
        <div className="bg-sky-950 w-18 h-12 rounded-md">
          <Link href={`/categories/4`}> xv</Link>
        </div>
        <div className="bg-sky-950 w-18 h-12 rounded-md">kj</div>
        <div className="bg-sky-950 w-18 h-12 rounded-md">kn</div>
      </div>
    </div>
  );
}