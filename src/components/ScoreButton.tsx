type ScoreButtonProps = {
  team: "home" | "guest"
  points: number
  handleClick: (team: "home" | "guest", scoreToAdd: number) => void
  children: React.ReactNode
}

export default function ScoreButton({
  team,
  points,
  handleClick,
  children,
}: ScoreButtonProps) {
  return (
    <button
      className="size-11.25 cursor-pointer rounded-lg border-2 border-[#9AABD8] text-[#9AABD8] transition-all hover:scale-115 hover:animate-pulse"
      onClick={() => handleClick(team, points)}
    >
      {children}
    </button>
  )
}
