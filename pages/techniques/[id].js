import Link from 'next/link';

export default function Technique() {
  return (
    <div>
      <header>
        <Link href="/categories/[categroy]">back</Link>
      </header>
      <div>
        <main>
          <div><img src="../img/armbar.JPG" /></div>
          <div>Name</div>
          <div>Description</div>
          <div>
            <button>
              Add
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
