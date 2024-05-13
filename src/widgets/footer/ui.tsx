import pkg from '~/../package.json'

export const Footer = () => {
  return (
    <footer className=" bg-slate-500">
      <div className="relative mx-auto max-w-screen-xl bg-red-50 text-center">
        2024 &copy; checkmeup.net &middot; v{pkg.version}
      </div>
    </footer>
  )
}
