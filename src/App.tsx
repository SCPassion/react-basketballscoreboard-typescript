import React from "react"
import ScoreButton from "./components/ScoreButton"

type Score = {
  home: number
  guest: number
}
function App() {
  const [count, setCount] = React.useState<Score>({
    home: 0,
    guest: 0,
  })

  function handleClick(team: "home" | "guest", scoreToAdd: number): void {
    setCount(
      (prevCount) =>
        ({
          ...prevCount,
          [team]: prevCount[team] + scoreToAdd,
        }) as Score,
    )
  }

  return (
    <div className="mx-auto mt-3 flex h-[385px] w-[575px] items-center justify-center gap-25 rounded-2xl border-2 border-white bg-[#1B244A] shadow-2xl">
      <div className="flex flex-col items-center justify-center gap-8">
        <h2 className="text-5xl font-bold text-[#EEEEEE]">HOME</h2>
        <div className="font-aznm flex items-center justify-center rounded-md bg-[#080001] text-8xl">
          <p className="px-10 py-8 text-[#F94F6D]">{count.home}</p>
        </div>

        <div className="font-aznm flex gap-2">
          <ScoreButton team="home" points={1} handleClick={handleClick}>
            +1
          </ScoreButton>
          <ScoreButton team="home" points={2} handleClick={handleClick}>
            +2
          </ScoreButton>
          <ScoreButton team="home" points={3} handleClick={handleClick}>
            +3
          </ScoreButton>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-8">
        <h2 className="text-5xl font-bold text-[#EEEEEE]">GUEST</h2>
        <div className="font-aznm flex items-center justify-center rounded-md bg-[#080001] text-8xl">
          <p className="px-10 py-8 text-[#F94F6D]">{count.guest}</p>
        </div>
        <div className="font-aznm flex gap-2">
          <ScoreButton team="guest" points={1} handleClick={handleClick}>
            +1
          </ScoreButton>
          <ScoreButton team="guest" points={2} handleClick={handleClick}>
            +2
          </ScoreButton>
          <ScoreButton team="guest" points={3} handleClick={handleClick}>
            +3
          </ScoreButton>
        </div>
      </div>
    </div>
  )
}

export default App
