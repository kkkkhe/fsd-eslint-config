import { PropsWithChildren } from "react";

import { entity } from "../../entities/my-entity";
import { feature } from "../../features/my-feature";

import { WidgetType } from "./type";

console.log(feature, entity)

export const widget: WidgetType ={
    name: 'asfs'
}

function s({children}:PropsWithChildren){
    return <></>
}