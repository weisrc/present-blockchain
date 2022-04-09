import { defineAppSetup } from "@slidev/types";
import key from "./key.json";
import liveSlidev from "live-slidev"
import "@slidev/client/internals/Presenter.vue"

const ROOM_ID = "ba1f51ab-8d96-44f6-8c94-f06d771b4e3a";

export default defineAppSetup(async (ctx) => {
    const ws = new WebSocket("wss://rooms.deno.dev/" + ROOM_ID);
	liveSlidev(ctx, ws, key);
});
