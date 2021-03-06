
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movie').del()
    .then(function () {
      // Inserts seed entries
      return knex('movie').insert([

        {
          "movie_id": 1,
          "title": "Toy Story (1995)",
          "genres": "Adventure|Animation|Children|Comedy|Fantasy"
        },
        {
          "movie_id": 2,
          "title": "Jumanji (1995)",
          "genres": "Adventure|Children|Fantasy"
        },
        {
          "movie_id": 3,
          "title": "Grumpier Old Men (1995)",
          "genres": "Comedy|Romance"
        },
        {
          "movie_id": 4,
          "title": "Waiting to Exhale (1995)",
          "genres": "Comedy|Drama|Romance"
        },
        {
          "movie_id": 5,
          "title": "Father of the Bride Part II (1995)",
          "genres": "Comedy"
        },
        {
          "movie_id": 6,
          "title": "Heat (1995)",
          "genres": "Action|Crime|Thriller"
        },
        {
          "movie_id": 7,
          "title": "Sabrina (1995)",
          "genres": "Comedy|Romance"
        },
        {
          "movie_id": 8,
          "title": "Tom and Huck (1995)",
          "genres": "Adventure|Children"
        },
        {
          "movie_id": 9,
          "title": "Sudden Death (1995)",
          "genres": "Action"
        },
        {
          "movie_id": 10,
          "title": "GoldenEye (1995)",
          "genres": "Action|Adventure|Thriller"
        },
        {
          "movie_id": 11,
          "title": "American President, The (1995)",
          "genres": "Comedy|Drama|Romance"
        },
        {
          "movie_id": 12,
          "title": "Dracula: Dead and Loving It (1995)",
          "genres": "Comedy|Horror"
        },
        {
          "movie_id": 13,
          "title": "Balto (1995)",
          "genres": "Adventure|Animation|Children"
        },
        {
          "movie_id": 14,
          "title": "Nixon (1995)",
          "genres": "Drama"
        },
        {
          "movie_id": 15,
          "title": "Cutthroat Island (1995)",
          "genres": "Action|Adventure|Romance"
        },
        {
          "movie_id": 16,
          "title": "Casino (1995)",
          "genres": "Crime|Drama"
        },
        {
          "movie_id": 17,
          "title": "Sense and Sensibility (1995)",
          "genres": "Drama|Romance"
        },
        {
          "movie_id": 18,
          "title": "Four Rooms (1995)",
          "genres": "Comedy"
        },
        {
          "movie_id": 19,
          "title": "Ace Ventura: When Nature Calls (1995)",
          "genres": "Comedy"
        },
        {
          "movie_id": 20,
          "title": "Money Train (1995)",
          "genres": "Action|Comedy|Crime|Drama|Thriller"
        },
        {
          "movie_id": 21,
          "title": "Get Shorty (1995)",
          "genres": "Comedy|Crime|Thriller"
        },
        {
          "movie_id": 22,
          "title": "Copycat (1995)",
          "genres": "Crime|Drama|Horror|Mystery|Thriller"
        },
        {
          "movie_id": 23,
          "title": "Assassins (1995)",
          "genres": "Action|Crime|Thriller"
        },
        {
          "movie_id": 24,
          "title": "Powder (1995)",
          "genres": "Drama|Sci-Fi"
        },
        {
          "movie_id": 25,
          "title": "Leaving Las Vegas (1995)",
          "genres": "Drama|Romance"
        },
        {
          "movie_id": 26,
          "title": "Othello (1995)",
          "genres": "Drama"
        },
        {
          "movie_id": 27,
          "title": "Now and Then (1995)",
          "genres": "Children|Drama"
        },
        {
          "movie_id": 28,
          "title": "Persuasion (1995)",
          "genres": "Drama|Romance"
        },
        {
          "movie_id": 29,
          "title": "City of Lost Children, The (Cité des enfants perdus, La) (1995)",
          "genres": "Adventure|Drama|Fantasy|Mystery|Sci-Fi"
        },
        {
          "movie_id": 30,
          "title": "Shanghai Triad (Yao a yao yao dao waipo qiao) (1995)",
          "genres": "Crime|Drama"
        },
        {
          "movie_id": 31,
          "title": "Dangerous Minds (1995)",
          "genres": "Drama"
        },
        {
          "movie_id": 32,
          "title": "Twelve Monkeys (a.k.a. 12 Monkeys) (1995)",
          "genres": "Mystery|Sci-Fi|Thriller"
        },
        {
          "movie_id": 34,
          "title": "Babe (1995)",
          "genres": "Children|Drama"
        },
        {
          "movie_id": 35,
          "title": "Carrington (1995)",
          "genres": "Drama|Romance"
        },
        {
          "movie_id": 36,
          "title": "Dead Man Walking (1995)",
          "genres": "Crime|Drama"
        },
        {
          "movie_id": 37,
          "title": "Across the Sea of Time (1995)",
          "genres": "Documentary|IMAX"
        },
        {
          "movie_id": 38,
          "title": "It Takes Two (1995)",
          "genres": "Children|Comedy"
        },
        {
          "movie_id": 39,
          "title": "Clueless (1995)",
          "genres": "Comedy|Romance"
        },
        {
          "movie_id": 40,
          "title": "Cry, the Beloved Country (1995)",
          "genres": "Drama"
        },
        {
          "movie_id": 41,
          "title": "Richard III (1995)",
          "genres": "Drama|War"
        },
        {
          "movie_id": 42,
          "title": "Dead Presidents (1995)",
          "genres": "Action|Crime|Drama"
        },
        {
          "movie_id": 43,
          "title": "Restoration (1995)",
          "genres": "Drama"
        },
        {
          "movie_id": 44,
          "title": "Mortal Kombat (1995)",
          "genres": "Action|Adventure|Fantasy"
        },
        {
          "movie_id": 45,
          "title": "To Die For (1995)",
          "genres": "Comedy|Drama|Thriller"
        },
        {
          "movie_id": 46,
          "title": "How to Make an American Quilt (1995)",
          "genres": "Drama|Romance"
        },
        {
          "movie_id": 47,
          "title": "Seven (a.k.a. Se7en) (1995)",
          "genres": "Mystery|Thriller"
        },
        {
          "movie_id": 48,
          "title": "Pocahontas (1995)",
          "genres": "Animation|Children|Drama|Musical|Romance"
        },
        {
          "movie_id": 49,
          "title": "When Night Is Falling (1995)",
          "genres": "Drama|Romance"
        },
        {
          "movie_id": 50,
          "title": "Usual Suspects, The (1995)",
          "genres": "Crime|Mystery|Thriller"
        },
        {
          "movie_id": 52,
          "title": "Mighty Aphrodite (1995)",
          "genres": "Comedy|Drama|Romance"
        },
        {
          "movie_id": 53,
          "title": "Lamerica (1994)",
          "genres": "Adventure|Drama"
        },
        {
          "movie_id": 54,
          "title": "Big Green, The (1995)",
          "genres": "Children|Comedy"
        },
        {
          "movie_id": 55,
          "title": "Georgia (1995)",
          "genres": "Drama"
        },
        {
          "movie_id": 57,
          "title": "Home for the Holidays (1995)",
          "genres": "Drama"
        },
        {
          "movie_id": 58,
          "title": "Postman, The (Postino, Il) (1994)",
          "genres": "Comedy|Drama|Romance"
        },
        {
          "movie_id": 59,
          "title": "Confessional, The (Confessionnal, Le) (1995)",
          "genres": "Drama|Mystery"
        },
        {
          "movie_id": 60,
          "title": "Indian in the Cupboard, The (1995)",
          "genres": "Adventure|Children|Fantasy"
        },
        {
          "movie_id": 61,
          "title": "Eye for an Eye (1996)",
          "genres": "Drama|Thriller"
        },
        {
          "movie_id": 62,
          "title": "Mr. Holland's Opus (1995)",
          "genres": "Drama"
        },
        {
          "movie_id": 63,
          "title": "Don't Be a Menace to South Central While Drinking Your Juice in the Hood (1996)",
          "genres": "Comedy|Crime"
        },
        {
          "movie_id": 64,
          "title": "Two if by Sea (1996)",
          "genres": "Comedy|Romance"
        },
        {
          "movie_id": 65,
          "title": "Bio-Dome (1996)",
          "genres": "Comedy"
        },
        {
          "movie_id": 66,
          "title": "Lawnmower Man 2: Beyond Cyberspace (1996)",
          "genres": "Action|Sci-Fi|Thriller"
        },
        {
          "movie_id": 68,
          "title": "French Twist (Gazon maudit) (1995)",
          "genres": "Comedy|Romance"
        },
        {
          "movie_id": 69,
          "title": "Friday (1995)",
          "genres": "Comedy"
        },
        {
          "movie_id": 70,
          "title": "From Dusk Till Dawn (1996)",
          "genres": "Action|Comedy|Horror|Thriller"
        },
        {
          "movie_id": 71,
          "title": "Fair Game (1995)",
          "genres": "Action"
        },
        {
          "movie_id": 72,
          "title": "Kicking and Screaming (1995)",
          "genres": "Comedy|Drama"
        },
        {
          "movie_id": 73,
          "title": "Misérables, Les (1995)",
          "genres": "Drama|War"
        },
        {
          "movie_id": 74,
          "title": "Bed of Roses (1996)",
          "genres": "Drama|Romance"
        },
        {
          "movie_id": 76,
          "title": "Screamers (1995)",
          "genres": "Action|Sci-Fi|Thriller"
        },
        {
          "movie_id": 77,
          "title": "Nico Icon (1995)",
          "genres": "Documentary"
        },
        {
          "movie_id": 78,
          "title": "Crossing Guard, The (1995)",
          "genres": "Action|Crime|Drama|Thriller"
        },
        {
          "movie_id": 79,
          "title": "Juror, The (1996)",
          "genres": "Drama|Thriller"
        },
        {
          "movie_id": 80,
          "title": "White Balloon, The (Badkonake sefid) (1995)",
          "genres": "Children|Drama"
        },
        {
          "movie_id": 81,
          "title": "Things to Do in Denver When You're Dead (1995)",
          "genres": "Crime|Drama|Romance"
        },
        {
          "movie_id": 82,
          "title": "Antonia's Line (Antonia) (1995)",
          "genres": "Comedy|Drama"
        },
        {
          "movie_id": 83,
          "title": "Once Upon a Time... When We Were Colored (1995)",
          "genres": "Drama|Romance"
        },
        {
          "movie_id": 84,
          "title": "Last Summer in the Hamptons (1995)",
          "genres": "Comedy|Drama"
        },
        {
          "movie_id": 85,
          "title": "Angels and Insects (1995)",
          "genres": "Drama|Romance"
        },
        {
          "movie_id": 86,
          "title": "White Squall (1996)",
          "genres": "Action|Adventure|Drama"
        },
        {
          "movie_id": 87,
          "title": "Dunston Checks In (1996)",
          "genres": "Children|Comedy"
        },
        {
          "movie_id": 88,
          "title": "Black Sheep (1996)",
          "genres": "Comedy"
        },
        {
          "movie_id": 89,
          "title": "Nick of Time (1995)",
          "genres": "Action|Thriller"
        },
        {
          "movie_id": 92,
          "title": "Mary Reilly (1996)",
          "genres": "Drama|Horror|Thriller"
        },
        {
          "movie_id": 93,
          "title": "Vampire in Brooklyn (1995)",
          "genres": "Comedy|Horror|Romance"
        },
        {
          "movie_id": 94,
          "title": "Beautiful Girls (1996)",
          "genres": "Comedy|Drama|Romance"
        },
        {
          "movie_id": 95,
          "title": "Broken Arrow (1996)",
          "genres": "Action|Adventure|Thriller"
        },
        {
          "movie_id": 96,
          "title": "In the Bleak Midwinter (1995)",
          "genres": "Comedy|Drama"
        },
        {
          "movie_id": 97,
          "title": "Hate (Haine, La) (1995)",
          "genres": "Crime|Drama"
        },
        {
          "movie_id": 98,
          "title": "Shopping (1994)",
          "genres": "Action|Thriller"
        },
        {
          "movie_id": 99,
          "title": "Heidi Fleiss: Hollywood Madam (1995)",
          "genres": "Documentary"
        },
        {
          "movie_id": 100,
          "title": "City Hall (1996)",
          "genres": "Drama|Thriller"
        },
        {
          "movie_id": 101,
          "title": "Bottle Rocket (1996)",
          "genres": "Adventure|Comedy|Crime|Romance"
        },
        {
          "movie_id": 102,
          "title": "Mr. Wrong (1996)",
          "genres": "Comedy"
        },
        {
          "movie_id": 103,
          "title": "Unforgettable (1996)",
          "genres": "Mystery|Sci-Fi|Thriller"
        },
        {
          "movie_id": 104,
          "title": "Happy Gilmore (1996)",
          "genres": "Comedy"
        },
        {
          "movie_id": 105,
          "title": "Bridges of Madison County, The (1995)",
          "genres": "Drama|Romance"
        },
        {
          "movie_id": 107,
          "title": "Muppet Treasure Island (1996)",
          "genres": "Adventure|Children|Comedy|Musical"
        },
        {
          "movie_id": 108,
          "title": "Catwalk (1996)",
          "genres": "Documentary"
        },
        {
          "movie_id": 110,
          "title": "Braveheart (1995)",
          "genres": "Action|Drama|War"
        },
        {
          "movie_id": 111,
          "title": "Taxi Driver (1976)",
          "genres": "Crime|Drama|Thriller"
        },
        {
          "movie_id": 112,
          "title": "Rumble in the Bronx (Hont faan kui) (1995)",
          "genres": "Action|Adventure|Comedy|Crime"
        },
        {
          "movie_id": 113,
          "title": "Before and After (1996)",
          "genres": "Drama|Mystery"
        },
        {
          "movie_id": 114,
          "title": "Margaret's Museum (1995)",
          "genres": "Drama"
        },
        {
          "movie_id": 116,
          "title": "Anne Frank Remembered (1995)",
          "genres": "Documentary"
        },
        {
          "movie_id": 117,
          "title": "Young Poisoner's Handbook, The (1995)",
          "genres": "Crime|Drama"
        },
        {
          "movie_id": 118,
          "title": "If Lucy Fell (1996)",
          "genres": "Comedy|Romance"
        },
        {
          "movie_id": 119,
          "title": "Steal Big, Steal Little (1995)",
          "genres": "Comedy"
        },
        {
          "movie_id": 121,
          "title": "Boys of St. Vincent, The (1992)",
          "genres": "Drama"
        },
        {
          "movie_id": 122,
          "title": "Boomerang (1992)",
          "genres": "Comedy|Romance"
        },
        {
          "movie_id": 123,
          "title": "Chungking Express (Chung Hing sam lam) (1994)",
          "genres": "Drama|Mystery|Romance"
        },
        {
          "movie_id": 124,
          "title": "Star Maker, The (Uomo delle stelle, L') (1995)",
          "genres": "Drama"
        },
        {
          "movie_id": 125,
          "title": "Flirting With Disaster (1996)",
          "genres": "Comedy"
        },
        {
          "movie_id": 126,
          "title": "NeverEnding Story III, The (1994)",
          "genres": "Adventure|Children|Fantasy"
        },
        {
          "movie_id": 129,
          "title": "Pie in the Sky (1996)",
          "genres": "Comedy|Romance"
        },
        {
          "movie_id": 130,
          "title": "Angela (1995)",
          "genres": "Drama"
        },
        {
          "movie_id": 131,
          "title": "Frankie Starlight (1995)",
          "genres": "Drama|Romance"
        },
        {
          "movie_id": 132,
          "title": "Jade (1995)",
          "genres": "Thriller"
        },
        {
          "movie_id": 135,
          "title": "Down Periscope (1996)",
          "genres": "Comedy"
        },
        {
          "movie_id": 137,
          "title": "Man of the Year (1995)",
          "genres": "Documentary"
        },
        {
          "movie_id": 140,
          "title": "Up Close and Personal (1996)",
          "genres": "Drama|Romance"
        },
        {
          "movie_id": 141,
          "title": "Birdcage, The (1996)",
          "genres": "Comedy"
        },
        {
          "movie_id": 144,
          "title": "Brothers McMullen, The (1995)",
          "genres": "Comedy"
        },
        {
          "movie_id": 145,
          "title": "Bad Boys (1995)",
          "genres": "Action|Comedy|Crime|Drama|Thriller"
        },
        {
          "movie_id": 146,
          "title": "Amazing Panda Adventure, The (1995)",
          "genres": "Adventure|Children"
        },
        {
          "movie_id": 147,
          "title": "Basketball Diaries, The (1995)",
          "genres": "Drama"
        },
        {
          "movie_id": 148,
          "title": "Awfully Big Adventure, An (1995)",
          "genres": "Drama"
        },
        {
          "movie_id": 149,
          "title": "Amateur (1994)",
          "genres": "Crime|Drama|Thriller"
        },
        {
          "movie_id": 150,
          "title": "Apollo 13 (1995)",
          "genres": "Adventure|Drama|IMAX"
        }
      ]);
    });
};
