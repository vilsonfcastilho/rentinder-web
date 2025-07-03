import { getServerSessionFromCookies } from '@/auth'
import { Hero } from '@/components/hero'
import { Highlights } from '@/components/highlights'
import { PostCard } from '@/components/post-card'
import { IPost } from '@/entities/post'

async function getPosts() {
  const token = await getServerSessionFromCookies()

  const res = await fetch('http://localhost:3333/v1/posts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer: ${token}`,
    },
  })

  return res.json()
}

export default async function Home() {
  const res = await getPosts()
  const posts = res?.data?.posts as IPost[]

  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Latest Rentals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {posts?.length > 0 ? (
              posts?.map((post) => (
                <PostCard
                  key={post.id}
                  title={post.title}
                  location={post.address}
                  bedrooms={post.doubleBedroom}
                  value={post.price}
                  images={post.photos[0]}
                />
              ))
            ) : (
              <PostCard
                title="Example"
                location="Example street"
                bedrooms={1}
                value={1000}
                images=""
              />
            )}
          </div>
        </section>
        <Highlights />
      </div>
    </main>
  )
}
