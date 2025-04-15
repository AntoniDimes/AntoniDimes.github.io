"use client"

import { useState } from "react"
import { getTeams } from "@/lib/team-id"
import { getTeamSchedule } from "@/lib/schedule"
import { TeamSearch } from "@/components/team-search"
import { ScheduleDisplay } from "@/components/schedule-display"

export default function SchedulePage() {
  const [schedule, setSchedule] = useState<any[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const teams = getTeams()

  const handleTeamSubmit = async (teamName: string) => {
    if (!teamName) {
      setError("Please enter a team name.")
      return
    }

    // Auto-capitalize the first letter of each word
    const formattedTeamName = teamName
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

    try {
      const teamSchedule = await getTeamSchedule(formattedTeamName)

      if (teamSchedule) {
        setSchedule(teamSchedule)
        setError(null)
      } else {
        setError(`No schedule found for team '${formattedTeamName}'. Please try again.`)
        setSchedule(null)
      }
    } catch (err) {
      setError("An error occurred while fetching the schedule. Please try again.")
      setSchedule(null)
    }
  }

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Team Schedule</h1>

      <TeamSearch teams={teams} onSubmit={handleTeamSubmit} />

      {error && (
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      )}

      {schedule && <ScheduleDisplay schedule={schedule} />}
    </div>
  )
}
