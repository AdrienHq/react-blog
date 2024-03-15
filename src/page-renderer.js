import React from "react";
import {useResolvedPath} from 'react-router-dom'

const generatePage = page => {
    const components = () => require(`./pages/${page}`).default

    try {
        return React.createElement(components())
    } catch (err) {
        console.warn(err)
        return React.createElement(() => 404)
    }
}

export default function PageRenderer() {
    const page = useResolvedPath("").pathname;

    return generatePage(page)
}