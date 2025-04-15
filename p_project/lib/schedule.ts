// This file now uses our API route instead of directly calling the football-data.org API

export async function getTeamSchedule(teamName: string) {
  try {
    // Call our own API route instead of the external API directly
    const response = await fetch(`/api/schedule?team=${encodeURIComponent(teamName)}`)

    if (!response.ok) {
      const errorData = await response.json()
      console.error("API error:", errorData)
      return null
    }

    const data = await response.json()
    return data.schedule
  } catch (error) {
    console.error("Error fetching team schedule:", error)
    return null
  }
}
