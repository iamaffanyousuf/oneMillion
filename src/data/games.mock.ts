import { Game } from "../types/game";

export const mockGames: Game[] = [
  {
    id: 1,
    title: "The Legend of Zelda: Breath of the Wild",
    image:
      "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
    rating: 4.9,
    category: "Adventure",
    trending: true,
    reviews: 3200000,
    description:
      "An open-world action-adventure game where Link awakens to save Hyrule from Calamity Ganon in a vast, beautiful world.",
    releaseDate: "Mar 2017",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    screenshots: [
      "https://wallpaperaccess.com/full/1208965.jpg",
      "https://wallpaperaccess.com/full/1208967.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "ZeldaFan92",
        rating: 5.0,
        comment: "Revolutionary open-world design. A masterpiece.",
        date: "Jan 2026",
      },
    ],
  },

  {
    id: 2,
    title: "Red Dead Redemption 2",
    image:
      "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg",
    rating: 4.9,
    category: "Adventure",
    trending: true,
    reviews: 3800000,
    description:
      "A cinematic open-world western following Arthur Morgan and the Van der Linde gang during the fall of the outlaw era.",
    releaseDate: "Oct 2018",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    screenshots: [
      "https://wallpaperaccess.com/full/124235.jpg",
      "https://wallpaperaccess.com/full/124237.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "StoryLover",
        rating: 5.0,
        comment: "The best narrative experience ever made in gaming.",
        date: "Jan 2026",
      },
    ],
  },

  {
    id: 3,
    title: "Elden Ring",
    image:
      "https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg",
    rating: 4.8,
    category: "RPG",
    trending: true,
    reviews: 2100000,
    description:
      "A vast dark-fantasy action RPG by FromSoftware and George R.R. Martin, blending open-world exploration with challenging combat.",
    releaseDate: "Feb 2022",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    screenshots: [
      "https://wallpaperaccess.com/full/7952966.jpg",
      "https://wallpaperaccess.com/full/7952970.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "SoulsVeteran",
        rating: 4.8,
        comment: "Brutal, beautiful, and endlessly rewarding.",
        date: "Jan 2026",
      },
    ],
  },

  {
    id: 4,
    title: "The Witcher 3: Wild Hunt",
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",
    rating: 4.9,
    category: "RPG",
    reviews: 6300000,
    description:
      "A story-driven RPG following Geralt of Rivia in a richly detailed fantasy world full of choices and consequences.",
    releaseDate: "May 2015",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    screenshots: [
      "https://wallpaperaccess.com/full/124238.jpg",
      "https://wallpaperaccess.com/full/124240.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "RPGFan",
        rating: 5.0,
        comment: "Side quests better than most games' main stories.",
        date: "Jan 2026",
      },
    ],
  },

  {
    id: 5,
    title: "Grand Theft Auto V",
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png",
    rating: 4.8,
    category: "Action",
    trending: true,
    reviews: 6500000,
    description:
      "An open-world action-adventure game set in Los Santos, following three criminals navigating heists, chaos, and personal conflicts.",
    releaseDate: "Sep 2013",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    screenshots: [
      "https://wallpaperaccess.com/full/114429.jpg",
      "https://wallpaperaccess.com/full/114431.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "OpenWorldFan",
        rating: 5.0,
        comment: "Still unmatched in freedom and content even after years.",
        date: "Jan 2026",
      },
    ],
  },

  {
    id: 6,
    title: "Minecraft",
    image: "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png",
    rating: 4.9,
    category: "Adventure",
    reviews: 6400000,
    description:
      "A sandbox game about creativity, survival, and exploration with limitless possibilities.",
    releaseDate: "Nov 2011",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    screenshots: [
      "https://wallpaperaccess.com/full/168204.jpg",
      "https://wallpaperaccess.com/full/168210.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "Builder",
        rating: 5.0,
        comment: "Timeless. Everyone should play this at least once.",
        date: "Jan 2026",
      },
    ],
  },

  {
    id: 7,
    title: "God of War (2018)",
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg",
    rating: 4.9,
    category: "Action",
    trending: true,
    reviews: 2400000,
    description:
      "Kratos and his son Atreus journey through Norse mythology in this emotional action-adventure masterpiece.",
    releaseDate: "Apr 2018",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    screenshots: [
      "https://wallpaperaccess.com/full/1086738.jpg",
      "https://wallpaperaccess.com/full/1086742.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "NorseLegend",
        rating: 5.0,
        comment: "Perfect blend of combat and storytelling.",
        date: "Jan 2026",
      },
    ],
  },

  {
    id: 8,
    title: "Cyberpunk 2077",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg",
    rating: 4.5,
    category: "RPG",
    trending: true,
    reviews: 1800000,
    description:
      "An open-world RPG set in Night City, where you play as V, a mercenary seeking immortality through a dangerous prototype implant.",
    releaseDate: "Dec 2020",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    screenshots: [
      "https://wallpaperaccess.com/full/4036365.jpg",
      "https://wallpaperaccess.com/full/4036370.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "Netrunner",
        rating: 4.6,
        comment: "After updates, it's become an incredible experience.",
        date: "Jan 2026",
      },
    ],
  },

  {
    id: 9,
    title: "The Last of Us Part II",
    image:
      "https://upload.wikimedia.org/wikipedia/en/4/4f/TLOU_P2_Box_Art_2.png",
    rating: 4.7,
    category: "Action",
    reviews: 2200000,
    description:
      "A brutal tale of revenge and redemption following Ellie in a post-apocalyptic world.",
    releaseDate: "Jun 2020",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    screenshots: [
      "https://wallpaperaccess.com/full/3166779.jpg",
      "https://wallpaperaccess.com/full/3166782.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "SurvivalGamer",
        rating: 4.7,
        comment: "Emotionally challenging but technically brilliant.",
        date: "Jan 2026",
      },
    ],
  },

  {
    id: 10,
    title: "Dark Souls III",
    image:
      "https://upload.wikimedia.org/wikipedia/en/b/bb/Dark_souls_3_cover_art.jpg",
    rating: 4.7,
    category: "RPG",
    reviews: 1600000,
    description:
      "The final chapter in the Dark Souls trilogy, featuring challenging combat and interconnected world design.",
    releaseDate: "Apr 2016",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    screenshots: [
      "https://wallpaperaccess.com/full/1208254.jpg",
      "https://wallpaperaccess.com/full/1208257.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "HollowKnight",
        rating: 4.8,
        comment: "Punishing but fair. Every victory feels earned.",
        date: "Jan 2026",
      },
    ],
  },

  {
    id: 11,
    title: "Hades",
    image: "https://upload.wikimedia.org/wikipedia/en/c/cc/Hades_cover_art.jpg",
    rating: 4.8,
    category: "Action",
    trending: true,
    reviews: 980000,
    description:
      "A roguelike dungeon crawler where you play as Zagreus, attempting to escape the Underworld while uncovering family secrets.",
    releaseDate: "Sep 2020",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    screenshots: [
      "https://wallpaperaccess.com/full/4548792.jpg",
      "https://wallpaperaccess.com/full/4548795.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "RoguelikeFan",
        rating: 4.9,
        comment: "Addictive gameplay with incredible storytelling.",
        date: "Jan 2026",
      },
    ],
  },

  {
    id: 12,
    title: "Horizon Zero Dawn",
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/3d/Horizon_Zero_Dawn_cover_art.jpg",
    rating: 4.7,
    category: "Adventure",
    reviews: 1900000,
    description:
      "Explore a post-apocalyptic world dominated by robotic creatures as Aloy uncovers the mysteries of the past.",
    releaseDate: "Feb 2017",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    screenshots: [
      "https://wallpaperaccess.com/full/739929.jpg",
      "https://wallpaperaccess.com/full/739932.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "MachineHunter",
        rating: 4.7,
        comment: "Unique setting with engaging combat mechanics.",
        date: "Jan 2026",
      },
    ],
  },

  {
    id: 13,
    title: "Sekiro: Shadows Die Twice",
    image: "https://upload.wikimedia.org/wikipedia/en/6/6e/Sekiro_art.jpg",
    rating: 4.8,
    category: "Action",
    reviews: 1400000,
    description:
      "A brutal action-adventure set in feudal Japan, featuring precise sword combat and stealth mechanics.",
    releaseDate: "Mar 2019",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    screenshots: [
      "https://wallpaperaccess.com/full/2423658.jpg",
      "https://wallpaperaccess.com/full/2423662.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "Shinobi",
        rating: 4.9,
        comment: "The most satisfying combat system I've experienced.",
        date: "Jan 2026",
      },
    ],
  },

  {
    id: 14,
    title: "Spider-Man (2018)",
    image:
      "https://upload.wikimedia.org/wikipedia/en/e/e1/Spider-Man_PS4_cover.jpg",
    rating: 4.8,
    category: "Action",
    reviews: 2100000,
    description:
      "Swing through New York City as Spider-Man in this thrilling open-world adventure.",
    releaseDate: "Sep 2018",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    screenshots: [
      "https://wallpaperaccess.com/full/1086843.jpg",
      "https://wallpaperaccess.com/full/1086847.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "WebSlinger",
        rating: 4.8,
        comment: "Makes you truly feel like Spider-Man.",
        date: "Jan 2026",
      },
    ],
  },

  {
    id: 15,
    title: "Baldur's Gate 3",
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/38/Baldur%27s_Gate_3_cover_art.jpg",
    rating: 4.9,
    category: "RPG",
    trending: true,
    reviews: 1100000,
    description:
      "A sprawling fantasy RPG based on Dungeons & Dragons, featuring deep choices and tactical turn-based combat.",
    releaseDate: "Aug 2023",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    screenshots: [
      "https://wallpaperaccess.com/full/8876543.jpg",
      "https://wallpaperaccess.com/full/8876546.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "DnDMaster",
        rating: 5.0,
        comment: "The best RPG of the decade. Endless possibilities.",
        date: "Jan 2026",
      },
    ],
  },

  {
    id: 16,
    title: "Resident Evil 4 (Remake)",
    image:
      "https://upload.wikimedia.org/wikipedia/en/2/2f/Resident_Evil_4_remake_cover_art.jpg",
    rating: 4.8,
    category: "Horror",
    reviews: 950000,
    description:
      "A modern remake of the survival horror classic, reimagined with intense combat and atmosphere.",
    releaseDate: "Mar 2023",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    screenshots: [
      "https://wallpaperaccess.com/full/8475965.jpg",
      "https://wallpaperaccess.com/full/8475968.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "HorrorCore",
        rating: 4.8,
        comment: "Faithful yet fresh. A masterclass remake.",
        date: "Jan 2026",
      },
    ],
  },

  {
    id: 17,
    title: "Forza Horizon 5",
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/86/Forza_Horizon_5_cover_art.jpg",
    rating: 4.7,
    category: "Racing",
    trending: true,
    reviews: 6480000,
    description:
      "An open-world racing game set in Mexico, featuring hundreds of cars and stunning environments.",
    releaseDate: "Nov 2021",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    screenshots: [
      "https://wallpaperaccess.com/full/6834176.jpg",
      "https://wallpaperaccess.com/full/6834179.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "CarEnthusiast",
        rating: 4.7,
        comment: "Visually stunning and incredibly smooth to play.",
        date: "Jan 2026",
      },
    ],
  },

  {
    id: 18,
    title: "Hollow Knight",
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/04/Hollow_Knight_first_cover_art.webp",
    rating: 4.8,
    category: "Adventure",
    reviews: 850000,
    description:
      "A beautifully crafted metroidvania set in a haunting insect kingdom filled with secrets.",
    releaseDate: "Feb 2017",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    screenshots: [
      "https://wallpaperaccess.com/full/1590234.jpg",
      "https://wallpaperaccess.com/full/1590237.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "IndieGamer",
        rating: 4.9,
        comment: "An indie masterpiece with incredible atmosphere.",
        date: "Jan 2026",
      },
    ],
  },

  {
    id: 19,
    title: "Stardew Valley",
    image:
      "https://upload.wikimedia.org/wikipedia/en/f/fd/Logo_of_Stardew_Valley.png",
    rating: 4.9,
    category: "Adventure",
    reviews: 1200000,
    description:
      "A charming farming simulator where you build your dream farm, make friends, and explore the countryside.",
    releaseDate: "Feb 2016",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    screenshots: [
      "https://wallpaperaccess.com/full/2690547.jpg",
      "https://wallpaperaccess.com/full/2690552.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "FarmLife",
        rating: 5.0,
        comment: "Relaxing and endlessly replayable. Pure joy.",
        date: "Jan 2026",
      },
    ],
  },

  {
    id: 20,
    title: "Doom Eternal",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/9d/Cover_Art_of_Doom_Eternal.png",
    rating: 4.7,
    category: "Action",
    reviews: 920000,
    description:
      "Fast-paced demon-slaying action with intense combat and heavy metal soundtrack.",
    releaseDate: "Mar 2020",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    screenshots: [
      "https://wallpaperaccess.com/full/3166854.jpg",
      "https://wallpaperaccess.com/full/3166859.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "DoomSlayer",
        rating: 4.8,
        comment: "Pure adrenaline. The best FPS combat ever made.",
        date: "Jan 2026",
      },
    ],
  },

  {
    id: 21,
    title: "Ghost of Tsushima",
    image:
      "https://upload.wikimedia.org/wikipedia/en/b/b6/Ghost_of_Tsushima.jpg",
    rating: 4.8,
    category: "Action",
    reviews: 1700000,
    description:
      "A stunning samurai adventure set in feudal Japan during the Mongol invasion.",
    releaseDate: "Jul 2020",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    screenshots: [
      "https://wallpaperaccess.com/full/3508654.jpg",
      "https://wallpaperaccess.com/full/3508658.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "SamuraiPath",
        rating: 4.8,
        comment: "Breathtaking visuals and satisfying sword combat.",
        date: "Jan 2026",
      },
    ],
  },

  {
    id: 22,
    title: "Celeste",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0f/Celeste_box_art_full.png",
    rating: 4.8,
    category: "Adventure",
    reviews: 650000,
    description:
      "A challenging platformer about climbing a mountain while dealing with personal struggles.",
    releaseDate: "Jan 2018",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    screenshots: [
      "https://wallpaperaccess.com/full/1590245.jpg",
      "https://wallpaperaccess.com/full/1590248.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "PlatformerPro",
        rating: 4.9,
        comment: "Tight controls and a touching story about perseverance.",
        date: "Jan 2026",
      },
    ],
  },

  {
    id: 23,
    title: "Overwatch 2",
    image:
      "https://upload.wikimedia.org/wikipedia/en/c/c5/Overwatch_2_full_logo.png",
    rating: 4.3,
    category: "Action",
    trending: true,
    reviews: 2800000,
    description:
      "Team-based hero shooter with diverse characters and competitive gameplay.",
    releaseDate: "Oct 2022",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    screenshots: [
      "https://wallpaperaccess.com/full/7459834.jpg",
      "https://wallpaperaccess.com/full/7459839.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "HeroMain",
        rating: 4.4,
        comment: "Still fun with friends despite the changes.",
        date: "Jan 2026",
      },
    ],
  },

  {
    id: 24,
    title: "Call of Duty: Modern Warfare II",
    image:
      "https://upload.wikimedia.org/wikipedia/en/2/23/Call_of_Duty_Modern_Warfare_II_Key_Art.jpg",
    rating: 4.5,
    category: "Action",
    trending: true,
    reviews: 3100000,
    description:
      "Military shooter with cinematic campaign and intense multiplayer action.",
    releaseDate: "Oct 2022",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    screenshots: [
      "https://wallpaperaccess.com/full/7459876.jpg",
      "https://wallpaperaccess.com/full/7459881.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "TacticalOps",
        rating: 4.6,
        comment: "Best CoD in years. Campaign is spectacular.",
        date: "Jan 2026",
      },
    ],
  },

  {
    id: 25,
    title: "Valorant",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/fc/Valorant_logo_-_pink_color_version.svg",
    rating: 4.4,
    category: "Action",
    trending: true,
    reviews: 2400000,
    description:
      "Tactical 5v5 character-based shooter combining precise gunplay with unique agent abilities.",
    releaseDate: "Jun 2020",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    screenshots: [
      "https://wallpaperaccess.com/full/3508712.jpg",
      "https://wallpaperaccess.com/full/3508718.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "CompetitiveGamer",
        rating: 4.5,
        comment: "High skill ceiling with great competitive scene.",
        date: "Jan 2026",
      },
    ],
  },

  {
    id: 26,
    title: "Animal Crossing: New Horizons",
    image:
      "https://upload.wikimedia.org/wikipedia/en/1/1f/Animal_Crossing_New_Horizons.jpg",
    rating: 4.7,
    category: "Adventure",
    reviews: 1900000,
    description:
      "Build and customize your island paradise in this relaxing life simulation game.",
    releaseDate: "Mar 2020",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    screenshots: [
      "https://wallpaperaccess.com/full/3166923.jpg",
      "https://wallpaperaccess.com/full/3166928.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "IslandBuilder",
        rating: 4.7,
        comment: "Perfect escape. Wholesome and creative.",
        date: "Jan 2026",
      },
    ],
  },

  {
    id: 27,
    title: "League of Legends",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d8/League_of_Legends_2019_vector.svg",
    rating: 4.5,
    category: "Action",
    trending: true,
    reviews: 6500000,
    description:
      "The world's most popular MOBA, featuring strategic 5v5 battles with over 160 champions.",
    releaseDate: "Oct 2009",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    screenshots: [
      "https://wallpaperaccess.com/full/188034.jpg",
      "https://wallpaperaccess.com/full/188039.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "SummonersRift",
        rating: 4.6,
        comment: "Addictive and constantly evolving. A classic.",
        date: "Jan 2026",
      },
    ],
  },

  {
    id: 28,
    title: "Final Fantasy VII Rebirth",
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/af/Final_Fantasy_VII_Rebirth_cover_art.jpg",
    rating: 4.9,
    category: "RPG",
    trending: true,
    reviews: 850000,
    description:
      "Cloud and his friends escape Midgar to explore the vast planet in this stunning reimagining of the classic RPG.",
    releaseDate: "Feb 2024",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    screenshots: [
      "https://images.alphacoders.com/133/1331718.jpeg",
      "https://images.alphacoders.com/132/1329215.jpeg",
    ],
    userReviews: [
      {
        id: 1,
        author: "MakoSoldier",
        rating: 5.0,
        comment: "Breathtaking scale and combat.",
        date: "Jan 2026",
      },
    ],
  },
  {
    id: 29,
    title: "Alan Wake 2",
    image:
      "https://upload.wikimedia.org/wikipedia/en/e/ed/Alan_Wake_2_box_art.jpg",
    rating: 4.8,
    category: "Horror",
    trending: true,
    reviews: 420000,
    description:
      "A dual-protagonist survival horror story where a writer and an FBI agent fight to escape a nightmare reality.",
    releaseDate: "Oct 2023",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    screenshots: [
      "https://images.alphacoders.com/131/1314480.jpeg",
      "https://images.alphacoders.com/133/1338275.jpeg",
    ],
    userReviews: [
      {
        id: 1,
        author: "DarkPlace",
        rating: 4.9,
        comment: "The most atmospheric game I've ever played.",
        date: "Jan 2026",
      },
    ],
  },
  {
    id: 30,
    title: "Street Fighter 6",
    image:
      "https://upload.wikimedia.org/wikipedia/en/6/61/Street_Fighter_6_box_art.jpg",
    rating: 4.7,
    category: "Action",
    reviews: 310000,
    description:
      "The next evolution of the fighting genre, featuring the innovative World Tour mode and polished combat.",
    releaseDate: "Jun 2023",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    screenshots: [
      "https://images.alphacoders.com/123/1239993.jpg",
      "https://images.alphacoders.com/131/1317178.jpeg",
    ],
    userReviews: [
      {
        id: 1,
        author: "ComboKing",
        rating: 4.8,
        comment: "Modern controls are a game changer.",
        date: "Jan 2026",
      },
    ],
  },
  {
    id: 31,
    title: "Helldivers 2",
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/06/Helldivers_2_cover_art.jpg",
    rating: 4.8,
    category: "Action",
    trending: true,
    reviews: 1200000,
    description:
      "Join the Helldivers and fight for freedom across a hostile galaxy in this fast-paced third-person shooter.",
    releaseDate: "Feb 2024",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    screenshots: [
      "https://images.alphacoders.com/135/1352458.jpeg",
      "https://images.alphacoders.com/135/1354394.jpeg",
    ],
    userReviews: [
      {
        id: 1,
        author: "LibertyPrime",
        rating: 5.0,
        comment: "How about a nice cup of Liber-tea!",
        date: "Jan 2026",
      },
    ],
  },
  {
    id: 32,
    title: "Persona 5 Royal",
    image:
      "https://upload.wikimedia.org/wikipedia/en/b/b0/Persona_5_Royal_poster.jpg",
    rating: 4.9,
    category: "RPG",
    reviews: 950000,
    description:
      "A stylish JRPG where students moonlight as Phantom Thieves to change the hearts of corrupt adults.",
    releaseDate: "Mar 2020",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    screenshots: [
      "https://images.alphacoders.com/100/1004123.jpg",
      "https://images.alphacoders.com/105/1056586.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "Joker",
        rating: 5.0,
        comment: "Style, substance, and incredible music.",
        date: "Jan 2026",
      },
    ],
  },
  {
    id: 33,
    title: "Sea of Thieves",
    image:
      "https://upload.wikimedia.org/wikipedia/en/e/e0/Sea_of_Thieves_Key_Art.png",
    rating: 4.6,
    category: "Adventure",
    reviews: 2100000,
    description:
      "The essential pirate experience, from sailing and fighting to exploring and looting.",
    releaseDate: "Mar 2018",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    screenshots: [
      "https://images.alphacoders.com/904/904257.jpg",
      "https://images.alphacoders.com/135/1359678.jpeg",
    ],
    userReviews: [
      {
        id: 1,
        author: "CaptainJack",
        rating: 4.5,
        comment: "Best water physics in any game ever.",
        date: "Jan 2026",
      },
    ],
  },
  {
    id: 34,
    title: "Genshin Impact",
    image: "https://upload.wikimedia.org/wikipedia/en/5/5d/Genshin_Impact.png",
    rating: 4.5,
    category: "RPG",
    trending: true,
    reviews: 5900000,
    description:
      "An open-world action RPG where you travel across Teyvat to find your lost sibling.",
    releaseDate: "Sep 2020",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    screenshots: [
      "https://images.alphacoders.com/904/1105953.jpg",
      "https://images.alphacoders.com/135/1148861.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "TeyvatTraveler",
        rating: 4.0,
        comment: "Beautiful world and constant updates.",
        date: "Jan 2026",
      },
    ],
  },
  {
    id: 35,
    title: "Apex Legends",
    image:
      "https://upload.wikimedia.org/wikipedia/en/d/db/Apex_legends_cover.jpg",
    rating: 4.4,
    category: "Action",
    trending: true,
    reviews: 4500000,
    description:
      "A hero-based battle royale where unique characters battle for glory and fame on the fringes of the Frontier.",
    releaseDate: "Feb 2019",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    screenshots: [
      "https://images.alphacoders.com/983/983424.jpg",
      "https://images.alphacoders.com/983/983427.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "WraithMain",
        rating: 4.5,
        comment: "Movement and gunplay feel incredible.",
        date: "Jan 2026",
      },
    ],
  },
  {
    id: 36,
    title: "Bloodborne",
    image:
      "https://upload.wikimedia.org/wikipedia/en/6/6d/Bloodborne_Cover_Art.jpg",
    rating: 4.9,
    category: "RPG",
    reviews: 1800000,
    description:
      "Face your fears as you search for answers in the ancient city of Yharnam, cursed with a strange endemic illness.",
    releaseDate: "Mar 2015",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    screenshots: [
      "https://images.alphacoders.com/581/581452.jpg",
      "https://images.alphacoders.com/604/604344.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "Hunter",
        rating: 5.0,
        comment: "Fear the old blood.",
        date: "Jan 2026",
      },
    ],
  },
  {
    id: 37,
    title: "Rocket League",
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/33/Rocket_League_coverart.jpg",
    rating: 4.6,
    category: "Racing",
    reviews: 3200000,
    description:
      "Soccer meets driving in this high-powered hybrid of arcade-style soccer and vehicular mayhem.",
    releaseDate: "Jul 2015",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    screenshots: [
      "https://images.alphacoders.com/609/609144.jpg",
      "https://images.alphacoders.com/673/673236.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "Goalkeeper",
        rating: 4.7,
        comment: "Easy to learn, impossible to master.",
        date: "Jan 2026",
      },
    ],
  },
  {
    id: 38,
    title: "Starfield",
    image:
      "https://upload.wikimedia.org/wikipedia/en/6/6d/Starfield_artwork.jpg",
    rating: 4.2,
    category: "RPG",
    reviews: 1100000,
    description:
      "In this next-generation role-playing game set amongst the stars, create any character you want and explore with unparalleled freedom.",
    releaseDate: "Sep 2023",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    screenshots: [
      "https://images.alphacoders.com/131/1319760.jpeg",
      "https://images.alphacoders.com/131/1315570.jpeg",
    ],
    userReviews: [
      {
        id: 1,
        author: "SpaceExplorer",
        rating: 4.0,
        comment: "Massive world, though the loading screens are frequent.",
        date: "Jan 2026",
      },
    ],
  },
  {
    id: 39,
    title: "The Sims 4",
    image: "https://upload.wikimedia.org/wikipedia/en/7/7f/Sims4_coverart.jpg",
    rating: 4.3,
    category: "Adventure",
    reviews: 5100000,
    description:
      "Enjoy the power to create and control people in a virtual world where there are no rules.",
    releaseDate: "Sep 2014",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    screenshots: [
      "https://images.alphacoders.com/536/536413.jpg",
      "https://images.alphacoders.com/997/997233.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "Simmer99",
        rating: 4.5,
        comment: "Endless creativity with the DLCs.",
        date: "Jan 2026",
      },
    ],
  },
  {
    id: 40,
    title: "Disco Elysium",
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/ae/Disco_Elysium_poster.jpg",
    rating: 4.9,
    category: "RPG",
    reviews: 350000,
    description:
      "A groundbreaking open-world RPG. You’re a detective with a unique skill system at your disposal and a whole city block to carve your path across.",
    releaseDate: "Oct 2019",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    screenshots: [
      "https://images.alphacoders.com/105/1050587.jpg",
      "https://images.alphacoders.com/114/1144412.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "Philosopher",
        rating: 5.0,
        comment: "The best writing in gaming history.",
        date: "Jan 2026",
      },
    ],
  },
  {
    id: 41,
    title: "Detroit: Become Human",
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/a2/Detroit_Become_Human_art.jpg",
    rating: 4.7,
    category: "Adventure",
    reviews: 1400000,
    description:
      "Detroit 2038. Technology has evolved to a point where human-like androids are everywhere. They speak, move and behave like human beings.",
    releaseDate: "May 2018",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    screenshots: [
      "https://images.alphacoders.com/920/920551.jpg",
      "https://images.alphacoders.com/920/920556.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "AndroidDream",
        rating: 4.8,
        comment: "Your choices actually matter here.",
        date: "Jan 2026",
      },
    ],
  },
  {
    id: 42,
    title: "Dead Space (Remake)",
    image:
      "https://upload.wikimedia.org/wikipedia/en/b/b8/Dead_Space_Remake_Cover_Art.jpg",
    rating: 4.8,
    category: "Horror",
    reviews: 290000,
    description:
      "Isaac Clarke is an everyman engineer on a mission to repair a vast mining ship, the USG Ishimura, only to discover something has gone horribly wrong.",
    releaseDate: "Jan 2023",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    screenshots: [
      "https://images.alphacoders.com/129/1299974.jpeg",
      "https://images.alphacoders.com/129/1299977.jpeg",
    ],
    userReviews: [
      {
        id: 1,
        author: "NecroHunter",
        rating: 4.9,
        comment: "Scarier than the original.",
        date: "Jan 2026",
      },
    ],
  },
  {
    id: 43,
    title: "Terraria",
    image:
      "https://upload.wikimedia.org/wikipedia/en/d/db/Terraria_Box_Art.jpg",
    rating: 4.8,
    category: "Adventure",
    reviews: 2800000,
    description:
      "Dig, fight, explore, build! Nothing is impossible in this action-packed adventure game.",
    releaseDate: "May 2011",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    screenshots: [
      "https://images.alphacoders.com/132/1321453.jpeg",
      "https://images.alphacoders.com/241/241314.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "2DBuilder",
        rating: 5.0,
        comment: "Minecraft in 2D? No, it's so much more.",
        date: "Jan 2026",
      },
    ],
  },
  {
    id: 44,
    title: "Dota 2",
    image: "https://upload.wikimedia.org/wikipedia/en/0/0b/Dota_2_v6.0.png",
    rating: 4.4,
    category: "Action",
    reviews: 4900000,
    description:
      "Every day, millions of players worldwide enter battle as one of over a hundred Dota heroes.",
    releaseDate: "Jul 2013",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    screenshots: [
      "https://images.alphacoders.com/433/433365.jpg",
      "https://images.alphacoders.com/264/264871.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "MidOrFeed",
        rating: 4.5,
        comment: "Complex, rewarding, and highly competitive.",
        date: "Jan 2026",
      },
    ],
  },
  {
    id: 45,
    title: "Gran Turismo 7",
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/af/Gran_Turismo_7_cover_art.jpg",
    rating: 4.6,
    category: "Racing",
    reviews: 680000,
    description:
      "The Real Driving Simulator. Whether you’re a competitive or casual racer, collector, tuner, livery designer, or photographer.",
    releaseDate: "Mar 2022",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    screenshots: [
      "https://images.alphacoders.com/121/1217036.jpg",
      "https://images.alphacoders.com/108/1085023.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "PetrolHead",
        rating: 4.7,
        comment: "The cars look photorealistic.",
        date: "Jan 2026",
      },
    ],
  },
  {
    id: 46,
    title: "Phasmophobia",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/97/Phasmophobia_poster.jpg",
    rating: 4.8,
    category: "Horror",
    trending: true,
    reviews: 580000,
    description:
      "Phasmophobia is a 4 player online co-op psychological horror where you and your team of paranormal investigators will enter haunted locations.",
    releaseDate: "Sep 2020",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    screenshots: [
      "https://images.alphacoders.com/131/1318287.jpeg",
      "https://images.alphacoders.com/112/1126756.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "GhostWhisperer",
        rating: 4.9,
        comment: "Terrifyingly fun with friends.",
        date: "Jan 2026",
      },
    ],
  },
  {
    id: 47,
    title: "Monster Hunter: World",
    image:
      "https://upload.wikimedia.org/wikipedia/en/f/f0/Monster_Hunter_World_cover_art.jpg",
    rating: 4.8,
    category: "Action",
    reviews: 1900000,
    description:
      "Welcome to a new world! Take on the role of a hunter and slay ferocious monsters in a living, breathing ecosystem.",
    releaseDate: "Jan 2018",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    screenshots: [
      "https://images.alphacoders.com/893/893096.jpg",
      "https://images.alphacoders.com/849/849503.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "MonsterSlayer",
        rating: 4.8,
        comment: "The grind is real and so rewarding.",
        date: "Jan 2026",
      },
    ],
  },
  {
    id: 48,
    title: "Sea of Stars",
    image:
      "https://upload.wikimedia.org/wikipedia/en/4/40/Sea_of_Stars_cover_art.jpg",
    rating: 4.8,
    category: "RPG",
    reviews: 210000,
    description:
      "A turn-based RPG inspired by the classics. It tells the story of two Children of the Solstice who combine the powers of the sun and moon.",
    releaseDate: "Aug 2023",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    screenshots: [
      "https://images.alphacoders.com/133/1331201.jpeg",
      "https://images.alphacoders.com/131/1315849.jpeg",
    ],
    userReviews: [
      {
        id: 1,
        author: "RetroFan",
        rating: 5.0,
        comment: "The perfect love letter to Chrono Trigger.",
        date: "Jan 2026",
      },
    ],
  },
  {
    id: 49,
    title: "Total War: Warhammer III",
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/87/Total_War_Warhammer_III_cover_art.jpg",
    rating: 4.5,
    category: "Action",
    reviews: 320000,
    description:
      "The cataclysmic conclusion to the Total War: Warhammer trilogy. Rally your forces and step into the Realm of Chaos.",
    releaseDate: "Feb 2022",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    screenshots: [
      "https://images.alphacoders.com/112/1128711.jpg",
      "https://images.alphacoders.com/120/1206684.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "Strategist",
        rating: 4.5,
        comment: "Immense scale and variety.",
        date: "Jan 2026",
      },
    ],
  },
  {
    id: 50,
    title: "Among Us",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/9a/Among_Us_cover_art.jpg",
    rating: 4.4,
    category: "Adventure",
    reviews: 12000000,
    description:
      "An online and local session-based game of teamwork and betrayal for 4-15 players... in space!",
    releaseDate: "Jun 2018",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    screenshots: [
      "https://images.alphacoders.com/109/1098808.jpg",
      "https://images.alphacoders.com/111/1111663.jpg",
    ],
    userReviews: [
      {
        id: 1,
        author: "SusPerson",
        rating: 4.5,
        comment: "Ruining friendships since 2018.",
        date: "Jan 2026",
      },
    ],
  },
];
