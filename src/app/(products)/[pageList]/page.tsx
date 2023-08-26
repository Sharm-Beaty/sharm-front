

export async function generateStaticParams() {
    const posts = await fetch('https://.../posts').then((res) => res.json())

    console.log("posts", posts.results)
    return posts.map((post: any) => ({
        slug: post.id,
    }))
}

export default function ProductList({params}: any) {
    return (
        <>
            <>Page {params.pageList}</>
        </>
    );
}
