// import {Cart} from "@/component/svg/Cart";
import {Phone} from "@/component/svg";
import React from "react";

type UserActionsIconsType = {
    [key:string]: React.ReactElement;
};

export const allCategories = [
    {
        "id": "a0d743c1-c032-4c12-8c52-5cd7999ab252",
        "name": "Люкс",
        "children": []
    },
    {
        "id": "99e23a5b-49a0-48a7-99f7-fb8b4865cdee",
        "name": "Бренди",
        "children": []
    },
    {
        "id": "a8c1a3e6-00eb-4d41-952e-154da97fe2fe",
        "name": "Парфумерія",
        "children": []
    },
    {
        "id": "69bc00d9-7ebd-415b-a007-86d6325e20ba",
        "name": "Макіяж",
        "children": []
    },
    {
        "id": "5f2d2bc2-75db-483e-a6ac-f08dad0ad473",
        "name": "Доглядзаобличам",
        "children": [
            {
                "id": "2da08c08-ef3c-4b64-9a4c-8d2943e8bb98",
                "name": "name-14",
                "children": []
            },
            {
                "id": "f360427d-8e59-4131-bd4d-b59e9f7304b7",
                "name": "name-21",
                "children": []
            },
            {
                "id": "89c3e2f0-9ca7-401f-9a47-d0c1dabb49a7",
                "name": "name-236",
                "children": []
            },
            {
                "id": "967bfd03-70c2-4382-a4d5-05b2fede8c1c",
                "name": "name-25",
                "children": []
            },
            {
                "id": "741f64d9-f8b9-4d38-983e-3cd2c0275d48",
                "name": "name-26",
                "children": []
            },
            {
                "id": "857c9b19-c0d3-45e8-a0ef-e80928b3ccd2",
                "name": "name-27",
                "children": [
                    {
                        "id": "31e467d5-d821-4e8b-abf8-85dbc0cbd74f",
                        "name": "name-24",
                        "children": []
                    }
                ]
            },
            {
                "id": "5f96a2d9-9643-4e4e-8183-2f102dacbbc8",
                "name": "name-28",
                "children": []
            },
            {
                "id": "f26f5e68-8e2b-47b1-bac9-abbe826e5d3a",
                "name": "name-29",
                "children": []
            },
            {
                "id": "7df36932-71cf-48ed-8ed2-c94dc9d1d424",
                "name": "name-3",
                "children": []
            },
            {
                "id": "f14beb4d-943e-489b-9565-c4920cc4c318",
                "name": "name-31",
                "children": []
            },
            {
                "id": "e5466823-4ee0-4242-9f99-ad8b292d5ea6",
                "name": "name-4",
                "children": []
            },
            {
                "id": "e2ff70c8-857e-43b0-8b6b-f81352721215",
                "name": "name-5",
                "children": []
            },
            {
                "id": "505146c4-452b-43c8-90bd-b8e05d7b4269",
                "name": "name-6",
                "children": []
            },
            {
                "id": "242ccb50-8410-47d8-ae6a-c2c9c0d6351a",
                "name": "name-7",
                "children": []
            },
            {
                "id": "f2a6becf-81c7-4758-9b9b-10876bdc3ffb",
                "name": "name-8",
                "children": []
            },
            {
                "id": "7885da70-e531-45b9-a8db-bb0ed28095d8",
                "name": "name-9",
                "children": []
            }
        ]
    },
    {
        "id": "ce7a2c8e-e104-413f-a9a7-8a54f996e118",
        "name": "Доглядзаволоссям",
        "children": [
            {
                "id": "c43fa3bd-ecda-4427-b173-58577707368e",
                "name": "Vichi",
                "children": []
            }
        ]
    },
    {
        "id": "07834739-1a1e-4474-a5dc-29a5824a44fd",
        "name": "Спідня білизна",
        "children": [
            {
                "id": "10a0cc21-6f99-4217-8263-868e392bdb73",
                "name": "стрінги",
                "children": []
            }
        ]
    },
    {
        "id": "827c6437-2f4d-4e5f-b9b8-f26cfa755e94",
        "name": "Товаридлядому",
        "children": [
            {
                "id": "d0a41ac7-909d-4168-8cae-d6f642ed4a52",
                "name": "name-99",
                "children": [
                    {
                        "id": "ec9a8a24-fbcb-413e-a050-748db44678f8",
                        "name": "name-77",
                        "children": []
                    }
                ]
            }
        ]
    }
]

// export const userActionsIcons: UserActionsIconsType =
//     {
//         'cart': <Cart/>,
//         'heart': <Cart/>,
//         'call':  <Phone/>,
//         'user':  <Phone/>,
//     };
export const userActions = [
    {
        name: "Корзина",
        icon: "cart",
        path: "#",
    },
    {
        name: "Аккаунт",
        icon: "user",
        path: "#",
    },
    {
        name: "Список желаний",
        icon: "heart",
        path: "#",
    },
    {
        name: "Связаться с нами",
        icon: "call",
        path: "tel:0800505113",
    },
];

