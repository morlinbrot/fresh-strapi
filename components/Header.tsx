export function Header() {
  return (
    <header className="flex items-center justify-between my-10 py-4 h-10 px-[130px] w-full text-white">
      <div className="flex items-center">
        <p className="text-primary text-3xl font-semibold">Brokemons</p>
      </div>
      <nav className="flex items-center gap-10">
        <a className="hover:underline text-[#000000]" href="/">
          Home
        </a>
        <a className="hover:underline text-gray" href="/#">
          Products
        </a>
        <a className="hover:underline text-gray" href="/#">
          FAQ
        </a>
        <a className="hover:underline text-gray" href="/#">
          Blog
        </a>
        <a className="hover:underline text-gray" href="/#">
          About Us
        </a>
      </nav>
      <div className="flex items-center gap-10">
        <button className="bg-transparent text-white px-4 py-2 rounded-md text-gray">
          Login
        </button>
        <button className="bg-primary text-white px-4 py-2 rounded-md">
          Sign Up
        </button>
      </div>
    </header>
  );
}
