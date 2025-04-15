interface MatchProps {
  date: string
  time: string
  home_team: string
  away_team: string
  competition: string
  status: string
  score: string
}

interface ScheduleDisplayProps {
  schedule: MatchProps[]
}

export function ScheduleDisplay({ schedule }: ScheduleDisplayProps) {
  if (!schedule || schedule.length === 0) {
    return <p className="text-center">No matches found.</p>
  }

  // Function to determine the winner and loser
  const getResultClasses = (match: MatchProps, team: "home" | "away") => {
    if (match.status !== "Match finished") {
      return "bg-white"
    }

    if (!match.score) return "bg-white"

    const [homeScore, awayScore] = match.score.split(" - ").map(Number)

    if (homeScore === awayScore) {
      return "bg-gray-200" // Tie
    }

    if (team === "home") {
      return homeScore > awayScore ? "bg-green-200" : "bg-red-200"
    } else {
      return awayScore > homeScore ? "bg-green-200" : "bg-red-200"
    }
  }

  return (
    <div className="mt-4">
      <h2 className="text-center mb-4">Upcoming Matches</h2>

      {/* Color legend */}
      <div className="flex justify-end mb-2 text-sm">
        <div className="flex items-center mr-4">
          <div className="w-4 h-4 bg-green-200 mr-1"></div>
          <span>Winner</span>
        </div>
        <div className="flex items-center mr-4">
          <div className="w-4 h-4 bg-red-200 mr-1"></div>
          <span>Loser</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-gray-200 mr-1"></div>
          <span>Tie</span>
        </div>
      </div>

      <div className="card-container">
        {schedule.map((match, index) => (
          <div key={index} className="card mb-3">
            <div className="card-body p-0">
              <div className="flex text-center">
                {/* Home team column (15%) */}
                <div className={`w-[15%] p-2 flex items-center justify-center ${getResultClasses(match, "home")}`}>
                  <strong>{match.home_team}</strong>
                </div>

                {/* Match details column (70%) */}
                <div className="w-[70%] p-3 text-center">
                  <h5 className="card-title mb-2">
                    <strong>{match.home_team}</strong> vs <strong>{match.away_team}</strong>
                  </h5>
                  <p className="card-text mb-1">
                    <strong>Date:</strong> {match.date}
                  </p>
                  <p className="card-text mb-1">
                    <strong>Time:</strong> {match.time} (CET)
                  </p>
                  <p className="card-text mb-1">
                    <strong>Competition:</strong> {match.competition}
                  </p>
                  <p className="card-text mb-1">
                    <strong>Status:</strong> {match.status}
                  </p>
                  {match.status === "Match finished" && match.score && (
                    <p className="card-text mb-1">
                      <strong>Score:</strong> {match.score}
                    </p>
                  )}
                </div>

                {/* Away team column (15%) */}
                <div className={`w-[15%] p-2 flex items-center justify-center ${getResultClasses(match, "away")}`}>
                  <strong>{match.away_team}</strong>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
