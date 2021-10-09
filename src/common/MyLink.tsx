const MyLink = (props: any) => {
    return (
        <a
            className={props.className}
            target="_blank"
            rel="noreferrer"
            href={props.href}>
            {props.children}
        </a>)
        ;
};
export default MyLink;