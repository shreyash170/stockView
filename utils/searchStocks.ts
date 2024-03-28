import { stocks } from "@/data";

export const searchStocks = (text: string) => {
  if (!text) return [];

  return stocks.filter(
    (i) =>
      i.ticker.match(new RegExp(text, "i")) ||
      i.companyName.match(new RegExp(text, "i"))
  );
};
