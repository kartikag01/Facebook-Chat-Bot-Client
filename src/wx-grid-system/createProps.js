function getStyle(props, type) {
    if (type === 'grid')
        return {
            'padding': props.padding,
            'margin' : props.margin,
        }
    if (type === 'row')
        return {
            'padding': props.rowSpacing,
        }
    if (type === 'col')
        return {}
}

export default function createProps(propTypes, props, classNames, type) {
    let newProps = {};
    let style    = getStyle(props, type);

    Object.keys(props)
        .filter(key => (key === 'children' || !propTypes[key]))
        .forEach(key => (newProps[key] = props[key]));

    let {padding, margin, rowSpacing, ...restProps}          = newProps;
    const className = classNames.filter(cn => cn).join(' ');
    return Object.assign({}, restProps, {className}, {style});
}
