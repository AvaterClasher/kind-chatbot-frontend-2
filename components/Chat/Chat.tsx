import { Message } from "@/types";
import { FC } from "react";
import { ResetChat } from "./ResetChat";

interface Props {
    message: Message[];
    loading: boolean;
}

export const Chat: FC<Props> = ({ message, loading }) => {
    return (
        <>
            <div className="flex flex-row justify-between items-center mb-4">
                <ResetChat onReset={() => console.log("Reset")} />
            </div>
            <div className="mt-4 bottom-[56px] left-0 w-full">
                Chatinput
            </div>
        </>
    )
}