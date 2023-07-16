import Wrapper from "./wrapper";
import { Input } from '../shadcn-ui/input';
import { Button } from '../shadcn-ui/button';

export default function NewsLetter() {
    return(
        <div className="flex items-center justify-center w-full my-10">
            <Wrapper>
                <div className="py-20 flex flex-col relative justify-between items-center gap-y-6">
                    <h1 className="text-3xl w-screen lg:w-fit ml-3 lg:ml-0 font-bold lg:text-4xl">
                        Subscribe To Our Newsletter
                    </h1>
                    <h2 className="text-lg text-slate-600 ml-3 dark:text-gray-100 w-screen lg:w-fit">
                        Get the latest information and promo offers directly
                    </h2>
                    <div className="flex w-full max-w-sm items-center space-x-2">
                        <Input type="email" placeholder="Email" />
                        <Button className="hover:scale-105 transition-all py-1 flex">Get Started</Button>
                    </div>
                    <div className="text-6xl lg:text-9xl font-bold tracking-wider absolute -z-10 opacity-10 lg:opacity-5 top-32 lg:top-[90px]">NEWSLETTER</div>
                </div>
            </Wrapper>
        </div>
    )
}