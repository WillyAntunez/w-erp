import { INavigation } from '@/types/navigations';
import { AsideItem } from '../AsideItem/AsideItem';
import { DesplegableAsideItem } from '../DesplegableAsideItem/DesplegableAsideItem';

const generateAsideItems = (
    navigations: INavigation[] = [],
    level: number = 1,
    // if some childrenDisplayType is FLOATING, then all childrens should be displayed as floating
    onlyFloatingMenu: boolean = false,
) => {
    const items: JSX.Element[] = [];

    navigations.forEach((nav, index) => {
        if (nav.children) {
            items.push(
                <DesplegableAsideItem
                    type={
                        onlyFloatingMenu ? 'FLOATING' : nav.childrenDisplayType
                    }
                    key={index}
                    label={nav.label}
                    icon={nav.icon}
                    iconType={nav.iconType}
                >
                    {generateAsideItems(
                        nav.children,
                        level + 1,
                        nav.childrenDisplayType === 'FLOATING',
                    )}
                </DesplegableAsideItem>,
            );
        } else {
            items.push(<AsideItem key={index} {...nav} />);
        }
    });

    return items;
};

type IAsideItemsProps = {
    navigations?: INavigation[];
};

export const AsideItems = ({ navigations }: IAsideItemsProps) => {
    return <>{generateAsideItems(navigations)}</>;
};

export default AsideItems;
