import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-24 bg-gray-100">
      {/* Top Bar */}
      <div className="z-10 w-full max-w-5xl font-mono text-sm lg:flex items-center justify-between">
        <p className="fixed top-0 left-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing <code className="font-mono font-bold">app/page.tsx</code>
        </p>
      </div>

      {/* "Lubera" Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8 mt-12">Lubera</h1>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Card 1 */}
        <div className="md:col-span-3 bg-dark-card rounded-lg p-4 text-white">
          <h2 className="text-xl font-semibold mb-3">Deploying A Watershed Breakthrough</h2>
          <p>We establish the world&apos;s first high-performance data broker...</p>
        </div>

        {/* Card 2 */}
        <div className="bg-dark-card rounded-lg p-4 text-white">
          <h2 className="text-xl font-semibold mb-3">We unravel Entangled Throughput Dependencies</h2>
          <p>For decades, enterprise solutions resigned to centralized execution...</p>
        </div>

        {/* Card 3 */}
        <div className="bg-dark-card rounded-lg p-4 text-white">
          <h2 className="text-xl font-semibold mb-3">Social Innovation Across Barriers</h2>
          <p>Democratizing access activates equipped talent across all latitudes...</p>
        </div>

        {/* Card 4 */}
        <div className="bg-dark-card rounded-lg p-4 text-white">
          <h2 className="text-xl font-semibold mb-3">Our $20 Ultralight Thin Client Hardware</h2>
          <p>Our $20 ultralight thin client hardware and serverless architectures...</p>
        </div>
      </div>

      {/* Bottom Link Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Link 1 */}
        <a href="https://nextjs.org/docs" className="rounded-lg border hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30 transition-colors px-5 py-4">
          <h2 className="text-2xl font-semibold mb-3">Docs -&gt;</h2>
          <p className="text-sm opacity-50">Find in-depth information about Next.js features and API.</p>
        </a>

        {/* Additional links (Learn, Templates, Deploy) */}
        {/* ...similar structure for other links... */}

      </div>

      {/* Vercel Logo */}
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <a href="https://vercel.com" className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0">
          By <Image src="/vercel.svg" alt="Vercel Logo" className="dark:invert" width={100} height={24} priority />
        </a>
      </div>
    </main>
  )
}
