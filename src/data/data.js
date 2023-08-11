import { BiCalendar, BiChat, BiDollar, BiNotepad } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { CiWarning } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";





export const dash_data = [
    {
        title : "EARNINGS (MONTHLY)",
        price : "$40,000",
        icon : <BiCalendar/>,
        color : "#4e73df"
    },
    {
        title : "EARNINGS (ANNUVAL)",
        price : "$40,000",
        icon : <BiDollar/>,
        color : "#1cc88a"
    },
    {
        title : "TASKS",
        price : "50%",
        icon : <BiNotepad/>,
        color : "#36b9cc"
    },
    {
        title : "PENDING REQUESTS",
        price : "18",
        icon : <BiChat/>,
        color : "#f6c23e"
    }
]

// export const data_color = [
//     {
//         color_name : "Primary",
//         color_id : "#4e73df",
//     },
//     {
//         color_name : "Success",
//         color_id : "#1cc88a",
//     },
//     {
//         color_name : "Info",
//         color_id : "#36b9cc",
//     },
//     {
//         color_name : "Warning",
//         color_id : "#f6c23e",
//     },
//     {
//         color_name : "Danger",
//         color_id : "#e74a3b",
//     },
//     {
//         color_name : "Secondary",
//         color_id : "#858796",
//     },
//     {
//         color_name : "Light",
//         color_id : "#f8f9fc",
//         color : "#858796"
//     },
//     {
//         color_name : "Dark",
//         color_id : "#5a5c69",
//     },
// ]

export const circle_btn = [
    {
        btn : <FaFacebookF/>,
        color_id : "#4e73df",
    },
    {
        btn : <TiTick/>,
        color_id : "#1cc88a",
    },
    {
        btn : <BsInfoCircle/>,
        color_id : "#36b9cc",
    },
    {
        btn : <CiWarning/>,
        color_id : "#f6c23e",
    },
    {
        btn : <AiOutlineDelete/>,
        color_id : "#e74a3b",
    }
]