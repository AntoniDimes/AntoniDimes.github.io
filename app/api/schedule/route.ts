import { NextResponse } from "next/server"
import { getTeamId } from "@/lib/team-id"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const teamName = searchParams.get("team")

  if (!teamName) {
    return NextResponse.json({ error: "Team name is required" }, { status: 400 })
  }

  const base_url = "https://api.football-data.org/v4"
  const api_key = "0fc9371f535a41428c2c98e9e546ac2d"

  try {
    // Get the team id from the team name
    const team_id = getTeamId(teamName)
    if (!team_id) {
      return NextResponse.json({ error: "Team not found" }, { status: 404 })
    }

    // Get the matches for the team by using the id
    const matches_url = `${base_url}/teams/${team_id}/matches`
    const headers = {
      "X-Auth-Token": api_key,
    }

    const response = await fetch(matches_url, {
      headers,
      // Add cache control to avoid rate limiting issues
      cache: "force-cache",
      next: { revalidate: 3600 }, // Revalidate every hour
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const matches_data = await response.json()

    if (!matches_data.matches || matches_data.matches.length === 0) {
      return NextResponse.json({ error: "No upcoming matches found" }, { status: 404 })
    }

    const schedule = []
    const current_time = new Date()

    for (const match of matches_data.matches) {
      const match_date = new Date(match.utcDate)
      const match_time = match_date.toTimeString().split(" ")[0]

      let status, score
      if (match_date > current_time) {
        status = "Match not started"
        score = ""
      } else {
        status = "Match finished"
        score = `${match.score.fullTime.home || 0} - ${match.score.fullTime.away || 0}`
      }

      schedule.push({
        date: match_date.toISOString().split("T")[0],
        time: match_time,
        home_team: match.homeTeam.name,
        away_team: match.awayTeam.name,
        competition: match.competition.name,
        status,
        score,
      })
    }

    return NextResponse.json({ schedule })
  } catch (error) {
    console.error("Error fetching team schedule:", error)
    return NextResponse.json({ error: "Failed to fetch team schedule" }, { status: 500 })
  }
}

