import { useState } from 'react';
import { AnimatedBackground } from '../components/layout/AnimatedBackground';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { mockGames } from '../data/games.mock';
import { Game } from '../types/game';

import { GameDetail } from '../components/game-detail';
import { TopGamesYear } from '../components/top-games-year';
import { LatestVideos } from '../components/latest-videos';
import { TopNewReleases } from '../components/top-new-releases';
import { AllGamesGrid } from '../components/all-games-grid';
import { AuthModal } from '../components/auth-modal';


const categories = [
  "All",
  "Action",
  "Puzzle",
  "Strategy",
  "Adventure",
  "Racing",
  "RPG",
  "Sports",
  "Horror",
];

export function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const filteredGames = mockGames.filter((game) => {
    const matchesCategory =
      selectedCategory === "All" ||
      game.category === selectedCategory;

    const matchesSearch = game.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black text-white"> {/*dark */}
      <AnimatedBackground />

      <div className="relative">
        <Header
          searchQuery={searchQuery}
          onSearchQueryChange={setSearchQuery}
          onLoginClick={() => setIsAuthModalOpen(true)}
        />

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 py-6">
          <TopGamesYear
            games={mockGames}
            onGameClick={(game) => setSelectedGame(game)}
          />

          <LatestVideos games={mockGames} />

          <TopNewReleases
            games={mockGames}
            onGameClick={(game) => setSelectedGame(game)}
          />

          <AllGamesGrid
            games={filteredGames}
            onGameClick={(game) => setSelectedGame(game)}
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </main>

        {/* Game Detail Modal */}
        {selectedGame && (
          <GameDetail
            game={selectedGame}
            onClose={() => setSelectedGame(null)}
          />
        )}

        {/* Auth Modal */}
        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
        />
      </div>

      <Footer />
    </div>
  );
}