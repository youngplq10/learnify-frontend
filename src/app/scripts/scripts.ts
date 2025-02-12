export const parseToLink = (link: string) : string => {
    return link.toLocaleLowerCase().replaceAll(" ", "-");
}

export const parseFromLinkToString = (link: string) : string => {
    return link.replaceAll("-", " ").replace(/\b\w/g, (char) => char.toUpperCase());
}