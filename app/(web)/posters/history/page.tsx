import Header from "@/components/page/Header";
import { getHistoricalMovies } from "@/data/movies"
import getPageMetaData from "@/lib/getPageMetaData";
import { Movie } from "@/types/Movie";
import { Metadata } from "next";
import Link from "next/link";

const title = "Previous movie poster puzzles";
const description = "Play the ScreenIdle filmography!";
const pageUrl = `${process.env.BASE_URL}posters/history`;

export const metadata: Metadata = getPageMetaData(title, description, pageUrl);

export default async function PosterHistoryPage() {

    const movies = await getHistoricalMovies();
    const showHistory = movies && movies.length > 0;

    return (
        <>
            <Header title={'Previous movie poster puzzles'} />
            <main className="grow">
                <div className="max-w-md p-4 mx-auto md:max-w-screen-lg md:px-8">
                {showHistory
                ?
                    <ul className="list-none m-0">
                    {movies && movies.map((movie: Movie) => (
                        <li key={movie.gameId} 
                            className="mr-4 my-2 inline-flex">
                            <Link 
                                href={`/posters/history/${movie.gameId}`}
                                className="bg-screenidle-warning text-screenidle-link px-5 py-4 rounded-lg inline-block"
                                prefetch={false}
                                >{movie.gameId}</Link></li>
                    ))}
                    </ul>
                :
                    <p>There are no games to play at the moment, but check back tomorrow to play the first.</p>
                }
                </div>
            </main>
        </>   
    )
}