import React from "react";

type UserActionsIconsType = {
    [key:string]: React.ReactElement;
};

export interface IChild {
    id: string;
    name: string;
    localizationKey: string;
    children: IChild[];
}

export interface ICategory {
    id: string;
    name: string;
    localizationKey: string;
    children: IChild[];
}

export interface IUserAction {
    name: string;
    icon: string;
    path: string;
}

export const allCategories:ICategory[] = [
    {
        "id": "a0d743c1-c032-4c12-8c52-5cd7999ab252",
        "name": "Люкс",
        "localizationKey": "luxury",
        "children": [
            {"id": "1", "name": "Luxury-Child1", "children": [], "localizationKey": "luxury-1"},
            {"id": "2", "name": "Luxury-Child2", "children": [], "localizationKey": "luxury-2"},
            {"id": "3", "name": "Luxury-Child3", "children": [], "localizationKey": "luxury-3"},
            {"id": "4", "name": "Luxury-Child4", "children": [], "localizationKey": "luxury-4"},
            {"id": "5", "name": "Luxury-Child5", "children": [], "localizationKey": "luxury-5"}
        ]
    },
    {
        "id": "99e23a5b-49a0-48a7-99f7-fb8b4865cdee",
        "name": "Бренди",
        "localizationKey": "brands",
        "children": [
            {"id": "1", "name": "Brandy-Child1", "children": []},
            {"id": "2", "name": "Brandy-Child2", "children": []},
            {"id": "3", "name": "Brandy-Child3", "children": []},
            {"id": "4", "name": "Brandy-Child4", "children": []},
            {"id": "5", "name": "Brandy-Child5", "children": []}
        ]
    },
    {
        "id": "a8c1a3e6-00eb-4d41-952e-154da97fe2fe",
        "name": "Парфумерія",
        "localizationKey": "perfumery",
        "children": [
            { "id": "1", "name": "Perfume-Child1", "children": [] },
            { "id": "2", "name": "Perfume-Child2", "children": [] },
            { "id": "3", "name": "Perfume-Child3", "children": [] },
            { "id": "4", "name": "Perfume-Child4", "children": [] },
            { "id": "5", "name": "Perfume-Child5", "children": [] },
            { "id": "6", "name": "Perfume-Child6", "children": [] },
            { "id": "7", "name": "Perfume-Child7", "children": [] },
            { "id": "8", "name": "Perfume-Child8", "children": [] }
        ]
    },
    {
        "id": "69bc00d9-7ebd-415b-a007-86d6325e20ba",
        "name": "Макіяж",
        "localizationKey": "makeup",
        "children": [
            { "id": "1", "name": "Makeup-Child1", "children": [] },
            { "id": "2", "name": "Makeup-Child2", "children": [] },
            { "id": "3", "name": "Makeup-Child3", "children": [] },
            { "id": "4", "name": "Makeup-Child4", "children": [] },
            { "id": "5", "name": "Makeup-Child5", "children": [] },
            { "id": "6", "name": "Makeup-Child6", "children": [] },
            { "id": "7", "name": "Makeup-Child7", "children": [] },
            { "id": "8", "name": "Makeup-Child8", "children": [] }
        ]
    },
    {
        "id": "5f2d2bc2-75db-483e-a6ac-f08dad0ad473",
        "name": "Догляд за обличам",
        "localizationKey": "face_care",
        "children": [
            { id: "2da08c08-ef3c-4b64-9a4c-8d2943e8bb98", name: "Care-Child1", children: [] },
            { id: "f360427d-8e59-4131-bd4d-b59e9f7304b7", name: "Care-Child2", children: [] },
            { id: "89c3e2f0-9ca7-401f-9a47-d0c1dabb49a7", name: "Care-Child3", children: [] },
            { id: "967bfd03-70c2-4382-a4d5-05b2fede8c1c", name: "Care-Child4", children: [] },
            { id: "741f64d9-f8b9-4d38-983e-3cd2c0275d48", name: "Care-Child5", children: [] },
            {
                id: "857c9b19-c0d3-45e8-a0ef-e80928b3ccd2",
                name: "Care-Child6",
                "localizationKey": "care-child-6",
                children: [
                    { id: "31e467d5-d821-4e8b-abf8-85dbc0cbd74f", name: "Care-Child7", children: [] },
                ],
            },
            { id: "5f96a2d9-9643-4e4e-8183-2f102dacbbc8", name: "Care-Child8", children: [] },
            { id: "f26f5e68-8e2b-47b1-bac9-abbe826e5d3a", name: "Care-Child9", children: [] },
            { id: "7df36932-71cf-48ed-8ed2-c94dc9d1d424", name: "Care-Child10", children: [] },
            { id: "f14beb4d-943e-489b-9565-c4920cc4c318", name: "Care-Child11", children: [] },
            { id: "e5466823-4ee0-4242-9f99-ad8b292d5ea6", name: "Care-Child12", children: [] },
            { id: "e2ff70c8-857e-43b0-8b6b-f81352721215", name: "Care-Child13", children: [] },
            { id: "505146c4-452b-43c8-90bd-b8e05d7b4269", name: "Care-Child14", children: [] },
            { id: "242ccb50-8410-47d8-ae6a-c2c9c0d6351a", name: "Care-Child15", children: [] },
            { id: "f2a6becf-81c7-4758-9b9b-10876bdc3ffb", name: "Care-Child16", children: [] },
            { id: "7885da70-e531-45b9-a8db-bb0ed28095d8", name: "Care-Child17", children: [] },
        ]
    },
    {
        "id": "ce7a2c8e-e104-413f-a9a7-8a54f996e118",
        "name": "Догляд за волоссям",
        "localizationKey": "hair_care",
        "children": [
            { id: "c43fa3bd-ecda-4427-b173-58577707368e", name: "Hair-Child1", children: [] },
            { id: "c43fa3bd-ecda-4427-b173-648gh1mb333t", name: "Hair-Child1", children: [] },
            { id: "c43fa3bd-ecda-4427-b173-31juj3 3bnz3", name: "Hair-Child1", children: [] },
            { id: "c43fa3bd-ecda-4427-b173-3y1jjb3131fc", name: "Hair-Child1", children: [] },
            { id: "c43fa3bd-ecda-4427-b173-r31hhmje351e", name: "Hair-Child1", children: [] },
            { id: "c43fa3bd-ecda-4427-b173-6l44684df4df", name: "Hair-Child1", children: [] },
            { id: "c43fa3bd-ecda-4427-b173-thfgk468dg31", name: "Hair-Child1", children: [] },
            { id: "c43fa3bd-ecda-4427-b173-t4hf86684fjs", name: "Hair-Child1", children: [] },
        ]
    },
    {
        "id": "07834739-1a1e-4474-a5dc-29a5824a44fd",
        "name": "Спідня білизна",
        "localizationKey": "underwear",
        "children": [
            { id: "10a0cc21-6f99-4217-8263-sdfsdfdsvxcv", name: "Lingerie-Child1", children: [] },
            { id: "10a0cc21-6f99-4217-8263-2xc1v3xcvxcv", name: "Lingerie-Child1", children: [] },
            { id: "10a0cc21-6f99-4217-8263-fdg2f6f6d1b3", name: "Lingerie-Child1", children: [] },
            { id: "10a0cc21-6f99-4217-8263-4d3h4hy6bcgb", name: "Lingerie-Child1", children: [] },
            { id: "10a0cc21-6f99-4217-8263-6j4u64j,3vhn", name: "Lingerie-Child1", children: [] },
            { id: "10a0cc21-6f99-4217-8263-5h7ku64h331n", name: "Lingerie-Child1", children: [] },
            { id: "10a0cc21-6f99-4217-8263-ng168itr3gdd", name: "Lingerie-Child1", children: [] },
        ]
    },
    {
        "id": "827c6437-2f4d-4e5f-b9b8-f26cfa755e94",
        "name": "Товари для дому",
        "children": [
            {
                "id": "d0a41ac7-909d-4168-8cae-d6f642ed4a52",
                "name": "name-99",
                "localizationKey": "home_goods",
                "children": []
            },
            { id: "ec9a8a24-fbcb-413e-a050-748db44678f8", name: "Home-Child2", children: [] },
            { id: "ec9a8a24-fbcb-413e-a050-748dbdfg33df", name: "Home-Child3", children: [] },
            { id: "ec9a8a24-fbcb-413e-a050-748db4486238", name: "Home-Child2", children: [] },
            { id: "ec9a8a24-fbcb-413e-a050-748db4435868", name: "Home-Child2", children: [] },
            { id: "ec9a8a24-fbcb-413e-a050-748db4241618", name: "Home-Child2", children: [] },
            { id: "ec9a8a24-fbcb-413e-a050-748db4484198", name: "Home-Child2", children: [] },
            { id: "ec9a8a24-fbcb-413e-a050-748db4467868", name: "Home-Child2", children: [] },
        ]
    }
]

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

