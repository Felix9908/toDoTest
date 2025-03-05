import fs from "fs";
import path from "path";

export default async (request, context) => {
  try {
    const dbPath = path.join(process.cwd(), "backend/functions/api/db.json");

    const dbData = fs.readFileSync(dbPath, "utf-8");

    const tasks = JSON.parse(dbData).tasks;

    return new Response(JSON.stringify(tasks), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(error.toString(), {
      status: 500,
      headers: { "Content-Type": "text/plain" },
    });
  }
};