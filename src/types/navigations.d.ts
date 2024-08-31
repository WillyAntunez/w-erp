export type INavChildrenDisplayType = 'FLOATING' | 'DROPDOWN';

export type INavIconType = 'MUI' | 'FA';

export type AsideItemPropsBase = {
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    onMouseOver?: (event: React.MouseEvent<HTMLElement>) => void;
    label?: string;
    icon?: string | null;
    iconType?: INavIconType;
};

export interface IAsideItem extends AsideItemPropsBase {
    type?:
        | 'EXPANSIBLE'
        | 'SEPARATOR'
        | 'BUTTON'
        | 'INTERNAL'
        | 'EXTERNAL'
        | 'PRINCIPAL'
        | 'ROUTE-ONLY';
    expansibleType?: INavChildrenDisplayType;
    isExpanded?: boolean;
    path?: string;
    level?: number;
    active?: boolean;
    keepAsideOpen?: boolean;
}

export interface INavigation extends IAsideItem {
    /**
     * The label of the navigation item
     */
    label?: string;
    /**
     * The icon type (MUI or FA)
     */
    iconType?: INavIconType;
    /**
     * The icon of the navigation item
     */
    icon?: React.ReactNode;
    /**
     * The path of the navigation react component
     */
    component?: LazyExoticComponent<() => Element>;
    /**
     * The children of the navigation item
     */
    children?: INavigation[];
    /**
     * The path of the navigation item
     */
    path?: string;
    /** 
        how childrens should be displayed in desktop, as a floating menu or as a dropdown menu
    */
    childrenDisplayType?: INavChildrenDisplayType;
}
