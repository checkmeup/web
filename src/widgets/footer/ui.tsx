import pkg from '~/../package.json'

export const Footer = () => {
  return (
    <footer>
      <div className="relative mx-auto max-w-screen-xl text-center">
        2024 &copy; checkmeup.net &middot; v{pkg.version}
      </div>
    </footer>
  )
}
