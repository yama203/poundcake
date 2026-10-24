import { getCollection, type CollectionEntry } from "astro:content";

export type Event = CollectionEntry<"events">;

// ファイル名（01, 02, ...）の番号順に並べる
export async function getEvents(): Promise<Event[]> {
  const events = await getCollection("events");
  return events.sort((a, b) => Number(a.id) - Number(b.id));
}

export function eventPath(event: Event): string {
  return `/posts/${event.id}/`;
}

export function eventDescription(event: Event): string {
  const { title, time, dj, place } = event.data;
  return `${title} ${time} @${place} / ${dj}`;
}
