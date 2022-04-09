import { defineAppSetup } from "@slidev/types";
import key from "./key.json";

const ROOM_ID = "ba1f51ab-8d96-44f6-8c94-f06d771b4e3a";

export default defineAppSetup(async (ctx) => {
    const {init} = await import("live-slidev")
    const ws = new WebSocket("wss://rooms.deno.dev/" + ROOM_ID);
	init(ctx, ws, key);
});
