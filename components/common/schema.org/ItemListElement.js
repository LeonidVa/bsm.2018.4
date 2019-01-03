const ItemListElement = ({url, name, position}) => {

    return (
        <span itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
            <a itemProp="item" href={url}><span itemProp="name">{name}</span></a>
            <meta itemProp="position" content={position}/>
        </span>
    )
};

export default ItemListElement;