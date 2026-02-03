import pocketBase from "pocketbase";
export const pb = new pocketBase("http://localhost:8090");

pb.autoCancellation(false);
