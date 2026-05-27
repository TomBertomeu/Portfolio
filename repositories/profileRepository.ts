import { profile as profileData } from "@/data/profile";
import type { IProfileRepository } from "@/domain/ports/IProfileRepository";
import type { Profile } from "@/types/profile";

class StaticProfileRepository implements IProfileRepository {
  get(): Profile {
    return profileData;
  }
}

export const profileRepository = new StaticProfileRepository();
