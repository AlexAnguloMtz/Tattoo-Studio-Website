import { MutableRefObject, useRef, useState } from "react"
import { useIntersectionObserver } from "usehooks-ts"

export const useSimpleIntersectionObserver = ({ ref, threshold, freezeOnceVisible = false }: Props) => {
    const entry = useIntersectionObserver(ref, { threshold, freezeOnceVisible });
    const isVisible = !!entry?.isIntersecting;
    return isVisible;
}

interface Props {
    ref: MutableRefObject<HTMLDivElement | null>
    threshold: number,
    freezeOnceVisible?: boolean
}