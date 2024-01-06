type BreadcrumbProps = {
    list: Array<{name: string, url: string, active: boolean}>
};

const Breadcrumb = (props : BreadcrumbProps) => {
    const list = props.list;

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {
                    list.map((item, index) => {
                        return (
                            <li className={`breadcrumb-item ${item.active ? 'active' : ''}`} aria-current="page" key={index}>
                                { item.active ? item.name : <a href={item.url}>{item.name}</a> }
                            </li>
                        );
                    })
                }
            </ol>
        </nav>
    );
}

export default Breadcrumb;