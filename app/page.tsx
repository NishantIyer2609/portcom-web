import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-24 bg-metallic-dark">
      {/* Top Bar */}
      <div className="z-10 w-full max-w-5xl font-mono text-sm lg:flex items-center justify-between text-gray-300">
        <p className="fixed top-0 left-0 flex w-full justify-center border-b border-gray-500 bg-gradient-to-b from-black pb-6 pt-8 backdrop-blur-xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-metallic-dark lg:p-4">
          Get started by editing <code className="font-mono font-bold">app/page.tsx</code>
        </p>
      </div>

      {/* "Lubera" Heading */}
      <h1 className="text-3xl font-bold text-gray-300 mb-8 mt-12">Lubera</h1>

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
        <a href="https://nextjs.org/docs" className="rounded-lg border hover:border-gray-600 hover:bg-gray-700 transition-colors px-5 py-4 text-gray-300">
          <h2 className="text-2xl font-semibold mb-3">Docs -&gt;</h2>
          <p className="text-sm opacity-50">Find in-depth information about Next.js features and API.</p>
        </a>

        {/* Additional links */}
        {/* ...similar structure for other links... */}

      </div>

      {/* Vercel Logo */}
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-black via-black lg:static lg:h-auto lg:w-auto lg:bg-metallic-dark">
        <a href="https://vercel.com" className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0">
          By <Image src="/vercel.svg" alt="Vercel Logo" className="dark:invert" width={100} height={24} priority />
        </a>
      </div>
    </main>
  )
}

/* CSS (add this to your styles or CSS file) */
.bg-metallic-dark {
  background-color: #1a1a1a; /* Dark gray base */
  background-image: linear-gradient(145deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.6) 100%);
}

.bg-dark-card {
  background-color: #333; /* Darker gray for cards */
}
