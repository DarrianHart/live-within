// Seed data — hand-curated example data, organized by city.
// To add a new city, add a new key under `cities` following the same shape.

const LIVE_WITHIN_DATA = {
  // Bump this whenever store/venue data or weekly deals are refreshed.
  lastUpdated: "2026-06-27",
  cities: {
    "richmond, va": {
      displayName: "Richmond, VA",
      photo: "assets/richmond-skyline-night.jpg",
      photoCredit: "Richmond, VA skyline photo via Unsplash",
      categories: {
        groceries: [
          {
            name: "Lidl (Midlothian Tpke)",
            area: "South Side",
            website: "https://www.lidl.com/",
            typicalWeeklyCost: 45,
            notes: "Discount grocer, strong produce/bakery deals, weekly specials flyer.",
            deals: [
              "Ribeye, spareribs, salmon, and chicken wings featured for grilling",
              "Peaches and blueberries as the standout summer produce deals",
              "Tyson chicken and rising-crust pizza frozen deals",
              "Bath tissue and paper towels discounted — good week to restock"
            ],
            dealsUpdated: "2026-06-27",
            dealsNote: "Deals change weekly and vary by store — check lidl.com for your exact location."
          },
          {
            name: "Aldi (Forest Hill Ave)",
            area: "South Side",
            website: "https://www.aldi.us/",
            typicalWeeklyCost: 50,
            notes: "Lowest base prices in the city for pantry staples and produce.",
            deals: [
              "Weekly 'ALDI Finds' — limited-stock seasonal specials, best shopped early Wednesday",
              "Rotating discounts across produce, dairy, and pantry staples",
              "No rain checks and no manufacturer coupons accepted — prices are already low"
            ],
            dealsUpdated: "2026-06-27",
            dealsNote: "ALDI Finds sell out fast — check aldi.us for your exact location."
          },
          {
            name: "Food Lion (Chamberlayne Ave)",
            area: "North Side",
            website: "https://www.foodlion.com/",
            typicalWeeklyCost: 60,
            notes: "MVP card discounts stack well with weekly sales.",
            deals: [
              "Front-page 'Hot Sale' deep discounts on chicken breast, ground beef, and soda",
              "Dozens of BOGO deals on snacks, cereal, and pantry items",
              "Extra digital coupons available in the Food Lion app, clipped to your MVP account"
            ],
            dealsUpdated: "2026-06-27",
            dealsNote: "Deals vary by region and store — check foodlion.com for your exact location."
          },
          {
            name: "Kroger (Forest Hill Ave)",
            area: "South Side",
            website: "https://www.kroger.com/",
            typicalWeeklyCost: 65,
            notes: "Digital coupons + fuel points can offset cost noticeably.",
            deals: [
              "Buy 5 or More, Save $1 Each Mega Event on groceries, snacks, and beverages",
              "Buy 2, Save $10 on household, cleaning, and paper products",
              "5X Hot Weekly Digital Deals — limit 5 items per transaction, check app for specifics",
              "4X Fuel Points on select Private Selection items with a digital coupon"
            ],
            dealsUpdated: "2026-06-27",
            dealsNote: "Pricing varies by store and region — check kroger.com/weeklyad for your exact location."
          },
          {
            name: "Richmond Farmers Markets (South of the James, Saturdays)",
            area: "Forest Hill Park",
            website: "https://www.rfmarva.org/",
            typicalWeeklyCost: 35,
            notes: "Best for produce in season; cash often gets small discounts."
          },
          {
            name: "Publix (Stony Point)",
            area: "South Side",
            website: "https://www.publix.com/",
            typicalWeeklyCost: 75,
            notes: "Higher base cost, but BOGO weeks can bring it close to discount-grocer pricing.",
            deals: [
              "BOGO on Sabra Hummus, King's Hawaiian Buns, and Kraft Shredded Cheese",
              "Gatorade 4-packs BOGO; Pepsi buy-2-get-2-free",
              "Chicken breast BOGO; deli deals on rotisserie chicken",
              "Doritos and General Mills cereal BOGOs"
            ],
            dealsUpdated: "2026-06-27",
            dealsNote: "Deals change weekly and vary by store — check publix.com/savings/weekly-ad for your exact location."
          }
        ],
        entertainment: [
          { name: "James River Park System", area: "Citywide", website: "https://jamesriverpark.org/", typicalCost: 0, notes: "Free hiking, swimming holes, and trails along the river." },
          { name: "First Fridays Art Walk", area: "Arts District", website: "https://firstfridaysrichmond.com/", typicalCost: 0, notes: "Free monthly gallery walk, first Friday of each month — art, music, and food." },
          { name: "Maymont Park", area: "West End", website: "https://maymont.org/", typicalCost: 0, notes: "Free admission, gardens, nature center, occasional small paid events." },
          {
            name: "VMFA (Virginia Museum of Fine Arts)",
            area: "Museum District",
            website: "https://www.vmfa.museum/",
            typicalCost: 0,
            notes: "Free general admission; paid special exhibits only.",
            studentTip: "$10/year student membership covers all ticketed exhibits plus free parking."
          },
          { name: "Richmond Flying Squirrels game (Diamond District)", area: "Diamond District", website: "https://www.milb.com/richmond", typicalCost: 12, notes: "Minor league baseball, cheap tickets, regular promo nights." },
          { name: "Byrd Theatre Classic Movie Nights", area: "Carytown", website: "https://byrdtheatre.org/", typicalCost: 5, notes: "Historic theater, discounted classic film screenings." },
          { name: "Dogtown Dance Theatre community shows", area: "Manchester", website: "https://dogtown.dance/", typicalCost: 10, notes: "Affordable local performances." },
          { name: "Canal Club", area: "Shockoe Bottom", website: "https://thecanalclub.com/", typicalCost: 15, notes: "Mid-size live music venue, local and touring indie/rock acts." },
          { name: "Ember Music Hall", area: "Scott's Addition", website: "https://embermusichall.com/", typicalCost: 18, notes: "Live music hall hosting touring bands across genres." },
          { name: "The National", area: "Downtown", website: "https://www.thenationalva.com/", typicalCost: 25, notes: "Larger historic theater/concert venue, bigger-name touring acts." },
          { name: "Allianz Amphitheater at Riverfront", area: "Downtown", website: "https://www.allianzamphitheater.com/", typicalCost: 30, notes: "Outdoor amphitheater on the James River; Live Nation's $30 flat-fee summer concert deal covers many shows here.", studentTip: "Watch for Live Nation's seasonal $30 flat-fee ticket promo — great for budget-conscious concertgoers." },
          { name: "BTM Movieland at Boulevard Square — Super Tuesday", area: "Boulevard Square", website: "https://www.btmmovies.com/", typicalCost: 10, notes: "Every Tuesday, standard tickets are $10 all day." },
          { name: "Regal Cinemas — Summer Movie Express", area: "Multiple Richmond locations", website: "https://www.regmovies.com/", typicalCost: 2, notes: "Seasonal $2 family movie screenings, Tuesdays and Wednesdays." },
          {
            name: "AMC Theatres (Richmond locations)",
            area: "Multiple Richmond locations",
            website: "https://www.amctheatres.com/",
            typicalCost: 7,
            notes: "AMC Stubs members get discounted Tuesday tickets.",
            studentTip: "Show a valid student ID for AMC's student discount, on top of military and senior discounts."
          },
          { name: "Altria Theater / Dominion Energy Center", area: "Downtown", website: "https://www.altriatheater.com/", typicalCost: 15, notes: "Touring Broadway, symphony, and ballet.", studentTip: "Student rush tickets available day-of with valid ID — steep discount off list price." },
          { name: "Virginia Repertory Theatre", area: "Downtown", website: "https://va-rep.org/", typicalCost: 15, notes: "Local professional theater productions.", studentTip: "Offers discounted student-rate tickets." },
          { name: "Richmond Symphony / Richmond Ballet", area: "Downtown", website: "https://richmondsymphony.com/", typicalCost: 15, notes: "Professional symphony and ballet performances.", studentTip: "Discounted student tickets available with valid ID." }
        ],
        diningOut: [
          { name: "Sub Rosa Bakery", area: "Church Hill", website: "https://www.subrosabakery.com/", typicalCost: 8, notes: "Wood-fired bread, pastries; cheap and filling." },
          { name: "Dot's Back Inn", area: "Forest Hill", typicalCost: 12, notes: "Classic diner comfort food, generous portions." },
          { name: "Lunch food trucks at Brown's Island", area: "Downtown", typicalCost: 10, notes: "Rotating affordable food trucks, especially Fridays in summer." },
          { name: "3 Monkeys Southside Grill", area: "South Side", typicalCost: 11, notes: "Budget-friendly daily specials." }
        ],
        shopping: [
          { name: "Fan Tastic Thrift", area: "The Fan", typicalCost: 3, notes: "T-shirts as cheap as $0.99, sweaters around $2.98 — one of the cheapest thrift options in the city." },
          { name: "Liberation Thrift", area: "South Side", typicalCost: 6, notes: "One of the largest secondhand outlets in Richmond — clothes, furniture, electronics, housewares." },
          { name: "Hope Thrift", area: "Tuckahoe / Bellgrade", website: "https://hopethrift.org/", typicalCost: 6, notes: "Multiple locations, extensive inventory of furniture, clothing, vintage pieces, and home goods." },
          { name: "Buffalo Exchange", area: "Carytown", website: "https://buffaloexchange.com/location/carytown-richmond/", typicalCost: 12, notes: "Trendy and vintage resale — buy, sell, or trade clothing." },
          { name: "Clothes Rack", area: "Carytown", typicalCost: 10, notes: "Curated secondhand clothing, accessories, and home decor at affordable prices." },
          { name: "Clementine", area: "Carytown", typicalCost: 20, notes: "Pre-loved women's contemporary and designer fashion, more than 50% off retail." },
          { name: "It's Chic Again", area: "Carytown", typicalCost: 25, notes: "Upscale consignment — up to 80% off designer brands like Dior, Louis Vuitton, Ralph Lauren." },
          { name: "Jefferson Davis Flea Market", area: "South Side", typicalCost: 5, notes: "100+ vendors selling clothes, jewelry, cookware, and more. Open Fri-Sun." },
          { name: "The Diamond Flea Market", area: "North Side", typicalCost: 5, notes: "Free-to-attend monthly market (May-Oct) with local and national vendors." }
        ]
      }
    },

    "henrico, va": {
      displayName: "Henrico, VA",
      photo: "assets/richmond-skyline-night.jpg",
      categories: {
        groceries: [
          { name: "Aldi (W Broad St)", area: "West Henrico", website: "https://www.aldi.us/", typicalWeeklyCost: 50, notes: "Lowest base prices for pantry staples and produce." },
          { name: "Aldi (Staples Mill Rd)", area: "Central Henrico", website: "https://www.aldi.us/", typicalWeeklyCost: 50, notes: "Second Aldi location, convenient for North Side commuters." },
          { name: "Aldi (N Parham Rd)", area: "West End", website: "https://www.aldi.us/", typicalWeeklyCost: 50, notes: "Discount grocer near West End shopping corridor." },
          { name: "Food Lion (W Broad St)", area: "West Henrico", website: "https://www.foodlion.com/", typicalWeeklyCost: 60, notes: "MVP card discounts stack well with weekly sales." },
          { name: "Kroger (Pemberton Rd)", area: "West End", website: "https://www.kroger.com/", typicalWeeklyCost: 65, notes: "Digital coupons + fuel points can offset cost noticeably." }
        ],
        entertainment: [
          { name: "Deep Bottom Park", area: "Varina", typicalCost: 0, notes: "Free picnicking on the James River, fishing dock, canoe/kayak launch." },
          { name: "Osborne Park & Boat Landing", area: "Varina", typicalCost: 0, notes: "Free picnic shelters, large playground, accessible fishing pier, paved trails." },
          { name: "Cheswick Park", area: "East Henrico", typicalCost: 0, notes: "Free playgrounds, walking trails, open space for picnics and sports." },
          { name: "Henrico County Recreation & Parks programs", area: "Countywide", website: "https://www.henricorecreation.org/", typicalCost: 0, notes: "Most county-run programs are free; some require advance registration." },
          {
            name: "Innsbrook Pavilion (SERVPRO After Hours Concerts)",
            area: "Innsbrook / Glen Allen",
            website: "https://afterhoursinnsbrook.com/",
            typicalCost: 25,
            notes: "8,500-capacity outdoor venue. 'Tribute Thursdays' series for 2026 — tribute bands, food trucks, lawn games, family-friendly.",
            studentTip: "Lawn tickets are usually the cheapest way in — check afterhoursinnsbrook.com for current pricing."
          },
          { name: "Henrico Theatre", area: "Highland Springs", website: "https://henricocounty.us/parks-recreation/cultural-arts/henrico-theatre/", typicalCost: 8, notes: "Restored 1938 movie palace, now a county-run multi-use venue for film, music, dance, and theatre." },
          { name: "Regal Virginia Center", area: "Glen Allen", website: "https://www.regmovies.com/", typicalCost: 7, notes: "Mainstream first-run movies; watch for Tuesday discount pricing." },
          { name: "Regal Westchester Commons", area: "Midlothian-adjacent", website: "https://www.regmovies.com/", typicalCost: 7, notes: "Mainstream first-run movies; watch for Tuesday discount pricing." },
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
        ],
        shopping: [
          { name: "Goodwill (Tom Leonard Dr)", area: "Glen Allen", website: "https://www.gwcentralcoastalva.org/", typicalCost: 6, notes: "Large Goodwill of Central and Coastal Virginia location." },
          { name: "Goodwill (Virginia Center Commons)", area: "Glen Allen", website: "https://www.gwcentralcoastalva.org/", typicalCost: 6, notes: "Second Goodwill location near Virginia Center Commons." },
          { name: "West End Thrift Store", area: "West End", typicalCost: 8, notes: "Local consignment-oriented thrift shop with a loyal following." },
          { name: "Macy's Backstage", area: "Short Pump Town Center", website: "https://www.macys.com/", typicalCost: 15, notes: "Outlet/clearance arm of Macy's inside Short Pump Town Center." },
          { name: "Short Pump Town Center", area: "Short Pump", website: "https://www.simon.com/mall/short-pump-town-center", typicalCost: 30, notes: "140+ stores; mainstream mall pricing, but anchor-store clearance racks (Dillard's, Macy's, Nordstrom Rack) can be affordable." },
          { name: "GreenGate Shopping Center", area: "Short Pump", typicalCost: 25, notes: "Upscale shopping and dining center near Short Pump." }
        ]
      }
    },

    "boston, ma": {
      displayName: "Boston, MA",
      photo: "assets/boston-skyline.jpg",
      photoCredit: "Boston, MA skyline photo",
      categories: {
        groceries: [
          { name: "Aldi (multiple Boston locations)", area: "Citywide", website: "https://www.aldi.us/", typicalWeeklyCost: 50, notes: "Rated lowest average prices in Greater Boston — about 28% below the all-store average." },
          {
            name: "Market Basket (closest locations just outside city line)",
            area: "Greater Boston",
            website: "https://www.shopmarketbasket.com/",
            typicalWeeklyCost: 55,
            notes: "Consistently rated cheapest traditional supermarket chain in the area, ~15% below average.",
            deals: [
              "Grilling season: chicken wings, chicken breast, chicken tenders, top round roast, and pork ribs on sale",
              "Produce: whole watermelon, raspberries, blackberries, zucchini, and summer cookout staples",
              "Beverages: soda, lemonade, juices, and beer specials for the holiday weekend",
              "Bakery & deli: apple pie, rolls, cupcakes, and prepared foods on sale"
            ],
            dealsUpdated: "2026-06-27",
            dealsNote: "Deals change weekly — check shopmarketbasket.com/weekly-flyer for your exact location."
          },
          {
            name: "Trader Joe's (multiple Boston locations)",
            area: "Citywide",
            website: "https://www.traderjoes.com/",
            typicalWeeklyCost: 65,
            notes: "Similar pricing to Shaw's, slightly below Stop & Shop; rated highest for quality.",
            deals: [
              "No traditional BOGO/weekly-ad system — prices are everyday-low instead",
              "Rotating seasonal items worth watching: Garlic Butter Irish Potato Chips, Sparkling Lemonade, Hot Honey Mustard ($1.99)",
              "Mini Strawberry Sheet Cakes ($5.99) available through August"
            ],
            dealsUpdated: "2026-06-27",
            dealsNote: "Trader Joe's doesn't run weekly sales — check traderjoes.com for current seasonal items."
          },
          {
            name: "Stop & Shop (multiple Boston locations)",
            area: "Citywide",
            website: "https://stopandshop.com/",
            typicalWeeklyCost: 70,
            notes: "Mid-range pricing; loyalty card discounts help offset cost.",
            deals: [
              "Chicken breast $2.99/lb, salmon fillets $8.99/lb, steak BOGO",
              "Perdue drumsticks or thighs $1.79/lb",
              "Blueberries $1.99, loose corn 3 for $1, peppers 99 cents"
            ],
            dealsUpdated: "2026-06-27",
            dealsNote: "Deals vary by location — check stopandshop.com/savings/weekly-ad for your exact store."
          },
          { name: "Shaw's (multiple Boston locations)", area: "Citywide", website: "https://www.shaws.com/", typicalWeeklyCost: 70, notes: "Mid-range pricing, similar to Trader Joe's on most staples." }
        ],
        entertainment: [
          { name: "Harvard Art Museums", area: "Harvard Square (Boston/Cambridge border)", website: "https://harvardartmuseums.org/", typicalCost: 0, notes: "Free admission every day of the week." },
          { name: "MIT List Visual Arts Center", area: "Kendall Square", website: "https://listart.mit.edu/", typicalCost: 0, notes: "Always-free contemporary art museum." },
          { name: "USS Constitution", area: "Charlestown", website: "https://www.nps.gov/bost/planyourvisit/uss-constitution.htm", typicalCost: 0, notes: "Free admission year-round; oldest commissioned warship still afloat." },
          { name: "Freedom Trail", area: "Downtown / North End", website: "https://www.thefreedomtrail.org/", typicalCost: 0, notes: "Free self-guided 2.5-mile walk through 16 historic sites." },
          { name: "Hatch Shell Concerts", area: "Esplanade", website: "https://www.esplanade.org/", typicalCost: 0, notes: "Free outdoor concerts and movie nights along the Charles River, warmer months." },
          { name: "Shakespeare on the Common", area: "Boston Common", website: "https://www.commshakes.org/", typicalCost: 0, notes: "Free outdoor Shakespeare performances in summer." },
          {
            name: "Museum of Fine Arts (MFA)",
            area: "Fenway",
            website: "https://www.mfa.org/",
            typicalCost: 25,
            notes: "General admission; special exhibits cost more.",
            studentTip: "Free for full-time students with valid ID, including MIT undergrad/grad students via the University Membership Program."
          },
          {
            name: "Institute of Contemporary Art (ICA)",
            area: "Seaport",
            website: "https://www.icaboston.org/",
            typicalCost: 10,
            notes: "Waterfront contemporary art museum.",
            studentTip: "Free admission Thursdays 5-9pm; $10 student rate other times."
          },
          { name: "MIT Museum", area: "Kendall Square", website: "https://mitmuseum.mit.edu/", typicalCost: 5, notes: "Hands-on science and tech exhibits.", studentTip: "Free Sundays 10am-noon and the second Friday of each month 5-8pm; $5 student rate otherwise." },
          { name: "Boston Children's Museum", area: "Fort Point", website: "https://bostonchildrensmuseum.org/", typicalCost: 1, notes: "$1 entry Sunday afternoons 1-4pm with advance reservation." }
        ],
        diningOut: [
          { name: "Bleacher Bar", area: "Fenway", website: "https://www.bleacherbarboston.com/", typicalCost: 15, notes: "Bar/grill near Fenway Park.", studentTip: "15% off food with valid student ID." },
          { name: "Caffè Nero (multiple locations)", area: "Citywide", website: "https://caffenero.com/us/", typicalCost: 6, notes: "Coffee shop chain.", studentTip: "20% off drinks for students via their app." },
          { name: "Food trucks at City Hall Plaza", area: "Downtown", typicalCost: 10, notes: "Rotating affordable food trucks on weekdays." }
        ],
        shopping: [
          {
            name: "Goodwill (Commonwealth Ave)",
            area: "Allston / BU campus area",
            website: "https://www.goodwill.org/",
            typicalCost: 6,
            notes: "Sits in the heart of Boston's student district near BU. Dresses from $7.99, women's short-sleeve shirts $4.99.",
            studentTip: "College students get 15% off every Thursday with valid ID."
          },
          { name: "Downtown Crossing", area: "Downtown", website: "https://www.downtowncrossing.org/", typicalCost: 15, notes: "Discount shopping district — TJ Maxx, Marshalls, Primark, and more clustered together." },
          { name: "Allston-Brighton thrift circuit", area: "Allston / Brighton", typicalCost: 5, notes: "Dense cluster of thrift and secondhand shops.", studentTip: "Late May through mid-June (college move-out season) is when thrift stores fill up with nearly-new donations — best time to shop." },
          { name: "Prudential Center", area: "Back Bay", website: "https://www.prudentialcenter.com/", typicalCost: 30, notes: "Mainstream mall; watch for clearance racks and seasonal sales for affordable finds." }
        ]
      }
    },

    "cambridge, ma": {
      displayName: "Cambridge, MA",
      photo: "assets/boston-skyline.jpg",
      photoCredit: "Boston, MA skyline photo",
      categories: {
        groceries: [
          {
            name: "Trader Joe's (Memorial Drive)",
            area: "Riverside",
            website: "https://www.traderjoes.com/",
            typicalWeeklyCost: 60,
            notes: "Along the Charles River; consistently good value and quality.",
            deals: [
              "No traditional BOGO/weekly-ad system — prices are everyday-low instead",
              "Rotating seasonal items worth watching: Garlic Butter Irish Potato Chips, Sparkling Lemonade, Hot Honey Mustard ($1.99)"
            ],
            dealsUpdated: "2026-06-27",
            dealsNote: "Trader Joe's doesn't run weekly sales — check traderjoes.com for current seasonal items."
          },
          { name: "Trader Joe's (Fresh Pond Pkwy)", area: "Fresh Pond", website: "https://www.traderjoes.com/", typicalWeeklyCost: 60, notes: "Second Cambridge location, near Fresh Pond." },
          { name: "Star Market (White St, pickup)", area: "Porter Square area", website: "https://www.starmarket.com/", typicalWeeklyCost: 65, notes: "Grocery pickup available; mid-range pricing." },
          { name: "Star Market (Porter Square Mall)", area: "Porter Square", website: "https://www.starmarket.com/", typicalWeeklyCost: 65, notes: "Mid-range pricing, convenient T access." },
          {
            name: "Market Basket (Union Square, Somerville border)",
            area: "Near Union Square",
            website: "https://www.shopmarketbasket.com/",
            typicalWeeklyCost: 50,
            notes: "One of the only true discount supermarkets accessible to Cambridge residents — lowest prices in the area, e.g. milk as low as $2.59.",
            deals: [
              "Grilling season: chicken wings, chicken breast, chicken tenders, top round roast, and pork ribs on sale",
              "Produce: whole watermelon, raspberries, blackberries, zucchini, and summer cookout staples",
              "Beverages: soda, lemonade, juices, and beer specials for the holiday weekend",
              "Bakery & deli: apple pie, rolls, cupcakes, and prepared foods on sale"
            ],
            dealsUpdated: "2026-06-27",
            dealsNote: "Deals change weekly — check shopmarketbasket.com/weekly-flyer for your exact location."
          }
        ],
        entertainment: [
          { name: "Harvard Square wandering / street performers", area: "Harvard Square", typicalCost: 0, notes: "Free people-watching, bookstores, boutiques, and street performances." },
          { name: "Harvard campus guided tours", area: "Harvard Square", website: "https://www.harvard.edu/visitor/", typicalCost: 0, notes: "Free guided tours covering campus history." },
          { name: "Harvard Art Museums", area: "Harvard Square", website: "https://harvardartmuseums.org/", typicalCost: 0, notes: "Free admission every day." },
          { name: "Harvard Semitic Museum", area: "Harvard Square", website: "https://semiticmuseum.harvard.edu/", typicalCost: 0, notes: "40,000+ Near Eastern artifacts — pottery, seals, sculpture, tablets." },
          { name: "MIT List Visual Arts Center", area: "Kendall Square", website: "https://listart.mit.edu/", typicalCost: 0, notes: "Always-free contemporary art museum." },
          {
            name: "American Repertory Theater",
            area: "Harvard Square",
            website: "https://americanrepertorytheater.org/",
            typicalCost: 20,
            notes: "Professional theater at the Loeb Drama Center.",
            studentTip: "Same-day rush tickets $20, no fees, in-person only at the box office."
          },
          { name: "MIT Museum", area: "Kendall Square", website: "https://mitmuseum.mit.edu/", typicalCost: 5, notes: "Hands-on science and tech exhibits.", studentTip: "Free Sundays 10am-noon and the second Friday of each month 5-8pm." }
        ],
        diningOut: [
          { name: "Caffè Nero (Harvard Square)", area: "Harvard Square", website: "https://caffenero.com/us/", typicalCost: 6, notes: "Coffee shop.", studentTip: "20% off drinks for students via their app." },
          { name: "Loretta's Last Call", area: "Central Square", typicalCost: 10, notes: "Bar food.", studentTip: "50% off appetizers Mon-Thu, 2-7pm, with valid student ID." }
        ],
        shopping: [
          { name: "The Garment District", area: "Kendall Square", website: "https://garmentdistrict.com/", typicalCost: 2, notes: "Large clothing store with curated racks upstairs and the legendary Dollar-a-Pound bins in the basement.", studentTip: "Short walk from Kendall/MIT Red Line T station — a favorite for budget-conscious MIT/Harvard students." },
          { name: "Goodwill (Cambridge)", area: "Cambridge", website: "https://www.goodwill.org/", typicalCost: 6, notes: "Consistently rated as having some of the best prices around." },
          { name: "Boomerangs (Central Square)", area: "Central Square", website: "https://shop.mtwyouth.org/pages/boomerangs", typicalCost: 8, notes: "Thrift shop with strong overall price/style balance; proceeds support HIV/AIDS services." },
          { name: "CambridgeSide Galleria", area: "East Cambridge", website: "https://www.cambridgeside.com/", typicalCost: 25, notes: "Mainstream mall; check clearance sections for affordable finds." }
        ]
      }
    },

    "somerville, ma": {
      displayName: "Somerville, MA",
      photo: "assets/boston-skyline.jpg",
      photoCredit: "Boston, MA skyline photo",
      categories: {
        groceries: [
          {
            name: "Market Basket (Union Square)",
            area: "Union Square",
            website: "https://www.shopmarketbasket.com/",
            typicalWeeklyCost: 50,
            notes: "Lowest prices in the Cambridge/Somerville area — 'More for Your Dollar.'",
            deals: [
              "Grilling season: chicken wings, chicken breast, chicken tenders, top round roast, and pork ribs on sale",
              "Produce: whole watermelon, raspberries, blackberries, zucchini, and summer cookout staples",
              "Beverages: soda, lemonade, juices, and beer specials for the holiday weekend",
              "Bakery & deli: apple pie, rolls, cupcakes, and prepared foods on sale"
            ],
            dealsUpdated: "2026-06-27",
            dealsNote: "Deals change weekly — check shopmarketbasket.com/weekly-flyer for your exact location."
          },
          {
            name: "Trader Joe's (Somerville)",
            area: "Assembly Row area",
            website: "https://www.traderjoes.com/",
            typicalWeeklyCost: 60,
            notes: "Good value and quality, especially on prepared foods and snacks.",
            deals: [
              "No traditional BOGO/weekly-ad system — prices are everyday-low instead",
              "Rotating seasonal items worth watching: Garlic Butter Irish Potato Chips, Sparkling Lemonade, Hot Honey Mustard ($1.99)"
            ],
            dealsUpdated: "2026-06-27",
            dealsNote: "Trader Joe's doesn't run weekly sales — check traderjoes.com for current seasonal items."
          },
          { name: "Star Market (Beacon St)", area: "Beacon Street", website: "https://www.starmarket.com/", typicalWeeklyCost: 65, notes: "Mid-range pricing, convenient for Davis/Porter Square area." }
        ],
        entertainment: [
          {
            name: "Somerville Theatre",
            area: "Davis Square",
            website: "https://www.somervilletheatre.com/",
            typicalCost: 12,
            notes: "Independent theater and concert venue — movies, live events, and the Museum of Bad Art.",
            studentTip: "Watch for student-priced matinee showings."
          },
          { name: "Tufts campus events (Tufts University Social Collective)", area: "Davis Square / Tufts campus", website: "https://studentactivities.tufts.edu/", typicalCost: 0, notes: "Free or low-cost student events and activities open around campus." },
          {
            name: "Coolidge Corner Theatre",
            area: "Near Somerville/Brookline",
            website: "https://www.coolidge.org/",
            typicalCost: 25,
            notes: "Independent cinema.",
            studentTip: "All performances $25 flat for full-time students with valid ID, promo code DISCOUNT."
          }
        ],
        diningOut: [
          { name: "Davis Square food spots (rotating cheap eats)", area: "Davis Square", typicalCost: 10, notes: "Dense cluster of affordable restaurants near the Tufts/Davis T stop." }
        ],
        shopping: [
          { name: "High Energy Vintage", area: "Davis Square", typicalCost: 15, notes: "Vintage clothing dating back to the 1940s." },
          { name: "Blue Bandana Relics", area: "Bow Market", website: "https://bowmarketsomerville.com/", typicalCost: 12, notes: "Curated menswear, industrial antiques, and Americana inside Bow Market." },
          { name: "Goodwill (Somerville area)", area: "Somerville / Davis Square", website: "https://www.goodwill.org/", typicalCost: 6, notes: "Same Goodwill network as Boston/Cambridge — affordable secondhand clothing." },
          { name: "Assembly Row", area: "Assembly Square", website: "https://www.assemblyrow.com/", typicalCost: 25, notes: "Open-air shopping center; check clearance racks at anchor stores for affordable finds." }
        ]
      }
    }
  }
};
