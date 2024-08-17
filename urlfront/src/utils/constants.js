export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://urlapp-eight.vercel.app/"
    : "http://localhost:3001";
export const headers = { "Content-Type": "application/json" };
