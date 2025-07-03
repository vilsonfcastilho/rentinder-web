import { getServerSessionFromCookies } from '@/auth'
import { PostCard } from '@/components/post-card'
import { IPost } from '@/entities/post'

async function getPosts() {
  const token = await getServerSessionFromCookies()

  const res = await fetch('http://localhost:3333/v1/posts?category=BUY', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer: ${token}`,
    },
  })

  return res.json()
}

export default async function Buy() {
  const res = await getPosts()
  const posts = res?.data?.posts

  return (
    <div className="flex flex-col items-center">
      <section className="w-full pt-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl/none">
                Find Your Dream House
              </h1>
              <p className="mx-auto max-w-[700px] text-primary-foreground md:text-xl">
                Search through our wide selection of rental properties to find
                your dream home.
              </p>
            </div>
            <form className="w-full max-w-3xl flex gap-4">
              <input
                type="text"
                placeholder="Search by location"
                className="flex-1 h-10 border border-zinc-300 rounded-md px-2"
              />
              <select className="w-40 h-10 border border-zinc-300 rounded-md px-2">
                <option disabled selected>
                  Price range
                </option>
                <option value="0-500">$0 - $500</option>
                <option value="500-1000">$500 - $1,000</option>
                <option value="1000-1500">$1,000 - $1,500</option>
                <option value="1500-2000">$1,500 - $2,000</option>
                <option value="2000-">$2,000+</option>
              </select>
              <select className="w-40 h-10 border border-zinc-300 rounded-md px-2">
                <option disabled selected>
                  Bedrooms
                </option>
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4">4+ Bedrooms</option>
              </select>
              <button className="shrink-0 px-4 bg-black text-white h-10 rounded-md">
                Search
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="w-full items-center pt-12">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 md:px-6">
          {posts?.length > 0 ? (
            posts?.map((post: IPost) => (
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
    </div>
  )
}
