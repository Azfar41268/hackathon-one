import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import type { product } from '../store/slice/cartSlice';

export default function Cart() {
    // const items: void | product[] = useSelector((state: RootState) => {
    //     state.cart.items
    // })
    return(
        <div>
            <div className="pt-20">
                Hello
            </div>
        </div>
    )
}