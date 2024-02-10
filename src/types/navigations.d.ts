export enum IconType {
    MUI = 'MUI',
    FA = 'FA',
}

export interface INavigation {
    /**
     * The label of the navigation item
     */
    label: string;
    /**
     * The icon type (MUI or FA)
     */
    iconType: 'MUI' | 'FA';
    /**
     * The icon of the navigation item
     */
    icon: string;
    /**
     * The path of the navigation react component
     */
    component: string;
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
    childrenDisplayType?: 'FLOATING' | 'DROPDOWN';
}
