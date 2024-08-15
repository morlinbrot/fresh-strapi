export function Header() {
  return (
    <header className="flex items-center justify-between my-10 py-4 h-10 px-[130px] w-full text-white">
      <div className="flex items-center">
        <p className="text-[#54BD95] text-3xl font-semibold">Bokemos</p>
      </div>
      <nav className="flex items-center gap-10">
        <a className="hover:underline text-[#000000]" href="/">
          Home
        </a>
        <a className="hover:underline text-[#A6A6A6]" href="/#">
          Products
        </a>
        <a className="hover:underline text-[#A6A6A6]" href="/#">
          FAQ
        </a>
        <a className="hover:underline text-[#A6A6A6]" href="/#">
          Blog
        </a>
        <a className="hover:underline text-[#A6A6A6]" href="/#">
          About Us
        </a>
      </nav>
      <div className="flex items-center gap-10">
        <button className="bg-transparent text-white px-4 py-2 rounded-md text-[#A6A6A6]">
          Login
        </button>
        <button className="bg-[#54BD95] text-white px-4 py-2 rounded-md">
          Sign Up
        </button>
      </div>
    </header>
  );
}
