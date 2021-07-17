import { Fragment } from "react";

export default function ProductDetailPage(props){
    const {loadedProduct} = props;
    console.log(loadedProduct)
    return(
      <Fragment>
            <h1>{loadedProduct.title}</h1>
            <p>{loadedProduct.body}</p>
      </Fragment>
    )
}

export async function getData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const product = await res.json()

    return product;
}

export async function getStaticProps(context){

    const {params} = context;
    const productId = params.pid
    ;

    // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    // const product = await res.json()
    const product = await getData()

    const data = product.find(prod => prod.id == productId)

    return {
        props : {
            loadedProduct : 0 || data ,
        }
    }

}

export async function getStaticPaths(){
    const product = await getData()

    const ids = product.map(prod => prod.id)
    console.log(ids)
    const PathWithParams = ids.map(id => ({params : {pid : id.toString()}}))

    return{
        paths : PathWithParams,
        fallback : 'blocking',
    }
}