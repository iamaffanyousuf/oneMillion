import { Game } from "../types/game";

export const mockGames: Game[] = [
  {
    id: 1,
    title: "Neon Warriors: Cyber Strike",
    image:
      "https://images.unsplash.com/photo-1664092815283-19c6196f5319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjeWJlcnB1bmslMjBuZW9ufGVufDF8fHx8MTc2ODcyNzA5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.8,
    category: "Action",
    trending: true,
    reviews: 2840,
    description:
      "Dive into a cyberpunk dystopia where you fight as an enhanced warrior against corrupt corporations. Fast-paced action meets stunning neon-soaked visuals in this groundbreaking mobile experience.",
    releaseDate: "Dec 2025",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    screenshots: [
      "https://images.unsplash.com/photo-1664092815283-19c6196f5319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjeWJlcnB1bmslMjBuZW9ufGVufDF8fHx8MTc2ODcyNzA5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1715639733007-c5836d9ee2d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBnYW1pbmclMjBzY3JlZW5zaG90fGVufDF8fHx8MTc2ODcyOTY3NXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1762441112136-4dfc6edf58e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZ2FtZSUyMGJhdHRsZXxlbnwxfHx8fDE3Njg2NDgzMzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1632765743329-3b257fe779a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwZ2FtaW5nJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2ODcyOTY3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1765430847336-596f709e8b3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBhY3Rpb24lMjBzY2VuZXxlbnwxfHx8fDE3Njg3Mjk2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    userReviews: [
      {
        id: 1,
        author: "CyberGamer99",
        rating: 5.0,
        comment:
          "Absolutely stunning visuals and gameplay. Best mobile action game I've played!",
        date: "Jan 15, 2026",
      },
      {
        id: 2,
        author: "MobileProGaming",
        rating: 4.5,
        comment:
          "Great game but needs better controller support. Still highly recommended!",
        date: "Jan 10, 2026",
      },
    ],
  },
  {
    id: 2,
    title: "Quantum Puzzle Masters",
    image:
      "https://images.unsplash.com/photo-1559984430-c12e199879b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBnYW1lJTIwY29udHJvbGxlcnxlbnwxfHx8fDE3Njg3MjcwOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.6,
    category: "Puzzle",
    reviews: 1520,
    description:
      "Mind-bending puzzles that challenge your perception of reality. Manipulate quantum mechanics to solve increasingly complex challenges in this innovative puzzle game.",
    releaseDate: "Nov 2025",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    screenshots: [
      "https://images.unsplash.com/photo-1559984430-c12e199879b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBnYW1lJTIwY29udHJvbGxlcnxlbnwxfHx8fDE3Njg3MjcwOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1559984430-c12e199879b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBnYW1lJTIwY29udHJvbGxlcnxlbnwxfHx8fDE3Njg3MjcwOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    userReviews: [
      {
        id: 1,
        author: "PuzzleMaster",
        rating: 4.8,
        comment: "Incredibly creative puzzles. Really makes you think!",
        date: "Jan 12, 2026",
      },
      {
        id: 2,
        author: "CasualPlayer",
        rating: 4.0,
        comment:
          "Great concept but some levels are too difficult. Still enjoying it though.",
        date: "Jan 8, 2026",
      },
    ],
  },
  {
    id: 3,
    title: "Galaxy Legends",
    image:
      "https://images.unsplash.com/photo-1549455498-56fbe510ab66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZ2FtaW5nfGVufDF8fHx8MTc2ODcyNzA5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.9,
    category: "Strategy",
    trending: true,
    reviews: 4200,
    description:
      "Build your intergalactic empire across multiple star systems. Deep strategic gameplay with stunning 3D graphics that push mobile gaming to its limits.",
    releaseDate: "Oct 2025",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    screenshots: [
      "https://images.unsplash.com/photo-1549455498-56fbe510ab66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZ2FtaW5nfGVufDF8fHx8MTc2ODcyNzA5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549455498-56fbe510ab66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZ2FtaW5nfGVufDF8fHx8MTc2ODcyNzA5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    userReviews: [
      {
        id: 1,
        author: "StrategyKing",
        rating: 5.0,
        comment:
          "This is the future of mobile strategy games. Incredible depth and replay value!",
        date: "Jan 14, 2026",
      },
      {
        id: 2,
        author: "SpaceExplorer",
        rating: 4.9,
        comment:
          "Amazing graphics and gameplay. Slightly pay-to-win but still very playable.",
        date: "Jan 11, 2026",
      },
    ],
  },
  {
    id: 4,
    title: "Shadow Assassins",
    image:
      "https://images.unsplash.com/photo-1635372730136-06b29022281c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzJTIwZ2FtaW5nfGVufDF8fHx8MTc2ODcyNzA5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.7,
    category: "Adventure",
    reviews: 3100,
    description:
      "Step into the shadows as a legendary assassin in this atmospheric adventure. Stealth mechanics meet parkour in a beautifully crafted world.",
    releaseDate: "Sep 2025",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    screenshots: [
      "https://images.unsplash.com/photo-1635372730136-06b29022281c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzJTIwZ2FtaW5nfGVufDF8fHx8MTc2ODcyNzA5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1635372730136-06b29022281c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzJTIwZ2FtaW5nfGVufDF8fHx8MTc2ODcyNzA5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    userReviews: [
      {
        id: 1,
        author: "StealthGamer",
        rating: 4.8,
        comment: "Perfect blend of stealth and action. Love the atmosphere!",
        date: "Jan 13, 2026",
      },
      {
        id: 2,
        author: "AdventureSeeker",
        rating: 4.6,
        comment:
          "Great story and mechanics. Some minor bugs but overall excellent.",
        date: "Jan 9, 2026",
      },
    ],
  },
  {
    id: 5,
    title: "Racing Legends 2026",
    image:
      "https://images.unsplash.com/photo-1664092815283-19c6196f5319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjeWJlcnB1bmslMjBuZW9ufGVufDF8fHx8MTc2ODcyNzA5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.5,
    category: "Racing",
    trending: true,
    reviews: 2650,
    description:
      "Experience the thrill of high-speed racing with photorealistic graphics. Customize your dream car and compete against players worldwide.",
    releaseDate: "Jan 2026",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    screenshots: [
      "https://images.unsplash.com/photo-1664092815283-19c6196f5319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjeWJlcnB1bmslMjBuZW9ufGVufDF8fHx8MTc2ODcyNzA5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1664092815283-19c6196f5319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjeWJlcnB1bmslMjBuZW9ufGVufDF8fHx8MTc2ODcyNzA5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    userReviews: [
      {
        id: 1,
        author: "SpeedDemon",
        rating: 4.7,
        comment: "Graphics are insane! Controls feel great on touchscreen.",
        date: "Jan 16, 2026",
      },
      {
        id: 2,
        author: "RacingFan",
        rating: 4.3,
        comment: "Solid racing game. Could use more tracks.",
        date: "Jan 14, 2026",
      },
    ],
  },
  {
    id: 6,
    title: "Mystic Realms Online",
    image:
      "https://images.unsplash.com/photo-1549455498-56fbe510ab66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZ2FtaW5nfGVufDF8fHx8MTc2ODcyNzA5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.4,
    category: "RPG",
    reviews: 5800,
    description:
      "Embark on an epic journey through mystical realms filled with magic and danger. Team up with friends in this massive multiplayer RPG adventure.",
    releaseDate: "Aug 2025",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    screenshots: [
      "https://images.unsplash.com/photo-1549455498-56fbe510ab66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZ2FtaW5nfGVufDF8fHx8MTc2ODcyNzA5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549455498-56fbe510ab66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZ2FtaW5nfGVufDF8fHx8MTc2ODcyNzA5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    userReviews: [
      {
        id: 1,
        author: "RPGMaster",
        rating: 4.5,
        comment:
          "Deep RPG mechanics and great community. Love the character customization!",
        date: "Jan 12, 2026",
      },
      {
        id: 2,
        author: "FantasyFan",
        rating: 4.3,
        comment: "Good game but servers can be laggy. Still worth playing!",
        date: "Jan 7, 2026",
      },
    ],
  },
  {
    id: 7,
    title: "Kingdom Chronicles",
    image:
      "https://images.unsplash.com/photo-1739654235915-5523ab58d7a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbWVkaWV2YWwlMjBnYW1pbmd8ZW58MXx8fHwxNzY4NzYxMzA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.7,
    category: "Strategy",
    reviews: 4850,
    description:
      "Build and defend your medieval kingdom in this epic strategy game. Command armies, forge alliances, and conquer rival kingdoms in stunning battles.",
    releaseDate: "Jul 2025",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    screenshots: [
      "https://images.unsplash.com/photo-1739654235915-5523ab58d7a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbWVkaWV2YWwlMjBnYW1pbmd8ZW58MXx8fHwxNzY4NzYxMzA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1739654235915-5523ab58d7a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbWVkaWV2YWwlMjBnYW1pbmd8ZW58MXx8fHwxNzY4NzYxMzA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    userReviews: [
      {
        id: 1,
        author: "KingdomBuilder",
        rating: 4.8,
        comment:
          "Best medieval strategy game on mobile. Love the depth and complexity!",
        date: "Jan 15, 2026",
      },
      {
        id: 2,
        author: "WarriorQueen",
        rating: 4.6,
        comment: "Amazing graphics and gameplay. Battles are so satisfying!",
        date: "Jan 10, 2026",
      },
    ],
  },
  {
    id: 8,
    title: "Dark Haven: Nightfall",
    image:
      "https://images.unsplash.com/photo-1762217235246-4235328d882b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjBnYW1pbmclMjBkYXJrfGVufDF8fHx8MTc2ODc2MTMwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.6,
    category: "Horror",
    reviews: 3920,
    description:
      "Survive the nightmarish streets of Dark Haven in this atmospheric horror adventure. Every shadow hides a threat in this terrifying mobile experience.",
    releaseDate: "Oct 2025",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    screenshots: [
      "https://images.unsplash.com/photo-1762217235246-4235328d882b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjBnYW1pbmclMjBkYXJrfGVufDF8fHx8MTc2ODc2MTMwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1762217235246-4235328d882b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjBnYW1pbmclMjBkYXJrfGVufDF8fHx8MTc2ODc2MTMwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    userReviews: [
      {
        id: 1,
        author: "HorrorFan88",
        rating: 4.7,
        comment:
          "Genuinely scary! Amazing atmosphere and sound design. Don't play at night!",
        date: "Jan 14, 2026",
      },
      {
        id: 2,
        author: "ScareMaster",
        rating: 4.5,
        comment: "Best horror game on mobile. Graphics are incredible!",
        date: "Jan 11, 2026",
      },
    ],
  },
  {
    id: 9,
    title: "Ultimate Soccer Champions",
    image:
      "https://images.unsplash.com/photo-1759078634243-1d5325f49477?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBnYW1pbmclMjBzb2NjZXJ8ZW58MXx8fHwxNzY4NzYxMzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.5,
    category: "Sports",
    reviews: 4320,
    description:
      "Experience the thrill of professional soccer on mobile. Build your dream team, master realistic controls, and compete in global tournaments.",
    releaseDate: "Sep 2025",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    screenshots: [
      "https://images.unsplash.com/photo-1759078634243-1d5325f49477?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBnYW1pbmclMjBzb2NjZXJ8ZW58MXx8fHwxNzY4NzYxMzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1759078634243-1d5325f49477?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBnYW1pbmclMjBzb2NjZXJ8ZW58MXx8fHwxNzY4NzYxMzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    userReviews: [
      {
        id: 1,
        author: "SoccerPro",
        rating: 4.6,
        comment: "Most realistic soccer game on mobile. Controls are perfect!",
        date: "Jan 13, 2026",
      },
      {
        id: 2,
        author: "FutbolFan",
        rating: 4.4,
        comment:
          "Great graphics and gameplay. Ultimate team mode is addictive!",
        date: "Jan 9, 2026",
      },
    ],
  },
  {
    id: 10,
    title: "Survival Royale: Last Stand",
    image:
      "https://images.unsplash.com/photo-1726935043403-29a87cfe895c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXR0bGUlMjByb3lhbGUlMjBnYW1pbmd8ZW58MXx8fHwxNzY4NzYxMzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.8,
    category: "Action",
    reviews: 6150,
    description:
      "Drop into the ultimate battle royale experience. 100 players, one winner. Intense combat, strategic gameplay, and stunning graphics combine for mobile gaming perfection.",
    releaseDate: "Jun 2025",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    screenshots: [
      "https://images.unsplash.com/photo-1726935043403-29a87cfe895c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXR0bGUlMjByb3lhbGUlMjBnYW1pbmd8ZW58MXx8fHwxNzY4NzYxMzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1726935043403-29a87cfe895c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXR0bGUlMjByb3lhbGUlMjBnYW1pbmd8ZW58MXx8fHwxNzY4NzYxMzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    userReviews: [
      {
        id: 1,
        author: "BattleRoyalePro",
        rating: 4.9,
        comment:
          "The best battle royale game on mobile! Graphics and gameplay are top-tier!",
        date: "Jan 16, 2026",
      },
      {
        id: 2,
        author: "SurvivalKing",
        rating: 4.7,
        comment:
          "Addictive and well-optimized. So much better than other BR games!",
        date: "Jan 12, 2026",
      },
    ],
  },
];
