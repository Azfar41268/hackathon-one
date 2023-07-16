import Image from 'next/image';
import Wrapper from '../components/wrapper';
import Link from 'next/link';
import { Item } from '@/lib/drizzle';

async function getProducts() {
    const products = await fetch("http://localhost:3000/api/products", { cache: 'no-store' });

    if (!products.ok) {
        throw new Error("Failed to fetch data!");
    }

    return products.json();
}

export default async function Products() {
    const { products } = await getProducts();
    return(
        <div className='flex justify-center items-center pt-10'>
            <Wrapper>
                <div className='flex flex-col justify-between gap-y-10 items-center'>
                    <div className='flex flex-col lg:flex-row justify-between items-center w-full'>
                        <div className='flex flex-wrap gap-x-52 gap-y-10'>
                            {products.map((item: Item) => (
                                <div className='flex flex-col justify-between items-center hover:scale-105 duration-300'>
                                    <Link href={`./product/${item.id}`}>
                                        <Image src={"/" + item.url + ".png"} width={230} height={470} alt="" />
                                    </Link>
                                    <h2 className='text-xl font-semibold'>
                                        {item.name}
                                    </h2>
                                    <h3 className='text-lg font-semibold opacity-60'>
                                        {item.type}
                                    </h3>
                                    <h2 className='text-xl font-bold'>
                                        ${item.price}
                                    </h2>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}