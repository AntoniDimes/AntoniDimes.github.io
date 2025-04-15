"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"

interface TeamSearchProps {
  teams: string[]
  onSubmit: (teamName: string) => void
}

export function TeamSearch({ teams, onSubmit }: TeamSearchProps) {
  const [inputValue, setInputValue] = useState("")
  const [filteredTeams, setFilteredTeams] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const suggestionsRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)

    if (value.length > 0) {
      const filtered = teams.filter((team) => team.toLowerCase().includes(value.toLowerCase()))
      setFilteredTeams(filtered.slice(0, 10)) // Limit to 10 suggestions
      setShowSuggestions(true)
    } else {
      setFilteredTeams([])
      setShowSuggestions(false)
    }
  }

  const handleSuggestionClick = (team: string) => {
    setInputValue(team)
    setShowSuggestions(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(inputValue)
  }

  return (
    <div className="team-search-container">
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="input-group">
          <input
            ref={inputRef}
            type="text"
            className="form-control"
            placeholder="Enter team name"
            value={inputValue}
            onChange={handleInputChange}
            onFocus={() => inputValue && setShowSuggestions(true)}
          />
          <button type="submit" className="btn btn-primary">
            Get Schedule
          </button>
        </div>

        {showSuggestions && filteredTeams.length > 0 && (
          <div
            ref={suggestionsRef}
            className="list-group position-absolute z-10"
            style={{
              width: inputRef.current ? inputRef.current.offsetWidth : "auto",
              maxHeight: "200px",
              overflowY: "auto",
            }}
          >
            {filteredTeams.map((team, index) => (
              <button
                key={index}
                type="button"
                className="list-group-item list-group-item-action"
                onClick={() => handleSuggestionClick(team)}
              >
                {team}
              </button>
            ))}
          </div>
        )}
      </form>
    </div>
  )
}
