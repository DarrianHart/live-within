# Live Within

Short for "Living Within Your Means" — a small web app that helps people find affordable groceries, entertainment, dining, and student discounts in their area, filtered by what they want to spend and over what time period (daily/weekly/weekend).

Live site: https://darrianhart.github.io/live-within/

## How it's built

This is a static site: plain HTML, CSS, and JavaScript, no build step, no backend, no database. All the searchable data (stores, venues, prices, deals) lives in [`data.js`](data.js) as a single JavaScript object, organized by city.

This is intentionally simple for a first version. It's the right fit while the app covers a couple of cities and a few dozen listings. It stops being the right fit once any of these becomes true:

- You want non-technical people (or users) to add/edit listings without editing code.
- The dataset grows large enough that shipping it all to every visitor's browser is wasteful.
- You need accounts, saved searches, or anything that has to persist per-user.

At that point, the next step is a real backend with a database (e.g. a small Node/Express + Postgres setup, or a hosted service like Supabase/Firebase) instead of `data.js`. Don't build that until one of the triggers above actually happens.

## Updating data

Store hours, prices, and especially weekly deals go stale. There's no automatic refresh — there's no public API that hands out "this week's grocery deals," so updates are manual:

1. Search for current deals/info for the store or venue you want to update.
2. Edit the relevant entry in `data.js`. Items with weekly deals use a `deals` array, a `dealsUpdated` date, and a `dealsNote` pointing back to the store's own page.
3. Bump `LIVE_WITHIN_DATA.lastUpdated` at the top of `data.js` — this date shows in the site footer so visitors know how fresh the data is.
4. Commit and push; GitHub Pages redeploys automatically from `main`.

## Adding a new city

Add a new key under `cities` in `data.js` following the same shape as `"richmond, va"` or `"henrico, va"` — a `displayName` and a `categories` object with `groceries`, `entertainment`, and `diningOut` arrays.

## Feedback

There's a "Send feedback" link in the site footer (mailto). No analytics are wired up yet, so right now feedback email is the only signal for what to prioritize next.
