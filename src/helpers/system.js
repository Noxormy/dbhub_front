import {useState, useEffect} from "react"

const copyListeners = []

function useCopy() {
    const [copiedValue, setCopiedValue] = useState('');


    useEffect(() => {
        copyListeners.push(setCopiedValue)

        document.addEventListener('copy', handleCopy);
        handleCopy()

        return () => document.removeEventListener("copy", handleCopy);
    }, []);

    const handleCopy = () => {
        navigator.clipboard.readText()
            .then(text => {
                copyListeners.forEach((set) => set(text))
            })
            .catch(err => {
                console.error('Failed to read clipboard contents: ', err);
            });
    }

    const copy = (text) => {
        navigator.clipboard.writeText(text)
        handleCopy()
    }

    return [copiedValue, copy];
}


export {useCopy}