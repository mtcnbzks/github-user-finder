import Image from "next/image";
import Link from "next/link";

import { MdLocationOn } from "react-icons/md";

export interface User {
  id: number;
  avatar_url: string;
  repos_url: string;
  name: string;
  company: string;
  html_url: string;
  location: string;
  email: string;
  bio: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: Date;
}

type Props = {
  userInfo: User;
};

export default function UserCard({ userInfo }: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-4 m-8 border-2 border-indigo-600 p-4">
      <div className="flex flex-col items-center justify-center">
        {" "}
        {/* Değişiklik burada */}
        <Link href={userInfo.html_url}>
          <Image
            className="rounded-full"
            width={128}
            height={128}
            src={userInfo.avatar_url}
            alt="user-avatar"
            priority={true}
          />
        </Link>
        <button className="btn btn-active btn-secondary btn-xs mt-2">
          VIEW PROFILE
        </button>
      </div>

      <div className="flex flex-col mt-4 md:mt-0 text-center md:text-left">
        <div className="flex gap-2">
          <div className="badge badge-accent gap-2">
            {" "}
            {/* Değişiklik burada */}
            Public Repos: {userInfo.public_repos}
          </div>
          <div className="badge badge-accent gap-2">
            {" "}
            {/* Değişiklik burada */}
            Public Gists: {userInfo.public_gists}
          </div>
        </div>

        <h1 className="text-blue-500 font-bold text-2xl mt-2">
          {userInfo.name}
        </h1>
        {userInfo.bio && <h3 className="italic text-sm">{userInfo.bio}</h3>}
        <div className="flex items-center mt-1">
          <MdLocationOn className="text-violet-600" />
          <h3 className="ml-1">{userInfo.location}</h3>
        </div>
        <div className="flex gap-2 text-sm mt-1">
          <h2>Member Since:</h2>
          <span>{new Date(userInfo.created_at).toLocaleDateString()}</span>
        </div>
        <div className="flex gap-2 mt-2">
          <div className="badge badge-primary gap-2">
            {" "}
            {/* Değişiklik burada */}
            Following: {userInfo.following}
          </div>
          <div className="badge badge-primary gap-2">
            {" "}
            {/* Değişiklik burada */}
            Followers: {userInfo.followers}
          </div>
        </div>
      </div>
    </div>
  );
}
