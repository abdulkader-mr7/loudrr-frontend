export const STALE_THRESHOLD_MS = 20 * 60 * 1000; // 20 minutes
export const REGIONS = [
{ value: "north_america", label: "North America" },
{ value: "europe", label: "Europe" },
{ value: "middle_east", label: "Middle East" },
{ value: "south_asia", label: "South Asia" },
{ value: "southeast_asia", label: "Southeast Asia" },
{ value: "east_asia", label: "East Asia" },
{ value: "africa", label: "Africa" },
{ value: "latin_america", label: "Latin America" },
{ value: "oceania", label: "Oceania" },
{ value: "cis_eastern_europe", label: "CIS / Eastern Europe" },
];
export const NICHES = [
{ value: "memecoins", label: "Memecoins" },
{ value: "gamefi", label: "GameFi" },
{ value: "trading", label: "Trading" },
{ value: "nfts", label: "NFTs" },
{ value: "defi", label: "DeFi" },
{ value: "ai_tech", label: "AI / Tech" },
{ value: "daos", label: "DAOs" },
];

export function formatKarma(value) {
if (Number.isInteger(value)) {
return value.toLocaleString();
}
return value.toLocaleString(undefined, {
minimumFractionDigits: 2,
maximumFractionDigits: 2,
});
}
export function getScoreMultiplier(score) {
if (score >= 1000) return "1.35x";
if (score >= 800) return "1.30x";
if (score >= 600) return "1.25x";
if (score >= 400) return "1.20x";
if (score >= 200) return "1.15x";
if (score >= 100) return "1.10x";
return "1.0x";
}
export function getScoreTier(score) {
if (score >= 1000) return "GOAT";
if (score >= 800) return "OG";
if (score >= 600) return "Legend";
if (score >= 400) return "Based";
if (score >= 200) return "Degen";
if (score >= 100) return "Normie";
return "Anon";
}