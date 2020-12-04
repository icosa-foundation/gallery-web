import React from 'react'

export interface Route {
    path: string,
    exact: boolean,
    component: React.FunctionComponent | React.ClassicComponent
}