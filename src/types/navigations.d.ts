export type INavChildrenDisplayType = 'FLOATING' | 'DROPDOWN';

export type INavIconType = 'MUI' | 'FA';

export type AsideItemPropsBase = {
    to?: string;
    onClick?: () => void;
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
        | 'PRINCIPAL';
    expansibleType?: INavChildrenDisplayType;
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
    icon?: string;
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
