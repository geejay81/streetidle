import HangmanPuzzle from "@/components/client-apps/HangmanPuzzle";
import Header from "@/components/page/Header";
import { getCurrentMovie } from "@/data/movies";
import getPageMetaData from "@/lib/getPageMetaData";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const title = "Find the movie title [BETA]";
const description = "Can you find the movie title?";
const pageUrl = `${process.env.BASE_URL}hangman`;

export const metadata: Metadata = getPageMetaData(title, description, pageUrl);

export default async function PostersPage() {
    // TODO: create a specific method to get the hangman movie
    const movie = await getCurrentMovie();

    if (!movie) return notFound();
  
    return (
      <>
        <Header title={title} />
        <main className="grow">
          <div className="max-w-md p-4 mx-auto md:max-w-screen-lg md:px-8">
            <HangmanPuzzle movie={movie} />
          </div>
        </main>
      </>
    );
}