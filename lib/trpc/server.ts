import { cache } from "react";
import { appRouter } from "@/server/routers";
import { db } from "@/lib/db";

export const api = cache(() => appRouter.createCaller({ db, userId: null }));
