import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
  return (
<section className="App">
        <TwitterFollowCard isFollowing userName="midudev">
          Miguel Ángel Duran
        </TwitterFollowCard>

        <TwitterFollowCard isFollowing={false} userName="orellana_carlos">
          Carlos Orellana
        </TwitterFollowCard>

        <TwitterFollowCard isFollowing userName="jeicof">
          Jeison Viloria
        </TwitterFollowCard>
        </section>
    )
}
export default App