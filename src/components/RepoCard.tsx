export interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  language: string;
}

type Props = {
  repoInfo: Repo;
};

export default function ReposCard({ repoInfo }: Props) {
  return (
    <>
      <div className="flex flex-col m-8 border border-indigo-500 rounded p-2">
        <div className="mb-2">
          <h1 className="text-lg font-bold">{repoInfo.name}</h1>
          <p className="text-gray-600 text-sm">{repoInfo.description}</p>
        </div>
        <div className="flex justify-between space-x-4">
          <div className="text-center">
            <h3 className="text-base font-bold">{repoInfo.stargazers_count}</h3>
            <p className="text-gray-600 text-xs">Stars</p>
          </div>
          <div className="text-center">
            <h3 className="text-base font-bold">{repoInfo.forks_count}</h3>
            <p className="text-gray-600 text-xs">Forks</p>
          </div>
          <div className="text-center">
            <h3 className="text-base font-bold">{repoInfo.watchers_count}</h3>
            <p className="text-gray-600 text-xs">Watchers</p>
          </div>
        </div>
      </div>
    </>
  );
}
