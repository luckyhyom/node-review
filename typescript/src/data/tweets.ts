type Tweet = {
    id: string,
    text: string,
}

const tweets: Tweet[] = [
    {
        id: '1',
        text: "this is first text"
    }
]

export async function getAll(): Promise<Tweet[]> {
    return tweets;
}