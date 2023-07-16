import Wrapper from "../components/wrapper";
import { FaShoppingBag } from 'react-icons/fa';

export default function Men() {
    return(
        <div className="flex justify-center items-center w-screen py-10 md:py-16 lg:py-28">
            <Wrapper>
                <div className="flex flex-col gap-y-4 justify-center items-center">
                    <h1>
                        <FaShoppingBag size={50} />
                    </h1>
                    <h1 className="text-6xl font-bold">
                        Out Of Stock
                    </h1>
                </div>
            </Wrapper>
        </div>
    )
}