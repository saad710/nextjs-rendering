export default function Product(props){
    const {product} = props;
    console.log(product)

    return (
        <div>
          {
              product?.map(
                  post => (
                      <h1 key={post.id}>{post.title}</h1>
                  )
              )
          }
          <h2>hhhh</h2>
        </div>
    )

}

export async function getStaticProps() {
    

    return {
        props : {
            product: [{id: 1 , title: "hello"}],
        },
    }
}