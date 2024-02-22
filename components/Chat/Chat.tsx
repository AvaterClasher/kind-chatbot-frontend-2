import { Message } from "@/types";
import { FC } from "react";

interface Props {
    message: Message[];
    loading: boolean;
}

export const Chat: FC<Props> = ({ message, loading }) => {
    return (
        <>
            <div className="flex flex-row justify-between items-center mb-4">
                Reset
            </div>
            <div className="mt-4 bottom-[56px] left-0 w-full">
                Chatinput
            </div>
        </>
    )
}