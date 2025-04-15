import Link from "next/link"

export default function Home() {
  return (
    <div className="container py-5 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Welcome to Soccer Schedule App</h1>
        <p className="text-lg mb-6">
          Find upcoming matches and results for your favorite soccer teams from leagues around the world.
        </p>
        <div className="mt-8">
          <Link href="/schedule" className="btn btn-primary btn-lg">
            View Schedules
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card">
            <div className="card-body p-4">
              <h3 className="text-xl font-semibold mb-2">Top Leagues</h3>
              <p>Access schedules from Premier League, La Liga, Serie A, Bundesliga, and more.</p>
            </div>
          </div>

          <div className="card">
            <div className="card-body p-4">
              <h3 className="text-xl font-semibold mb-2">Match Details</h3>
              <p>View match dates, times, competitions, and scores for completed matches.</p>
            </div>
          </div>

          <div className="card">
            <div className="card-body p-4">
              <h3 className="text-xl font-semibold mb-2">Easy Search</h3>
              <p>Quickly find your favorite team with our smart search suggestions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
