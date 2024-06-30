import { useApplicationStore } from '@/hooks/useApplicationStore';
import { Box, Tab, Tabs } from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import {
    useNavigate,
    useParams,
    useSearchParams,
    useLocation,
    URLSearchParamsInit,
} from 'react-router-dom';

const TabPanel = (props: any) => {
    const { children, value, index } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`custom-tabpanel-${index}`}
            aria-labelledby={`custom-tab-${index}`}
        >
            {value === index && (
                <Box sx={{ paddingX: 1, paddingY: 3 }}>{children}</Box>
            )}
        </div>
    );
};

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index: number) {
    return {
        id: `custom-tab-${index}`,
        'aria-controls': `custom-tabpanel-${index}`,
    };
}

// * to make the routedMode work you should add the optional parameter 'tab' in the router
// * example: 'path='/manage/:id/:tab?'

type IRoutedTabsProps = {
    tabs: Array<{
        label?: string;
        slug?: string;
        content: any;
    }>;
    queryMode?: boolean;
    tabQueryParamName?: string;
    routedMode?: boolean;
    tabsProps?: any;
};

const RoutedTabs = ({
    tabs,
    queryMode = false,
    tabQueryParamName = 'tab',
    routedMode = false,
    tabsProps,
}: IRoutedTabsProps) => {
    // TODO: Agregar compatibilidad con hook usePermissions

    const [value, setValue] = useState(0);

    const { tab } = useParams();

    const location = useLocation();
    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();

    const setTabByQuery = (query: string) => {
        const tabIndex = tabs.findIndex(
            (tab) =>
                (tab?.slug && tab.slug === query) ||
                (tab?.label && tab.label === query),
        );

        if (tabIndex >= 0) {
            setValue(tabIndex);
        } else {
            setValue(0);
        }
    };

    const setTabByRoute = (route: string) => {
        const tabIndex = tabs.findIndex(
            (tab) =>
                (tab?.slug && tab.slug === route) ||
                (tab?.label && tab.label === route),
        );

        if (tabIndex >= 0) {
            setValue(tabIndex);
        } else if (!route) {
            setValue(0);
        } else {
            navigate('/404');
        }
    };

    useEffect(() => {
        if (queryMode && routedMode) {
            throw new Error(
                'Error: you can`t have both modes: queryMode and routedMode at the same time in a RoutedTabs ',
            );
        }

        if (routedMode && tab) {
            setTabByRoute(tab);
        }

        // * if queryMode is true read the query and set the tab to the query name or slug
        if (queryMode) {
            const tabParam = searchParams.get(tabQueryParamName);

            if (tabParam) {
                setTabByQuery(tabParam);
            }
        }
    }, []);

    const handleChange = (event: any, newValue: number) => {
        // * if queryMode is enabled change the tab parameter (without change other parameters)
        if (queryMode) {
            let newQuery: number | string | undefined = newValue;

            if (tabs[newValue]?.slug) {
                newQuery = tabs[newValue]?.slug;
            } else if (tabs[newValue]?.label) {
                newQuery = tabs[newValue]?.label;
            }

            setSearchParams({
                ...Object.fromEntries(searchParams),
                [tabQueryParamName]: newQuery,
            } as URLSearchParamsInit);
        }

        if (routedMode) {
            let newQuery: number | string | undefined = newValue;

            if (tabs[newValue]?.slug) {
                newQuery = tabs[newValue]?.slug;
            } else if (tabs[newValue]?.label) {
                newQuery = tabs[newValue]?.label;
            }

            const currentPath = location.pathname;

            let newPath = currentPath;

            if (tab !== undefined) {
                newPath = currentPath.replace(/\/[^/]+$/, `/${newQuery}`);
            } else if (tab === undefined) {
                newPath = currentPath + '/' + newQuery;
            }
            navigate(newPath);
        }

        setValue(newValue);
    };

    //* if routedMode is enabled set the tab on change the route
    useEffect(() => {
        if (routedMode && tab) {
            setTabByRoute(tab);
        }
    }, [tab]);

    //* if queryMode is enabled set the tab on change the search params
    useEffect(() => {
        if (queryMode) {
            const query = searchParams.get(tabQueryParamName);

            if (query) {
                setTabByQuery(query);
            }
        }
    }, [searchParams]);

    const { isMobile, screenWidth } = useApplicationStore();

    return (
        <Box sx={{ width: '100%', height: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    {...tabsProps}
                    variant="scrollable"
                    scrollButtons={screenWidth < 1280}
                    allowScrollButtonsMobile
                    value={value}
                    onChange={handleChange}
                    aria-label="Custom tab"
                    sx={{
                        minHeight: 0,
                    }}
                >
                    {tabs.map((item, index) => (
                        <Tab
                            sx={{
                                textTransform: 'none',
                                fontSize: 14,
                                backgroundColor: 'white',
                                paddingY: 1,
                                minHeight: 0,
                            }}
                            key={index}
                            label={item?.label}
                            {...a11yProps(index)}
                        />
                    ))}
                </Tabs>
            </Box>
            {tabs.map((item, index) => (
                <TabPanel key={index} value={value} index={index}>
                    {item?.content}
                </TabPanel>
            ))}
        </Box>
    );
};

RoutedTabs.propTypes = {
    tabs: PropTypes.array.isRequired,
};

export default RoutedTabs;
