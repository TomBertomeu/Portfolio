import type { Profile } from "@/types/profile";

export interface IProfileRepository {
  get(): Profile;
}
