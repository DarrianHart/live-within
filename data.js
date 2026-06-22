// Seed data — hand-curated example data, organized by city.
// To add a new city, add a new key under `cities` following the same shape.

const LIVE_WITHIN_DATA = {
  cities: {
    "richmond, va": {
      displayName: "Richmond, VA",
      categories: {
        groceries: [
          {
            name: "Lidl (Midlothian Tpke)",
            area: "South Side",
            typicalWeeklyCost: 45,
            notes: "Discount grocer, strong produce/bakery deals, weekly specials flyer.",
            deals: [
              "Ribeye, spareribs, salmon, and chicken wings featured for grilling",
              "Peaches and blueberries as the standout summer produce deals",
              "Tyson chicken and rising-crust pizza frozen deals",
              "Bath tissue and paper towels discounted — good week to restock"
            ],
            dealsUpdated: "2026-06-24",
            dealsNote: "Deals change weekly and vary by store — check lidl.com/flyer for your exact location."
          },
          {
            name: "Aldi (Forest Hill Ave)",
            area: "South Side",
            typicalWeeklyCost: 50,
            notes: "Lowest base prices in the city for pantry staples and produce.",
            deals: [
              "Weekly 'ALDI Finds' — limited-stock seasonal specials, best shopped early Wednesday",
              "Rotating discounts across produce, dairy, and pantry staples",
              "No rain checks and no manufacturer coupons accepted — prices are already low"
            ],
            dealsUpdated: "2026-06-24",
            dealsNote: "ALDI Finds sell out fast — check aldi.us/store/aldi/pages/weekly-specials for your exact location."
          },
          {
            name: "Food Lion (Chamberlayne Ave)",
            area: "North Side",
            typicalWeeklyCost: 60,
            notes: "MVP card discounts stack well with weekly sales.",
            deals: [
              "Front-page 'Hot Sale' deep discounts on chicken breast, ground beef, and soda",
              "Dozens of BOGO deals on snacks, cereal, and pantry items",
              "Extra digital coupons available in the Food Lion app, clipped to your MVP account"
            ],
            dealsUpdated: "2026-06-24",
            dealsNote: "Deals vary by region and store — check stores.foodlion.com for your exact location."
          },
          {
            name: "Kroger (Forest Hill Ave)",
            area: "South Side",
            typicalWeeklyCost: 65,
            notes: "Digital coupons + fuel points can offset cost noticeably.",
            deals: [
              "Buy 5 or More, Save $1 Each mega event on groceries, snacks, and beverages",
              "3-Day Sale (Sat-Mon) on select grocery, fresh, and household items",
              "4X Fuel Points on Friday purchases and on Private Selection items with a digital coupon",
              "Buy 2, Save $10 on household, cleaning, and paper products"
            ],
            dealsUpdated: "2026-06-24",
            dealsNote: "Pricing varies by store and region — check kroger.com/weeklyad for your exact location."
          },
          { name: "Richmond Farmers Markets (South of the James, Saturdays)", area: "Forest Hill Park", typicalWeeklyCost: 35, notes: "Best for produce in season; cash often gets small discounts." },
          {
            name: "Publix (Stony Point)",
            area: "South Side",
            typicalWeeklyCost: 75,
            notes: "Higher base cost, but BOGO weeks can bring it close to discount-grocer pricing.",
            deals: [
              "BOGO chicken breast and spareribs",
              "BOGO tomatoes, plus deals on sweet corn and berries",
              "Coffee BOGO; Pepsi buy-2-get-2-free",
              "General Mills cereal BOGO; Old El Paso dinner kits BOGO",
              "Doritos and other snack BOGOs"
            ],
            dealsUpdated: "2026-06-24",
            dealsNote: "Deals change weekly and vary by store — check publix.com/savings/weekly-ad for your exact location."
          }
        ],
        entertainment: [
          { name: "James River Park System", area: "Citywide", typicalCost: 0, notes: "Free hiking, swimming holes, and trails along the river." },
          { name: "First Fridays Art Walk", area: "Arts District", typicalCost: 0, notes: "Free monthly gallery walk, first Friday of each month — art, music, and food." },
          { name: "Maymont Park", area: "West End", typicalCost: 0, notes: "Free admission, gardens, nature center, occasional small paid events." },
          {
            name: "VMFA (Virginia Museum of Fine Arts)",
            area: "Museum District",
            typicalCost: 0,
            notes: "Free general admission; paid special exhibits only.",
            studentTip: "$10/year student membership covers all ticketed exhibits plus free parking."
          },
          { name: "Richmond Flying Squirrels game (Diamond District)", area: "Diamond District", typicalCost: 12, notes: "Minor league baseball, cheap tickets, regular promo nights." },
          { name: "Byrd Theatre Classic Movie Nights", area: "Carytown", typicalCost: 5, notes: "Historic theater, discounted classic film screenings." },
          { name: "Dogtown Dance Theatre community shows", area: "Manchester", typicalCost: 10, notes: "Affordable local performances." },

          // Music venues
          { name: "Canal Club", area: "Shockoe Bottom", typicalCost: 15, notes: "Mid-size live music venue, local and touring indie/rock acts." },
          { name: "Ember Music Hall", area: "Scott's Addition", typicalCost: 18, notes: "Live music hall hosting touring bands across genres." },
          { name: "The National", area: "Downtown", typicalCost: 25, notes: "Larger historic theater/concert venue, bigger-name touring acts." },
          { name: "Allianz Amphitheater at Riverfront", area: "Downtown", typicalCost: 30, notes: "Live Nation's $30 summer concert deal (all-in, fees included) covers many shows here; lawn tickets for 4 sometimes bundled at $99 for select shows.", studentTip: "Watch for Live Nation's seasonal $30 flat-fee ticket promo — great for budget-conscious concertgoers." },

          // Movie theaters
          { name: "BTM Movieland at Boulevard Square — Super Tuesday", area: "Boulevard Square", typicalCost: 10, notes: "Every Tuesday, standard tickets are $10 all day." },
          { name: "Regal Cinemas — Summer Movie Express", area: "Multiple Richmond locations", typicalCost: 2, notes: "Seasonal $2 family movie screenings, Tuesdays and Wednesdays." },
          {
            name: "AMC Theatres (Richmond locations)",
            area: "Multiple Richmond locations",
            typicalCost: 7,
            notes: "AMC Stubs members get discounted Tuesday tickets.",
            studentTip: "Show a valid student ID for AMC's student discount, on top of military and senior discounts."
          },

          // Performing arts with student rush / discount tickets
          { name: "Altria Theater / Dominion Energy Center", area: "Downtown", typicalCost: 15, notes: "Touring Broadway, symphony, and ballet.", studentTip: "Student rush tickets available day-of with valid ID — steep discount off list price." },
          { name: "Virginia Repertory Theatre", area: "Downtown", typicalCost: 15, notes: "Local professional theater productions.", studentTip: "Offers discounted student-rate tickets." },
          { name: "Richmond Symphony / Richmond Ballet", area: "Downtown", typicalCost: 15, notes: "Professional symphony and ballet performances.", studentTip: "Discounted student tickets available with valid ID." }
        ],
        diningOut: [
          { name: "Sub Rosa Bakery", area: "Church Hill", typicalCost: 8, notes: "Wood-fired bread, pastries; cheap and filling." },
          { name: "Dot's Back Inn", area: "Forest Hill", typicalCost: 12, notes: "Classic diner comfort food, generous portions." },
          { name: "Lunch food trucks at Brown's Island", area: "Downtown", typicalCost: 10, notes: "Rotating affordable food trucks, especially Fridays in summer." },
          { name: "3 Monkeys Southside Grill", area: "South Side", typicalCost: 11, notes: "Budget-friendly daily specials." }
        ]
      }
    },

    "henrico, va": {
      displayName: "Henrico, VA",
      categories: {
        groceries: [
          { name: "Aldi (W Broad St)", area: "West Henrico", typicalWeeklyCost: 50, notes: "Lowest base prices for pantry staples and produce." },
          { name: "Aldi (Staples Mill Rd)", area: "Central Henrico", typicalWeeklyCost: 50, notes: "Second Aldi location, convenient for North Side commuters." },
          { name: "Aldi (N Parham Rd)", area: "West End", typicalWeeklyCost: 50, notes: "Discount grocer near West End shopping corridor." },
          { name: "Food Lion (W Broad St)", area: "West Henrico", typicalWeeklyCost: 60, notes: "MVP card discounts stack well with weekly sales." },
          { name: "Kroger (Pemberton Rd)", area: "West End", typicalWeeklyCost: 65, notes: "Digital coupons + fuel points can offset cost noticeably." }
        ],
        entertainment: [
          { name: "Deep Bottom Park", area: "Varina", typicalCost: 0, notes: "Free picnicking on the James River, fishing dock, canoe/kayak launch." },
          { name: "Osborne Park & Boat Landing", area: "Varina", typicalCost: 0, notes: "Free picnic shelters, large playground, accessible fishing pier, paved trails." },
          { name: "Cheswick Park", area: "East Henrico", typicalCost: 0, notes: "Free playgrounds, walking trails, open space for picnics and sports." },
          { name: "Henrico County Recreation & Parks programs", area: "Countywide", typicalCost: 0, notes: "Most county-run programs are free; some require advance registration." },

          // Music venues
          {
            name: "Innsbrook Pavilion (SERVPRO After Hours Concerts)",
            area: "Innsbrook / Glen Allen",
            typicalCost: 25,
            notes: "8,500-capacity outdoor venue. 'Tribute Thursdays' series for 2026 — tribute bands, food trucks, lawn games, family-friendly.",
            studentTip: "Lawn tickets are usually the cheapest way in — check afterhoursinnsbrook.com for current pricing."
          },

          // Movie theaters
          {
            name: "Henrico Theatre",
            area: "Highland Springs",
            typicalCost: 8,
            notes: "Restored 1938 movie palace, now a county-run multi-use venue for film, music, dance, and theatre."
          },
          { name: "Regal Virginia Center", area: "Glen Allen", typicalCost: 7, notes: "Mainstream first-run movies; watch for Tuesday discount pricing." },
          { name: "Regal Westchester Commons", area: "Midlothian-adjacent", typicalCost: 7, notes: "Mainstream first-run movies; watch for Tuesday discount pricing." },
          {
            name: "CMX CinéBistro Stony Point",
            area: "Stony Point (Richmond/Henrico line)",
            typicalCost: 12,
            notes: "Dine-in theater, higher cost but frequent matinee and weekday specials.",
            studentTip: "Ask about student pricing on weekday matinees — varies by showing."
          }
        ],
        diningOut: [
          { name: "Food trucks at Innsbrook (seasonal)", area: "Innsbrook", typicalCost: 10, notes: "Rotating affordable food trucks during warmer months." }
        ]
      }
    }
  }
};
