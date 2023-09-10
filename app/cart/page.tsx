import { cartItem } from "@/lib/drizzle";
import { IProduct } from "../product/page";
import Wrapper from "../components/wrapper";
import Image from "next/image";
import { TiDeleteOutline } from "react-icons/ti";
import { urlForImage } from "@/sanity/lib/image";
import { client } from "@/lib/sanityClient";
import { cookies } from "next/headers";

async function getCartData() {
    // const uid = uuid();
    // const setcookies = cookies()
    const user_id = cookies().get("user_id")?.value
    // const res = await fetch(`http://localhost:3000/api/cart?user_id=${user_id}`);
    const res = await fetch(`http://hackathon-one-pi.vercel.app/api/cart?user_id=${user_id}`);

    return res.json();
}

async function getProductData( id: string ) {
    const res = await client.fetch(`*[_type=="product" && _id=="${id}"]{
        category -> {
          category
        },
        type,
        image,
        price,
        url,
        title
      }`);
    
      return res;
    }
    
    export default async function Cart() {
        // const [num, setNum] = useState(1);
    // console.log(num)
    const cart: cartItem[] = await getCartData();
    const totalPrice: number[] = [];
    let quan = 0;

    function numberAdder(numbers: Array<number>) {
        let price = 0;

        for(let i = 0; i > numbers.length; i++) {
            price += numbers[i];
        }

        return price;
    }
    
    return(
        <div>
            <div className="flex items-center justify-center pt-20">
                <Wrapper>
                    <h1 className="pb-20 text-3xl font-bold">Shopping Cart</h1>
                    <div className="flex gap-x-24">
                        <div className="flex flex-col basis-4/6">
                            {cart.map(async (item) => {
                                const products: IProduct[] = await getProductData(item.product_id);
                                return(
                                    <div className="flex flex-col">
                                        {products.map((product) => {
                                            totalPrice.push(product.price * item.quantity);
                                            quan += item.quantity
                                            return(
                                                (
                                                    <div className="flex py-10 gap-x-16">
                                                        <div>
                                                            <Image className="object-cover h-48 rounded-lg w-36" src={urlForImage(product.image).url()} width={36} height={48} alt="" />
                                                        </div>
                                                        <div className="flex flex-col w-full gap-y-5">
                                                            <div className="flex items-center justify-between w-full">
                                                                <h1 className="text-lg font-semibold">{product.title}</h1>
                                                                <button className="text-red-600 duration-300 rounded-full hover:bg-red-600 hover:text-white hover:shadow-lg dark:hover:shadow-white/50 dark:hover:text-black">
                                                                    <TiDeleteOutline size={40} />
                                                                </button>
                                                            </div>
                                                            <div className="flex items-center justify-start w-full">
                                                                {product.type}
                                                            </div>
                                                            <div className="flex items-center justify-center w-full gap-x-3">
                                                                <h1 className="text-lg font-medium">Delivery Estimation:</h1>
                                                                <h1 className="text-lg font-medium text-orange-300">4 Working Days</h1>
                                                            </div>
                                                            <h1 className="text-xl font-semibold">${product.price}</h1>
                                                            <div className="flex items-center justify-between w-full">
                                                                <div className="text-xl font-medium">
                                                                    Quantity:
                                                                </div>
                                                                <div className="flex items-center justify-between w-32">
                                                                    <button className="w-10 h-10 border-2 border-black rounded-full dark:border-white">
                                                                        -
                                                                    </button>
                                                                    <h2 className="text-xl font-semibold">
                                                                        {item.quantity}
                                                                    </h2>
                                                                    <button className="w-10 h-10 border-2 border-black rounded-full dark:border-white">
                                                                        +
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                        {/* Right */}
                        <div className="flex pt-10 basis-2/6">
                            <div className="flex">
                                <div className="flex flex-col gap-10 text-xl font-semibold">
                                    <h1>Order Summary</h1>
                                    <div className="flex items-center justify-between w-full">
                                        <h2>Quantity</h2>
                                        <h2>{quan} Product</h2>
                                    </div>
                                    <div className="flex items-center justify-between w-full">
                                        <h2>Sub Total</h2>
                                        <h2>${numberAdder(totalPrice)}</h2>
                                    </div>
                                    <button className="px-4 py-2 text-white duration-300 rounded-md dark:text-black bg-black/90 dark:bg-gray-400 hover:scale-105 hover:shadow-md dark:hover:shadow-white/50">Process To Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </div>
        </div>
    )
}