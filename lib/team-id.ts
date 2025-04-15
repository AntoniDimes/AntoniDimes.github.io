// This function is to get the id
export function getTeamId(teamName: string): number | undefined {
  const teamIds = getTeamIdMap()
  return teamIds[teamName]
}

// This function is to get the team
export function getTeams(): string[] {
  const teamIds = getTeamIdMap()
  return Object.keys(teamIds)
}

// Helper function to get the team ID map
function getTeamIdMap(): Record<string, number> {
  return {
    // Premier League (England)
    Arsenal: 57,
    "Aston Villa": 58,
    Bournemouth: 1044,
    Brentford: 402,
    "Brighton & Hove Albion": 397,
    Burnley: 328,
    Chelsea: 61,
    "Crystal Palace": 354,
    Everton: 62,
    Fulham: 63,
    Liverpool: 64,
    "Luton Town": 389,
    "Manchester City": 65,
    "Manchester United": 66,
    "Newcastle United": 67,
    "Nottingham Forest": 351,
    "Sheffield United": 356,
    "Tottenham Hotspur": 73,
    "West Ham United": 563,
    "Wolverhampton Wanderers": 76,
    // La Liga (Spain)
    Barcelona: 81,
    "Real Madrid": 86,
    "Atlético Madrid": 78,
    Sevilla: 559,
    "Real Sociedad": 92,
    "Real Betis": 90,
    "Athletic Club": 77,
    "Celta Vigo": 558,
    "Deportivo Alavés": 263,
    Getafe: 82,
    Girona: 715,
    Granada: 83,
    "Las Palmas": 275,
    Mallorca: 278,
    Osasuna: 79,
    "Rayo Vallecano": 87,
    Valencia: 95,
    Villarreal: 94,
    // Serie A (Italy)
    "AC Milan": 98,
    "Inter Milan": 108,
    Juventus: 109,
    Napoli: 113,
    "AS Roma": 100,
    Lazio: 110,
    Atalanta: 102,
    Bologna: 103,
    Cagliari: 104,
    Empoli: 445,
    Fiorentina: 99,
    Genoa: 107,
    "Hellas Verona": 450,
    Lecce: 471,
    Monza: 488,
    Parma: 112,
    Sampdoria: 584,
    Sassuolo: 471,
    Spezia: 488,
    Torino: 586,
    Udinese: 115,
    // Bundesliga (Germany)
    "Bayern Munich": 5,
    "Borussia Dortmund": 4,
    "RB Leipzig": 721,
    "Bayer Leverkusen": 3,
    "Union Berlin": 28,
    "Eintracht Frankfurt": 19,
    "FC Augsburg": 16,
    "VfL Bochum": 185,
    "Borussia Mönchengladbach": 18,
    "SC Freiburg": 17,
    "1. FC Heidenheim": 184,
    "1. FSV Mainz 05": 15,
    "1. FC Köln": 1,
    "SV Werder Bremen": 12,
    "VfB Stuttgart": 11,
    "TSG Hoffenheim": 2,
    "VfL Wolfsburg": 13,
    // Ligue 1 (France)
    "Paris Saint-Germain": 524,
    "Olympique Marseille": 516,
    "Olympique Lyon": 523,
    Monaco: 548,
    Rennes: 529,
    Lille: 521,
    Ajaccio: 99,
    Auxerre: 98,
    Brest: 97,
    Clermont: 99,
    Lens: 98,
    Lorient: 97,
    Metz: 98,
    Montpellier: 99,
    Nantes: 97,
    Nice: 98,
    Reims: 97,
    Strasbourg: 98,
    Toulouse: 97,
    Troyes: 98,
    // Eredivisie (Netherlands)
    Ajax: 678,
    PSV: 674,
    Feyenoord: 675,
    "AZ Alkmaar": 689,
    "FC Twente": 680,
    Utrecht: 682,
    "FC Groningen": 202,
    "SC Heerenveen": 306,
    "Heracles Almelo": 1304,
    "NEC Nijmegen": 467,
    "PEC Zwolle": 1269,
    "RKC Waalwijk": 235,
    "Sparta Rotterdam": 468,
    Vitesse: 474,
    "Willem II": 403,
  }
}
