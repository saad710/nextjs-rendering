import Product from "./product";
import Link from 'next/link'

export default function Home(props){
  const {product} = props;
  console.log(product)

  return (
      <div>
        {
            product?.map(
                post => (
                    <h1 key={post.id}><Link href={`/${post.id}`}><a>{post.title}</a></Link></h1>
                )
            )
        }
       
      </div>
  )

}

export async function getStaticProps() {
  console.log('loading ....')
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const product = await res.json()

  return {
      props : {
         product,
      },
      revalidate: 5,
  }
}